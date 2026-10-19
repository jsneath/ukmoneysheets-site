import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  calculateOverpayment,
  closedFormMonths,
  DEFAULT_INPUTS,
  endDate,
  shortDuration,
  simulate,
  monthlyPayment,
} from "./overpayment.ts";

const near = (actual: number, expected: number, tol: number, label: string) =>
  assert.ok(Math.abs(actual - expected) <= tol, `${label}: ${actual} vs ${expected} (±${tol})`);

const dec2026 = { year: 2026, month: 12 };

describe("mortgage overpayment maths (brief §3.5)", () => {
  it("Test 1 (defaults): £180k, 4.5%, 22y, £150/m", () => {
    assert.deepEqual(DEFAULT_INPUTS, {
      balance: 180000, ratePct: 4.5, termMonths: 264, monthlyOverpayment: 150, lumpSum: 0, allowancePct: 10,
    });
    const r = calculateOverpayment(DEFAULT_INPUTS);
    assert.equal(r.kind, "ok");
    if (r.kind !== "ok") return;
    near(r.payment, 1075.3, 0.005, "P");
    near(r.baselineInterest, 103877.91, 0.01, "I0");
    near(r.newInterest, 82044.26, 0.01, "I1");
    near(r.interestSaved, 21834, 1, "interest saved");
    near(r.interestSaved, 21833.65, 0.01, "interest saved (python)");
    assert.equal(r.newTermMonths, 214);
    assert.equal(r.monthsSaved, 50);
    assert.equal(shortDuration(r.monthsSaved), "4y2m");
    assert.equal(endDate(dec2026, r.termMonths), "Nov 2048");
    assert.equal(endDate(dec2026, r.newTermMonths), "Sep 2044");
    assert.equal(r.overAllowance, false);
    assert.equal(r.reducePayment, null);
    near(closedFormMonths(180000, 0.045 / 12, r.newMonthlyOutgoing), 213.8619, 0.0001, "closed N");
    assert.equal(Math.ceil(closedFormMonths(180000, 0.045 / 12, r.newMonthlyOutgoing)), r.newTermMonths);
  });

  it("Test 1 worked-example balances (brief §4)", () => {
    const rate = 0.045 / 12;
    const P = monthlyPayment(180000, rate, 264);
    const s0 = simulate(180000, rate, 264, P).balances;
    const s1 = simulate(180000, rate, 264, P, 150).balances;
    const at = (s: number[], y: number) => Math.round(s[y * 12 - 1] ?? 0);
    assert.deepEqual([1, 5, 10, 15].map((y) => at(s0, y)), [175096, 153122, 119476, 77358]);
    assert.deepEqual([1, 5, 10, 15].map((y) => at(s1, y)), [173259, 143050, 96796, 38896]);
  });

  it("Test 2: £200k, 4%, 20y, £200/m + £10k lump sum", () => {
    const r = calculateOverpayment({
      balance: 200000, ratePct: 4, termMonths: 240, monthlyOverpayment: 200, lumpSum: 10000, allowancePct: 10,
    });
    assert.equal(r.kind, "ok");
    if (r.kind !== "ok") return;
    near(r.payment, 1211.96, 0.005, "P");
    near(r.baselineInterest, 90870.56, 0.01, "I0");
    near(r.newInterest, 62540.81, 0.01, "I1");
    near(r.interestSaved, 28330, 1, "interest saved");
    near(r.interestSaved, 28329.75, 0.01, "interest saved (python)");
    assert.equal(r.newTermMonths, 179);
    assert.equal(r.monthsSaved, 61);
    assert.equal(shortDuration(r.monthsSaved), "5y1m");
    assert.equal(endDate(dec2026, r.termMonths), "Nov 2046");
    assert.equal(endDate(dec2026, r.newTermMonths), "Oct 2041");
    assert.ok(r.reducePayment);
    near(r.reducePayment!.payment, 1151.36, 0.005, "P'");
    near(r.reducePayment!.interest, 86327.03, 0.01, "interest'");
    near(r.reducePayment!.interestSaved, 4543.53, 0.01, "reduce-payment saved");
    near(r.firstYearOverpayment, 12400, 0.001, "first-year overpay");
    near(r.allowanceAmount, 20000, 0.001, "allowance");
    assert.equal(r.overAllowance, false);
  });

  it("MoneyHelper cross-check: £250k, 5%, 25y, £5k lump", () => {
    const r = calculateOverpayment({
      balance: 250000, ratePct: 5, termMonths: 300, monthlyOverpayment: 0, lumpSum: 5000, allowancePct: 10,
    });
    assert.equal(r.kind, "ok");
    if (r.kind !== "ok") return;
    near(r.interestSaved, 12023, 1, "interest saved");
    assert.equal(r.monthsSaved, 11);
    near(r.reducePayment!.payment, 1432.25, 0.005, "P'");
    near(r.reducePayment!.interestSaved, 3768.85, 0.01, "reduce-payment saved");
  });

  it("edge: 0% rate", () => {
    const r = calculateOverpayment({
      balance: 120000, ratePct: 0, termMonths: 120, monthlyOverpayment: 100, lumpSum: 0, allowancePct: 10,
    });
    assert.equal(r.kind, "ok");
    if (r.kind !== "ok") return;
    near(r.payment, 1000, 1e-9, "P");
    assert.equal(r.newTermMonths, 110);
    near(r.interestSaved, 0, 1e-6, "saved");
    assert.equal(r.monthsSaved, 10);
  });

  it("edge: lump sum clears the mortgage", () => {
    const r = calculateOverpayment({ ...DEFAULT_INPUTS, lumpSum: 180000 });
    assert.equal(r.kind, "cleared");
  });

  it("edge: huge overpayment clears in 1 month", () => {
    const r = calculateOverpayment({ ...DEFAULT_INPUTS, monthlyOverpayment: 1_000_000 });
    assert.equal(r.kind, "ok");
    if (r.kind !== "ok") return;
    assert.equal(r.newTermMonths, 1);
    assert.equal(r.overAllowance, true);
  });

  it("allowance warning triggers above the limit", () => {
    const r = calculateOverpayment({ ...DEFAULT_INPUTS, monthlyOverpayment: 1600 });
    assert.equal(r.kind, "ok");
    if (r.kind === "ok") assert.equal(r.overAllowance, true); // £19,200 > £18,000
  });

  it("rejects bad inputs", () => {
    const r = calculateOverpayment({ ...DEFAULT_INPUTS, balance: -1, ratePct: 30 });
    assert.equal(r.kind, "invalid");
  });
});
