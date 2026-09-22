export type GuideMeta = {
  slug: string;
  title: string;
  /** Long on-page AEO lead (shown in article header). */
  description: string;
  /** Short search snippet for <meta name="description"> (≤155 chars). */
  metaDescription: string;
  category: string;
  featured?: boolean;
  related: string[];
  /** Style B product preview under /guides/{slug}.jpg */
  image: string;
  /** Soft shop CTA one-liner; omit hard Christmas chrome. */
  shopLine?: string;
};

/** Homepage featured priority (Cash ISA → Help to Save → Register SA → budget / LISA / mortgage). */
const FEATURED_ORDER = [
  "cash-isa-12k-under-65-planner",
  "help-to-save-deposit-bonus-tracker",
  "register-self-assessment-5-october",
  "uk-monthly-budget-google-sheets",
  "house-deposit-lisa-planner",
  "mortgage-overpayment-calculator",
] as const;

export const guides: GuideMeta[] = [
  {
    slug: "cash-isa-12k-under-65-planner",
    title:
      "Cash ISA Allowance Planner for Under-65s: Last Full Year Before the £12k Cap (UK)",
    description:
      "From 6 April 2027, under-65s’ annual cash ISA subscriptions are limited to £12,000 within the overall £20,000 ISA allowance (people aged 65 and over keep a £20,000 cash limit) — so use tax year 2026/27 to plan monthly or annual cash subscriptions against your remaining allowance, then verify every figure on GOV.UK.",
    metaDescription:
      "Plan Cash ISA subscriptions before the £12k under-65 cap from April 2027. Track 2026/27 allowance in Google Sheets. Check GOV.UK.",
    category: "Savings",
    featured: true,
    image: "/guides/cash-isa-12k-under-65-planner.jpg",
    shopLine:
      "Browse UK Google Sheets for budgeting and savings alongside your ISA plan on Etsy.",
    related: [
      "house-deposit-lisa-planner",
      "uk-monthly-budget-google-sheets",
      "help-to-save-deposit-bonus-tracker",
    ],
  },
  {
    slug: "help-to-save-deposit-bonus-tracker",
    title:
      "Help to Save Tracker: Monthly Deposits and 2-Year / 4-Year Bonus Planner (UK)",
    description:
      "If you’re eligible for Help to Save, you can pay in £1–£50 each calendar month and earn a 50% government bonus paid after year 2 and year 4 — use a simple Google Sheet to log deposits, running totals, and projected bonuses, and always confirm eligibility and bonus rules on GOV.UK.",
    metaDescription:
      "Track Help to Save deposits and project 2-year and 4-year 50% bonuses in Google Sheets. Confirm eligibility on GOV.UK.",
    category: "Savings",
    featured: true,
    image: "/guides/help-to-save-deposit-bonus-tracker.jpg",
    shopLine:
      "Browse UkMoneySheets on Etsy for UK Google Sheets that sit beside your Help to Save habit.",
    related: [
      "uk-monthly-budget-google-sheets",
      "uk-christmas-savings-tracker",
      "cash-isa-12k-under-65-planner",
    ],
  },
  {
    slug: "register-self-assessment-5-october",
    title:
      "Register for Self Assessment by 5 October: Checklist + Spreadsheet Setup (UK)",
    description:
      "New to Self Assessment for 2025/26? Register by 5 October 2026, then set up a simple UK income and expense spreadsheet before January.",
    metaDescription:
      "Register for Self Assessment by 5 October 2026. Checklist plus spreadsheet setup for new UK taxpayers. Check GOV.UK.",
    category: "Tax",
    featured: true,
    image: "/guides/register-self-assessment-5-october.jpg",
    shopLine:
      "Browse side-hustle and Self Assessment Google Sheets on UkMoneySheets Etsy.",
    related: [
      "uk-self-assessment-side-hustle-sa103",
      "uk-landlord-section-24",
      "uk-crypto-section-104",
    ],
  },
  {
    slug: "uk-monthly-budget-google-sheets",
    title: "How to Use a UK Monthly Budget Spreadsheet in Google Sheets",
    description:
      "Copy a UK-ready Google Sheet, set categories for real UK bills (rent or mortgage, council tax, utilities, groceries), enter take-home pay and planned amounts, then log actual spend weekly and adjust.",
    metaDescription:
      "Use a UK monthly budget Google Sheet for rent, council tax, utilities and take-home pay. Categories built for British bills.",
    category: "Budgeting",
    featured: true,
    image: "/guides/uk-monthly-budget-google-sheets.jpg",
    shopLine:
      "Get the UK Monthly Budget Spreadsheet for Google Sheets on UkMoneySheets Etsy.",
    related: [
      "uk-christmas-savings-tracker",
      "sheets-vs-excel-uk-budgeting",
      "house-deposit-lisa-planner",
    ],
  },
  {
    slug: "house-deposit-lisa-planner",
    title: "House Deposit and LISA Tracker: A Simple First-Time Buyer Planner (UK)",
    description:
      "Pick a target house price and deposit percentage, work out how much you need to save, then track monthly transfers and Lifetime ISA (LISA) contributions in one Google Sheet so the bonus and the timeline stay visible.",
    metaDescription:
      "Plan a UK house deposit and Lifetime ISA (LISA) in Google Sheets — target price, deposit % and monthly savings.",
    category: "Property",
    featured: true,
    image: "/guides/house-deposit-lisa-planner.jpg",
    shopLine:
      "Get the House Deposit Savings Planner (FTB & LISA) on UkMoneySheets Etsy.",
    related: [
      "mortgage-overpayment-calculator",
      "uk-monthly-budget-google-sheets",
      "cash-isa-12k-under-65-planner",
    ],
  },
  {
    slug: "mortgage-overpayment-calculator",
    title: "Mortgage Overpayment Calculator: See Interest Saved in Google Sheets (UK)",
    description:
      "Enter your balance, rate, term, and a planned extra payment in a Google Sheet to compare “stick to the schedule” versus overpaying — then check your lender’s overpayment limits and any early repayment charge before you send money.",
    metaDescription:
      "See how mortgage overpayments cut interest in a UK Google Sheet. Check your lender’s limits before you pay extra.",
    category: "Property",
    featured: true,
    image: "/guides/mortgage-overpayment-calculator.jpg",
    shopLine:
      "Get the Mortgage Overpayment Calculator for Google Sheets on UkMoneySheets Etsy.",
    related: [
      "house-deposit-lisa-planner",
      "uk-monthly-budget-google-sheets",
      "uk-landlord-section-24",
    ],
  },
  {
    slug: "sheets-vs-excel-uk-budgeting",
    title: "Google Sheets vs Excel for UK Household Budgeting",
    description:
      "For most UK households that budget together or on a phone, Google Sheets is the simpler fit; Excel still wins if you need heavy offline modelling, advanced Excel-only features, or you already live in a Microsoft 365 workflow.",
    metaDescription:
      "Google Sheets vs Excel for UK household budgeting: when Sheets wins for couples and phones, and when Excel still fits.",
    category: "Guides",
    image: "/guides/sheets-vs-excel-uk-budgeting.jpg",
    shopLine: "Browse UkMoneySheets on Etsy — Google Sheets only, never Excel.",
    related: [
      "uk-monthly-budget-google-sheets",
      "uk-christmas-savings-tracker",
      "house-deposit-lisa-planner",
    ],
  },
  {
    slug: "uk-christmas-savings-tracker",
    title: "UK Christmas Savings Tracker: Gift List Plus January Bills",
    description:
      "List every gift and Christmas cost with a budget cap, save a little each week from autumn, and set aside a January buffer for rent, council tax, and energy so December cheer does not become February stress.",
    metaDescription:
      "UK Christmas savings tracker: gift list, weekly save-up, and a January buffer for rent and bills in Google Sheets.",
    category: "Savings",
    image: "/guides/uk-christmas-savings-tracker.jpg",
    // Soft evergreen shop line only — no Christmas chrome CTA
    shopLine: "Browse UkMoneySheets on Etsy for calm UK Google Sheets templates.",
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
    metaDescription:
      "Log UK crypto trades for Section 104 and CGT: date, quantity, GBP value and fees in a simple spreadsheet.",
    category: "Tax",
    image: "/guides/uk-crypto-section-104.jpg",
    shopLine:
      "Get the UK Crypto Portfolio Tracker for Google Sheets on UkMoneySheets Etsy.",
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
    metaDescription:
      "Track UK rental income and expenses for Self Assessment and Section 24 finance costs in Google Sheets.",
    category: "Property",
    image: "/guides/uk-landlord-section-24.jpg",
    shopLine:
      "Get the UK Landlord Spreadsheet for Self Assessment on UkMoneySheets Etsy.",
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
    metaDescription:
      "Track side-hustle income and expenses for UK Self Assessment (SA103) in a simple tax-year spreadsheet.",
    category: "Tax",
    image: "/guides/uk-self-assessment-side-hustle-sa103.jpg",
    shopLine:
      "Get the UK Side Hustle Tax Spreadsheet for Google Sheets on UkMoneySheets Etsy.",
    related: [
      "register-self-assessment-5-october",
      "uk-landlord-section-24",
      "uk-crypto-section-104",
    ],
  },
];

export function featuredGuides() {
  const featured = guides.filter((g) => g.featured);
  return featured.sort((a, b) => {
    const ai = FEATURED_ORDER.indexOf(a.slug as (typeof FEATURED_ORDER)[number]);
    const bi = FEATURED_ORDER.indexOf(b.slug as (typeof FEATURED_ORDER)[number]);
    return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
  });
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
