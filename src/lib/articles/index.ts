import { cashIsa, christmas, helpToSave } from "./savings";
import { blackFriday, monthlyBudget, sheetsVsExcel, winterEnergy } from "./budgeting";
import { houseDeposit, landlord, mortgage } from "./property";
import { autumnBudget2026 } from "./budget";
import { anic100k, crypto, mtd30k, registerSa, sideHustle } from "./tax";

export const articles: Record<string, string> = {
  "autumn-budget-2026-what-it-means": autumnBudget2026,
  "cash-isa-12k-under-65-planner": cashIsa,
  "sheets-vs-excel-uk-budgeting": sheetsVsExcel,
  "help-to-save-deposit-bonus-tracker": helpToSave,
  "house-deposit-lisa-planner": houseDeposit,
  "uk-monthly-budget-google-sheets": monthlyBudget,
  "mortgage-overpayment-calculator": mortgage,
  "register-self-assessment-5-october": registerSa,
  "uk-christmas-savings-tracker": christmas,
  "uk-crypto-section-104": crypto,
  "uk-landlord-section-24": landlord,
  "uk-self-assessment-side-hustle-sa103": sideHustle,
  "making-tax-digital-30k-april-2027": mtd30k,
  "adjusted-net-income-100k-childcare-hicbc": anic100k,
  "black-friday-spending-cap-price-log": blackFriday,
  "winter-energy-bills-tracker": winterEnergy,
};

export function getArticle(slug: string) {
  return articles[slug];
}
