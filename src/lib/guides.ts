export type GuideMeta = {
  slug: string;
  title: string;
  description: string;
  category: string;
  featured?: boolean;
  related: string[];
};

export const guides: GuideMeta[] = [
  {
    slug: "cash-isa-12k-under-65-planner",
    title:
      "Cash ISA Allowance Planner for Under-65s: Last Full Year Before the £12k Cap (UK)",
    description:
      "From 6 April 2027, under-65s’ annual cash ISA subscriptions are limited to £12,000 within the overall £20,000 ISA allowance (people aged 65 and over keep a £20,000 cash limit) — so use tax year 2026/27 to plan monthly or annual cash subscriptions against your remaining allowance, then verify every figure on GOV.UK.",
    category: "Savings",
    featured: true,
    related: [
      "house-deposit-lisa-planner",
      "uk-monthly-budget-google-sheets",
      "help-to-save-deposit-bonus-tracker",
    ],
  },
  {
    slug: "sheets-vs-excel-uk-budgeting",
    title: "Google Sheets vs Excel for UK Household Budgeting",
    description:
      "For most UK households that budget together or on a phone, Google Sheets is the simpler fit; Excel still wins if you need heavy offline modelling, advanced Excel-only features, or you already live in a Microsoft 365 workflow.",
    category: "Guides",
    featured: true,
    related: [
      "uk-monthly-budget-google-sheets",
      "uk-christmas-savings-tracker",
      "house-deposit-lisa-planner",
    ],
  },
  {
    slug: "help-to-save-deposit-bonus-tracker",
    title:
      "Help to Save Tracker: Monthly Deposits and 2-Year / 4-Year Bonus Planner (UK)",
    description:
      "If you’re eligible for Help to Save, you can pay in £1–£50 each calendar month and earn a 50% government bonus paid after year 2 and year 4 — use a simple Google Sheet to log deposits, running totals, and projected bonuses, and always confirm eligibility and bonus rules on GOV.UK.",
    category: "Savings",
    featured: true,
    related: [
      "uk-monthly-budget-google-sheets",
      "uk-christmas-savings-tracker",
      "cash-isa-12k-under-65-planner",
    ],
  },
  {
    slug: "house-deposit-lisa-planner",
    title: "House Deposit and LISA Tracker: A Simple First-Time Buyer Planner (UK)",
    description:
      "Pick a target house price and deposit percentage, work out how much you need to save, then track monthly transfers and Lifetime ISA (LISA) contributions in one Google Sheet so the bonus and the timeline stay visible.",
    category: "Property",
    featured: true,
    related: [
      "mortgage-overpayment-calculator",
      "uk-monthly-budget-google-sheets",
      "cash-isa-12k-under-65-planner",
    ],
  },
  {
    slug: "uk-monthly-budget-google-sheets",
    title: "How to Use a UK Monthly Budget Spreadsheet in Google Sheets",
    description:
      "Copy a UK-ready Google Sheet, set categories for real UK bills (rent or mortgage, council tax, utilities, groceries), enter take-home pay and planned amounts, then log actual spend weekly and adjust.",
    category: "Budgeting",
    featured: true,
    related: [
      "uk-christmas-savings-tracker",
      "sheets-vs-excel-uk-budgeting",
      "house-deposit-lisa-planner",
    ],
  },
  {
    slug: "mortgage-overpayment-calculator",
    title: "Mortgage Overpayment Calculator: See Interest Saved in Google Sheets (UK)",
    description:
      "Enter your balance, rate, term, and a planned extra payment in a Google Sheet to compare “stick to the schedule” versus overpaying — then check your lender’s overpayment limits and any early repayment charge before you send money.",
    category: "Property",
    featured: true,
    related: [
      "house-deposit-lisa-planner",
      "uk-monthly-budget-google-sheets",
      "uk-landlord-section-24",
    ],
  },
  {
    slug: "register-self-assessment-5-october",
    title:
      "Register for Self Assessment by 5 October: Checklist + Spreadsheet Setup (UK)",
    description:
      "New to Self Assessment for 2025/26? Register by 5 October 2026, then set up a simple UK income and expense spreadsheet before January.",
    category: "Tax",
    related: [
      "uk-self-assessment-side-hustle-sa103",
      "uk-landlord-section-24",
      "uk-crypto-section-104",
    ],
  },
  {
    slug: "uk-christmas-savings-tracker",
    title: "UK Christmas Savings Tracker: Gift List Plus January Bills",
    description:
      "List every gift and Christmas cost with a budget cap, save a little each week from autumn, and set aside a January buffer for rent, council tax, and energy so December cheer does not become February stress.",
    category: "Savings",
    related: [
      "uk-monthly-budget-google-sheets",
      "help-to-save-deposit-bonus-tracker",
      "cash-isa-12k-under-65-planner",
    ],
  },
  {
    slug: "uk-crypto-section-104",
    title: "UK Crypto Portfolio Tracker: What to Log for Section 104 and CGT",
    description:
      "To prepare for UK Capital Gains Tax on crypto, log every acquisition and disposal in sterling — date, asset, quantity, GBP value, and fees — so you can support Section 104 pooling and same-day / 30-day matching when you work out gains.",
    category: "Tax",
    related: [
      "uk-self-assessment-side-hustle-sa103",
      "register-self-assessment-5-october",
      "uk-landlord-section-24",
    ],
  },
  {
    slug: "uk-landlord-section-24",
    title: "UK Landlord Spreadsheet: Track Rental Income for Self Assessment",
    description:
      "To report UK rental income on Self Assessment, keep a clear record of rent received, allowable expenses, and residential finance costs by tax year — then use those totals when you complete the UK property pages.",
    category: "Property",
    related: [
      "uk-self-assessment-side-hustle-sa103",
      "register-self-assessment-5-october",
      "mortgage-overpayment-calculator",
    ],
  },
  {
    slug: "uk-self-assessment-side-hustle-sa103",
    title:
      "UK Self Assessment for Side Hustles: What to Track in a Spreadsheet (SA103)",
    description:
      "To keep side-hustle income tidy for HMRC Self Assessment, record every payment and allowable expense by UK tax year in a simple spreadsheet — then use those totals when you fill in your self-employment pages (SA103).",
    category: "Tax",
    related: [
      "register-self-assessment-5-october",
      "uk-landlord-section-24",
      "uk-crypto-section-104",
    ],
  },
];

export function featuredGuides() {
  return guides.filter((g) => g.featured);
}

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}

export function relatedGuides(slug: string) {
  const guide = getGuide(slug);
  if (!guide) return [];
  return guide.related
    .map((s) => getGuide(s))
    .filter((g): g is GuideMeta => Boolean(g));
}
