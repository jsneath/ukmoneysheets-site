import { useEffect, useId, useMemo, useState } from "react";
import {
  calculateOverpayment,
  DEFAULT_INPUTS,
  endDate,
  formatDuration,
  MONTH_NAMES,
  pence,
  pounds,
  type YearMonth,
} from "@/lib/mortgage/overpayment";

/**
 * Free in-page mortgage overpayment calculator (brief 2026-10-19 §3).
 * Server-renders the default result (Test case 1) as real text so crawlers
 * see numbers; hydrates for interactivity. Inputs never leave the browser.
 */

type Fields = {
  balance: string;
  ratePct: string;
  termYears: string;
  termMonths: string;
  monthlyOverpayment: string;
  lumpSum: string;
  allowancePct: string;
};

const DEFAULT_FIELDS: Fields = {
  balance: String(DEFAULT_INPUTS.balance),
  ratePct: String(DEFAULT_INPUTS.ratePct),
  termYears: String(Math.floor(DEFAULT_INPUTS.termMonths / 12)),
  termMonths: String(DEFAULT_INPUTS.termMonths % 12),
  monthlyOverpayment: String(DEFAULT_INPUTS.monthlyOverpayment),
  lumpSum: String(DEFAULT_INPUTS.lumpSum),
  allowancePct: String(DEFAULT_INPUTS.allowancePct),
};

/** "£180,000" / "4.5%" / "" → number ("" counts as 0 for optional fields). */
function num(value: string, emptyAs = Number.NaN) {
  const cleaned = value.replace(/[£,%\s]/g, "");
  if (cleaned === "") return emptyAs;
  return Number(cleaned);
}

function nextCalendarMonth(now = new Date()): YearMonth {
  const m = now.getMonth() + 2; // getMonth is 0-based; +1 for 1-based, +1 for next
  return m > 12 ? { year: now.getFullYear() + 1, month: m - 12 } : { year: now.getFullYear(), month: m };
}

const inputClass =
  "mt-1.5 block h-11 w-full rounded-lg border border-line-strong bg-paper px-3 text-base text-navy shadow-none focus-visible:border-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal";
const labelClass = "block text-sm font-semibold text-teal";

function MoneyField({
  id,
  label,
  hint,
  value,
  onChange,
  prefix,
  suffix,
}: {
  id: string;
  label: string;
  hint?: string;
  value: string;
  onChange: (v: string) => void;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <div className="relative">
        {prefix ? (
          <span aria-hidden="true" className="pointer-events-none absolute top-1/2 left-3 mt-0.75 -translate-y-1/2 text-body">
            {prefix}
          </span>
        ) : null}
        <input
          id={id}
          type="text"
          inputMode="decimal"
          autoComplete="off"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-describedby={hint ? `${id}-hint` : undefined}
          className={`${inputClass} ${prefix ? "pl-7" : ""} ${suffix ? "pr-9" : ""}`}
        />
        {suffix ? (
          <span aria-hidden="true" className="pointer-events-none absolute top-1/2 right-3 mt-0.75 -translate-y-1/2 text-body">
            {suffix}
          </span>
        ) : null}
      </div>
      {hint ? (
        <p id={`${id}-hint`} className="mt-1 text-xs leading-snug text-body">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

export function OverpaymentCalculator() {
  const uid = useId();
  const id = (s: string) => `${uid}-${s}`;
  const [f, setF] = useState<Fields>(DEFAULT_FIELDS);
  // Set after mount so the server and first client render match (no hydration mismatch).
  const [start, setStart] = useState<YearMonth | null>(null);
  useEffect(() => setStart(nextCalendarMonth()), []);

  const set = (k: keyof Fields) => (v: string) => setF((prev) => ({ ...prev, [k]: v }));

  const result = useMemo(
    () =>
      calculateOverpayment({
        balance: num(f.balance),
        ratePct: num(f.ratePct),
        termMonths: num(f.termYears, 0) * 12 + num(f.termMonths, 0),
        monthlyOverpayment: num(f.monthlyOverpayment, 0),
        lumpSum: num(f.lumpSum, 0),
        allowancePct: num(f.allowancePct, 10),
      }),
    [f],
  );

  const thisYear = start?.year ?? 2026;
  const yearOptions = Array.from({ length: 6 }, (_, i) => thisYear + i);

  return (
    <section
      aria-labelledby={id("title")}
      id="calculator"
      className="not-prose my-10 scroll-mt-24 rounded-xl border border-line bg-ivory px-5 py-6 sm:px-7 sm:py-7"
      data-calculator="mortgage-overpayment"
    >
      <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">Free calculator</p>
      <h2
        id={id("title")}
        className="mt-2! mb-0! border-0! pb-0! font-display text-[1.6rem] leading-tight font-semibold text-navy sm:text-[1.85rem]"
      >
        Mortgage overpayment calculator
      </h2>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-body">
        Enter your own figures. The default shows a made-up example, not a quote. Nothing you type leaves this page.
      </p>

      <form className="mt-6 grid gap-x-5 gap-y-4 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()} noValidate>
        <MoneyField id={id("balance")} label="Outstanding balance" prefix="£" value={f.balance} onChange={set("balance")} />
        <MoneyField id={id("rate")} label="Interest rate (a year)" suffix="%" value={f.ratePct} onChange={set("ratePct")} />

        <fieldset className="sm:col-span-1">
          <legend className={labelClass}>Remaining term</legend>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor={id("ty")} className="sr-only">
                Years
              </label>
              <select id={id("ty")} value={f.termYears} onChange={(e) => set("termYears")(e.target.value)} className={inputClass}>
                {Array.from({ length: 41 }, (_, i) => (
                  <option key={i} value={i}>
                    {i} {i === 1 ? "year" : "years"}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor={id("tm")} className="sr-only">
                Months
              </label>
              <select id={id("tm")} value={f.termMonths} onChange={(e) => set("termMonths")(e.target.value)} className={inputClass}>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i} value={i}>
                    {i} {i === 1 ? "month" : "months"}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend className={labelClass}>Next payment due</legend>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor={id("sm")} className="sr-only">
                Month
              </label>
              <select
                id={id("sm")}
                value={start ? start.month : ""}
                disabled={!start}
                onChange={(e) => setStart({ year: start?.year ?? thisYear, month: Number(e.target.value) })}
                className={inputClass}
              >
                {!start ? <option value="">Month</option> : null}
                {MONTH_NAMES.map((name, i) => (
                  <option key={name} value={i + 1}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor={id("sy")} className="sr-only">
                Year
              </label>
              <select
                id={id("sy")}
                value={start ? start.year : ""}
                disabled={!start}
                onChange={(e) => setStart({ month: start?.month ?? 1, year: Number(e.target.value) })}
                className={inputClass}
              >
                {!start ? <option value="">Year</option> : null}
                {yearOptions.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </fieldset>

        <MoneyField
          id={id("x")}
          label="Regular monthly overpayment"
          prefix="£"
          value={f.monthlyOverpayment}
          onChange={set("monthlyOverpayment")}
        />
        <MoneyField
          id={id("l")}
          label="One-off lump sum (optional)"
          hint="Paid before your next payment."
          prefix="£"
          value={f.lumpSum}
          onChange={set("lumpSum")}
        />

        <details className="sm:col-span-2 rounded-lg border border-line bg-paper/60 px-4 py-3">
          <summary className="cursor-pointer text-sm font-semibold text-teal">Advanced: overpayment allowance</summary>
          <div className="mt-3 max-w-xs">
            <MoneyField
              id={id("allow")}
              label="Annual overpayment allowance"
              hint="% of your balance you can overpay each year without an ERC. Check your mortgage offer."
              suffix="%"
              value={f.allowancePct}
              onChange={set("allowancePct")}
            />
          </div>
        </details>
      </form>

      <div aria-live="polite" className="mt-6 min-h-[15rem] rounded-xl bg-mint px-5 py-5 sm:px-6">
        {result.kind === "invalid" ? (
          <ul className="list-disc space-y-1 pl-5 text-[0.95rem] text-navy-soft">
            {result.errors.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        ) : result.kind === "cleared" ? (
          <p className="text-lg font-semibold text-teal-deep">
            This would clear the mortgage. A lump sum of {pounds(result.lumpSum)} covers the {pounds(result.balance)} balance. Ask
            your lender for a redemption figure and check any early repayment charge first.
          </p>
        ) : (
          <>
            <dl className="grid gap-4 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-semibold tracking-[0.12em] text-teal-deep uppercase">Interest saved</dt>
                <dd className="mt-1 font-display text-[2rem] leading-none font-semibold text-teal-deep" data-result="interest-saved">
                  {pounds(result.interestSaved)}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.12em] text-teal-deep uppercase">Time saved</dt>
                <dd className="mt-1 font-display text-[2rem] leading-none font-semibold text-teal-deep" data-result="months-saved">
                  {formatDuration(result.monthsSaved)}
                </dd>
                <dd className="mt-1 text-xs text-navy-soft">{result.monthsSaved} months</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.12em] text-teal-deep uppercase">New end date</dt>
                <dd className="mt-1 font-display text-[2rem] leading-none font-semibold text-teal-deep" data-result="end-date">
                  {start ? endDate(start, result.newTermMonths) : formatDuration(result.newTermMonths)}
                </dd>
                <dd className="mt-1 text-xs text-navy-soft">
                  {start
                    ? `was ${endDate(start, result.termMonths)}`
                    : `left to pay, down from ${formatDuration(result.termMonths)}`}
                </dd>
              </div>
            </dl>

            <p className="mt-5 text-[0.95rem] leading-relaxed text-navy-soft" data-result="summary">
              Paying {pence(result.newMonthlyOutgoing)} a month instead of {pence(result.payment)}
              {num(f.lumpSum, 0) > 0 ? `, plus a ${pounds(num(f.lumpSum, 0))} lump sum,` : ""} cuts total interest from{" "}
              {pounds(result.baselineInterest)} to {pounds(result.newInterest)}. You save {pounds(result.interestSaved)} and finish{" "}
              {formatDuration(result.monthsSaved)} sooner ({result.newTermMonths} payments instead of {result.termMonths}).
            </p>

            {result.reducePayment ? (
              <p className="mt-3 border-t border-teal/20 pt-3 text-[0.95rem] leading-relaxed text-navy-soft" data-result="reduce-payment">
                <strong className="text-teal-deep">Or keep your end date:</strong> with the lump sum alone, your payment falls from{" "}
                {pence(result.payment)} to {pence(result.reducePayment.payment)}, saving {pounds(result.reducePayment.interestSaved)}{" "}
                interest.
              </p>
            ) : null}
          </>
        )}
      </div>

      {result.kind === "ok" && result.overAllowance ? (
        <p role="status" className="mt-4 rounded-lg border-2 border-teal bg-paper px-4 py-3 text-[0.95rem] leading-relaxed text-navy-soft">
          Your first-year overpayments ({pounds(result.firstYearOverpayment)}) are above {num(f.allowancePct, 10)}% of your balance (
          {pounds(result.allowanceAmount)}). Many fixed and discounted deals charge an early repayment charge (ERC) above the
          allowance. Check your mortgage offer.
        </p>
      ) : null}

      <div className="mt-5 text-sm leading-relaxed text-body">
        <p className="font-semibold text-teal">Assumptions</p>
        <ul className="mt-1 list-disc space-y-0.5 pl-5">
          <li>The rate stays the same for the whole term.</li>
          <li>Interest is worked out monthly at 1/12 of the annual rate.</li>
          <li>Any lump sum is paid before your next payment.</li>
          <li>Regular overpayments continue every month.</li>
          <li>Overpayments reduce the balance, and the term rather than the payment.</li>
          <li>No ERCs, fees, offset or part-and-part.</li>
          <li>Illustration only, not a quote. Your lender may charge interest daily, so its figures will differ slightly.</li>
        </ul>
        <p className="mt-3 font-semibold text-navy-soft">
          Your home may be repossessed if you do not keep up repayments on your mortgage.
        </p>
      </div>
    </section>
  );
}
