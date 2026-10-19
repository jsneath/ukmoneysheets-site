/**
 * Pure maths for the in-page mortgage overpayment calculator.
 * Formulas follow the SEO brief (2026-10-19, §3.3): monthly interest at
 * annual/12, full floating point, no monthly penny rounding. The month-by-month
 * simulation is the source of truth; the closed form is only a check.
 * No DOM, no React — safe to run on the server, in the browser and in tests.
 */

export type OverpaymentInputs = {
  /** Outstanding balance, £. */
  balance: number;
  /** Annual interest rate as a percentage, e.g. 4.5 for 4.5%. */
  ratePct: number;
  /** Remaining term in whole months (years × 12 + months). */
  termMonths: number;
  /** Regular extra payment each month, £. */
  monthlyOverpayment: number;
  /** One-off lump sum paid before the next payment, £. */
  lumpSum: number;
  /** Annual overpayment allowance as a % of the balance (warning only). */
  allowancePct: number;
};

export type YearMonth = { year: number; month: number }; // month 1–12

export type OverpaymentResult =
  | { kind: "invalid"; errors: string[] }
  | { kind: "cleared"; lumpSum: number; balance: number }
  | {
      kind: "ok";
      /** Contractual monthly payment P. */
      payment: number;
      /** P + X. */
      newMonthlyOutgoing: number;
      /** Baseline total interest I0 = P × n − B. */
      baselineInterest: number;
      /** Total interest with overpayments I1 (simulation). */
      newInterest: number;
      interestSaved: number;
      termMonths: number;
      /** N: months until the balance hits zero with overpayments. */
      newTermMonths: number;
      monthsSaved: number;
      /** First-year overpayments: 12 × X + L. */
      firstYearOverpayment: number;
      /** allowance% × B. */
      allowanceAmount: number;
      overAllowance: boolean;
      /** Reduce-payment alternative, only when a lump sum is entered. */
      reducePayment: null | {
        payment: number;
        interest: number;
        interestSaved: number;
      };
    };

export const DEFAULT_INPUTS: OverpaymentInputs = {
  balance: 180000,
  ratePct: 4.5,
  termMonths: 22 * 12,
  monthlyOverpayment: 150,
  lumpSum: 0,
  allowancePct: 10,
};

/** Standard annuity payment. r is the monthly rate as a decimal. */
export function monthlyPayment(balance: number, r: number, n: number): number {
  if (n <= 0) return balance;
  if (r === 0) return balance / n;
  return (balance * r) / (1 - Math.pow(1 + r, -n));
}

/** Month-by-month simulation with payment P + X, lump sum applied first. */
export function simulate(
  balance: number,
  r: number,
  n: number,
  payment: number,
  extra = 0,
  lumpSum = 0,
): { months: number; interest: number; balances: number[] } {
  let bal = Math.max(balance - lumpSum, 0);
  let months = 0;
  let interest = 0;
  const balances: number[] = [];
  while (bal > 1e-9 && months < n) {
    const i = bal * r;
    interest += i;
    const pay = Math.min(payment + extra, bal + i);
    bal = bal + i - pay;
    months += 1;
    balances.push(bal);
  }
  return { months, interest, balances };
}

/** Closed-form month count (unrounded) — for checks only. */
export function closedFormMonths(b0: number, r: number, outgoing: number): number {
  if (r === 0) return b0 / outgoing;
  return -Math.log(1 - (r * b0) / outgoing) / Math.log(1 + r);
}

export function validate(inp: OverpaymentInputs): string[] {
  const errors: string[] = [];
  const ok = (v: number) => Number.isFinite(v);
  if (!ok(inp.balance) || inp.balance <= 0 || inp.balance > 10_000_000)
    errors.push("Enter a balance between £1 and £10,000,000.");
  if (!ok(inp.ratePct) || inp.ratePct < 0 || inp.ratePct > 25)
    errors.push("Enter an interest rate between 0% and 25%.");
  if (!ok(inp.termMonths) || inp.termMonths < 1 || inp.termMonths > 40 * 12 + 11)
    errors.push("Choose a remaining term of at least 1 month.");
  if (!ok(inp.monthlyOverpayment) || inp.monthlyOverpayment < 0)
    errors.push("Monthly overpayment can't be negative.");
  if (!ok(inp.lumpSum) || inp.lumpSum < 0)
    errors.push("Lump sum can't be negative.");
  if (!ok(inp.allowancePct) || inp.allowancePct < 0 || inp.allowancePct > 100)
    errors.push("Enter an allowance between 0% and 100%.");
  return errors;
}

export function calculateOverpayment(inp: OverpaymentInputs): OverpaymentResult {
  const errors = validate(inp);
  if (errors.length) return { kind: "invalid", errors };

  const B = inp.balance;
  const n = Math.round(inp.termMonths);
  const r = inp.ratePct / 100 / 12;
  const X = inp.monthlyOverpayment;
  const L = inp.lumpSum;

  if (L >= B) return { kind: "cleared", lumpSum: L, balance: B };

  const P = monthlyPayment(B, r, n);
  const baselineInterest = P * n - B;
  const sim = simulate(B, r, n, P, X, L);
  const newInterest = sim.interest;
  const allowanceAmount = (inp.allowancePct / 100) * B;
  const firstYearOverpayment = 12 * X + L;

  let reducePayment = null as null | { payment: number; interest: number; interestSaved: number };
  if (L > 0) {
    const p2 = monthlyPayment(B - L, r, n);
    const interest = p2 * n - (B - L);
    reducePayment = { payment: p2, interest, interestSaved: baselineInterest - interest };
  }

  return {
    kind: "ok",
    payment: P,
    newMonthlyOutgoing: P + X,
    baselineInterest,
    newInterest,
    interestSaved: baselineInterest - newInterest,
    termMonths: n,
    newTermMonths: sim.months,
    monthsSaved: n - sim.months,
    firstYearOverpayment,
    allowanceAmount,
    overAllowance: firstYearOverpayment > allowanceAmount + 1e-9,
    reducePayment,
  };
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const MONTH_NAMES = MONTHS;

/** (next payment month) + offset months, e.g. offset N − 1 for the final payment. */
export function addMonths(start: YearMonth, offset: number): YearMonth {
  const t = start.year * 12 + (start.month - 1) + offset;
  return { year: Math.floor(t / 12), month: (t % 12) + 1 };
}

export function formatYearMonth(ym: YearMonth): string {
  return `${MONTHS[ym.month - 1]} ${ym.year}`;
}

/** Final payment month for a schedule of `months` payments starting at `start`. */
export function endDate(start: YearMonth, months: number): string {
  return formatYearMonth(addMonths(start, months - 1));
}

/** "4 years 2 months", "11 months", "1 year". */
export function formatDuration(totalMonths: number): string {
  const y = Math.floor(totalMonths / 12);
  const m = totalMonths % 12;
  const part = (v: number, w: string) => `${v} ${w}${v === 1 ? "" : "s"}`;
  if (y && m) return `${part(y, "year")} ${part(m, "month")}`;
  if (y) return part(y, "year");
  return part(m, "month");
}

/** Short form used in tests and the brief: "4y2m". */
export function shortDuration(totalMonths: number): string {
  return `${Math.floor(totalMonths / 12)}y${totalMonths % 12}m`;
}

const gbp0 = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0, minimumFractionDigits: 0 });
const gbp2 = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 2, minimumFractionDigits: 2 });

/** £ to the nearest pound. */
export const pounds = (v: number) => gbp0.format(Math.round(v));
/** £ to the penny (payments). */
export const pence = (v: number) => gbp2.format(v);
