import { cashIsa, christmas, helpToSave } from "./savings";
import { monthlyBudget, sheetsVsExcel } from "./budgeting";
import { houseDeposit, landlord, mortgage } from "./property";
import { crypto, registerSa, sideHustle } from "./tax";

export const articles: Record<string, string> = {
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
};

export function getArticle(slug: string) {
  return articles[slug];
}
