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
  /** Card + optional header preview under /guides/{slug}.jpg */
  image: string;
  /** Short descriptive alt for guide cards (home, /guides, related). */
  imageAlt: string;
  /** Per-page social card (1200×630). Falls back to /og.jpg. */
  ogImage?: string;
  /** Alt text for og:image. */
  ogImageAlt?: string;
  /** In-body figures (after intro + near checklist). */
  inGuideImages?: {
    afterIntro: { src: string; alt: string };
    nearChecklist: { src: string; alt: string };
  };
  /**
   * When false, guide detail hides the square header image (cards still use
   * `image`). Used when Nia's titled heroes would sit beside the H1.
   */
  showHeaderImage?: boolean;
  /** Soft shop CTA one-liner; omit hard Christmas chrome. */
  shopLine?: string;
  /** Buyer link for this guide. Omit to keep the shop URL. */
  ctaUrl?: string;
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
    ctaUrl: "https://www.etsy.com/listing/4461347110",
    title:
      "Cash ISA Allowance Planner for Under-65s: Last Full Year Before the £12k Cap (UK)",
    description:
      "From 6 April 2027, under-65s’ annual cash ISA subscriptions are limited to £12,000 within the overall £20,000 ISA allowance (people aged 65 and over keep a £20,000 cash limit) — so use tax year 2026/27 to plan monthly or annual cash subscriptions against your remaining allowance, then verify every figure on GOV.UK.",
    metaDescription:
      "Plan Cash ISA subscriptions before the £12k under-65 cap from April 2027. Track 2026/27 allowance in Google Sheets. Check GOV.UK.",
    category: "Savings",
    featured: true,
    image: "/guides/cash-isa-12k-under-65-planner.jpg",
    imageAlt: "Cash ISA allowance planner for 2026/27: Google Sheets dashboard preview, sample data",
    ogImage: "/og/cash-isa-12k-under-65-planner.jpg",
    ogImageAlt: "Cash ISA allowance planner for 2026/27 \u2014 UkMoneySheets Google Sheets guide",
    showHeaderImage: false,
    inGuideImages: {
      afterIntro: {
        src: "/guides/inguide/cash-isa-12k-under-65-planner/1.webp",
        alt: "Real Google Sheets screenshot: plan regular saving in Google Sheets, sample data",
      },
      nearChecklist: {
        src: "/guides/inguide/cash-isa-12k-under-65-planner/2.webp",
        alt: "Plan your 2026/27 Cash ISA allowance: Overall ISA allowance is £20,000 for 2026/27; From 6 April 2027: £12,000 cash limit if under 65; Allowances reset each 6 April and don't roll over; Log each subscription with its date and amount; Check your remaining allowance before paying in",
      },
    },
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
    ctaUrl: "https://www.etsy.com/listing/4563932731",
    title:
      "Help to Save Tracker: Monthly Deposits and 2-Year / 4-Year Bonus Planner (UK)",
    description:
      "If you’re eligible for Help to Save, you can pay in £1–£50 each calendar month and earn a 50% government bonus paid after year 2 and year 4 — use a simple Google Sheet to log deposits, running totals, and projected bonuses, and always confirm eligibility and bonus rules on GOV.UK.",
    metaDescription:
      "Track Help to Save deposits and project 2-year and 4-year 50% bonuses in Google Sheets. Confirm eligibility on GOV.UK.",
    category: "Savings",
    featured: true,
    image: "/guides/help-to-save-deposit-bonus-tracker.jpg",
    imageAlt: "Help to Save deposits and bonus planner: Google Sheets dashboard preview, sample data",
    ogImage: "/og/help-to-save-deposit-bonus-tracker.jpg",
    ogImageAlt: "Help to Save deposits and bonus planner \u2014 UkMoneySheets Google Sheets guide",
    showHeaderImage: false,
    inGuideImages: {
      afterIntro: {
        src: "/guides/inguide/help-to-save-deposit-bonus-tracker/1.webp",
        alt: "Real Google Sheets screenshot: find a monthly amount you can afford, sample data",
      },
      nearChecklist: {
        src: "/guides/inguide/help-to-save-deposit-bonus-tracker/2.webp",
        alt: "Help to Save: what to track: Pay in £1 to £50 each calendar month; Bonus is 50p for every £1 saved (50%); Bonuses come after year 2 and year 4; Log deposits, withdrawals and highest balance; Treat bonus figures as estimates",
      },
    },
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
    ctaUrl: "https://www.etsy.com/listing/4462593252",
    title:
      "Missed the 5 October Self Assessment Deadline? Register Late + Spreadsheet Setup (UK)",
    description:
      "If you needed to tell HMRC about Self Assessment by 5 October after the tax year ended and you missed it, register as soon as you can, watch for a failure-to-notify risk if tax is still unpaid at 31 January, and start a simple UK income and expense spreadsheet before you file.",
    metaDescription:
      "Missed 5 October Self Assessment registration? Register late, check GOV.UK on penalties, and set up a UK spreadsheet before January.",
    category: "Tax",
    featured: true,
    image: "/guides/register-self-assessment-5-october.jpg",
    imageAlt: "Register for Self Assessment by 5 October: Google Sheets dashboard preview, sample data",
    ogImage: "/og/register-self-assessment-5-october.jpg",
    ogImageAlt: "Register for Self Assessment by 5 October \u2014 UkMoneySheets Google Sheets guide",
    showHeaderImage: false,
    inGuideImages: {
      afterIntro: {
        src: "/guides/inguide/register-self-assessment-5-october/1.webp",
        alt: "Real Google Sheets screenshot: records ready for your 2025/26 return, sample data",
      },
      nearChecklist: {
        src: "/guides/inguide/register-self-assessment-5-october/2.webp",
        alt: "Registering for Self Assessment: Check on GOV.UK whether you need to register; Register by 5 October after the tax year ends; Keep your UTR safe when HMRC sends it; Set up your income and expenses sheet; Online returns are due by 31 January",
      },
    },
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
    ctaUrl: "https://www.etsy.com/listing/4460132151",
    title: "How to Use a UK Monthly Budget Spreadsheet in Google Sheets",
    description:
      "Copy a UK-ready Google Sheet, set categories for real UK bills (rent or mortgage, council tax, utilities, groceries), enter take-home pay and planned amounts, then log actual spend weekly and adjust.",
    metaDescription:
      "Use a UK monthly budget Google Sheet for rent, council tax, utilities and take-home pay. Categories built for British bills.",
    category: "Budgeting",
    featured: true,
    image: "/guides/uk-monthly-budget-google-sheets.jpg",
    imageAlt: "UK monthly budget in Google Sheets: Google Sheets dashboard preview, sample data",
    ogImage: "/og/uk-monthly-budget-google-sheets.jpg",
    ogImageAlt: "UK monthly budget in Google Sheets \u2014 UkMoneySheets Google Sheets guide",
    showHeaderImage: false,
    inGuideImages: {
      afterIntro: {
        src: "/guides/inguide/uk-monthly-budget-google-sheets/1.webp",
        alt: "Real Google Sheets screenshot: inside a uk monthly budget sheet, sample data",
      },
      nearChecklist: {
        src: "/guides/inguide/uk-monthly-budget-google-sheets/2.webp",
        alt: "Set up your monthly budget: Make a copy into your own Google Drive; Enter your monthly take-home pay; Add planned amounts for rent, council tax and bills; Log what you actually spend each week; Review the month and adjust next month's plan",
      },
    },
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
    ctaUrl: "https://www.etsy.com/listing/4463017307",
    title: "House Deposit and LISA Tracker: A Simple First-Time Buyer Planner (UK)",
    description:
      "Pick a target house price and deposit percentage, work out how much you need to save, then track monthly transfers and Lifetime ISA (LISA) contributions in one Google Sheet so the bonus and the timeline stay visible.",
    metaDescription:
      "Plan a UK house deposit and Lifetime ISA (LISA) in Google Sheets — target price, deposit % and monthly savings.",
    category: "Property",
    featured: true,
    image: "/guides/house-deposit-lisa-planner.jpg",
    imageAlt: "House deposit and LISA planner: Google Sheets dashboard preview, sample data",
    ogImage: "/og/house-deposit-lisa-planner.jpg",
    ogImageAlt: "House deposit and LISA planner \u2014 UkMoneySheets Google Sheets guide",
    showHeaderImage: false,
    inGuideImages: {
      afterIntro: {
        src: "/guides/inguide/house-deposit-lisa-planner/1.webp",
        alt: "Real Google Sheets screenshot: inside a first-time buyer planner, sample data",
      },
      nearChecklist: {
        src: "/guides/inguide/house-deposit-lisa-planner/2.webp",
        alt: "Plan your house deposit: Set your target property price; Choose the deposit percentage you're aiming for; Add what you can save each month; Track Lifetime ISA payments on their own line; Budget for moving costs as well as the deposit",
      },
    },
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
    ctaUrl: "https://www.etsy.com/listing/4563937681",
    title: "Mortgage Overpayment Calculator: See Interest Saved in Google Sheets (UK)",
    description:
      "Enter your balance, rate, term, and a planned extra payment in a Google Sheet to compare “stick to the schedule” versus overpaying — then check your lender’s overpayment limits and any early repayment charge before you send money.",
    metaDescription:
      "See how mortgage overpayments cut interest in a UK Google Sheet. Check your lender’s limits before you pay extra.",
    category: "Property",
    featured: true,
    image: "/guides/mortgage-overpayment-calculator.jpg",
    imageAlt: "Mortgage overpayment calculator: Google Sheets dashboard preview, sample data",
    ogImage: "/og/mortgage-overpayment-calculator.jpg",
    ogImageAlt: "Mortgage overpayment calculator \u2014 UkMoneySheets Google Sheets guide",
    showHeaderImage: false,
    inGuideImages: {
      afterIntro: {
        src: "/guides/inguide/mortgage-overpayment-calculator/1.webp",
        alt: "Real Google Sheets screenshot: inside a mortgage overpayment calculator, sample data",
      },
      nearChecklist: {
        src: "/guides/inguide/mortgage-overpayment-calculator/2.webp",
        alt: "Before you overpay: Enter your balance, interest rate and term; Add a monthly or one-off overpayment; Compare interest saved and the new end date; Check your lender's overpayment allowance; Ask about early repayment charges first",
      },
    },
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
    imageAlt: "Google Sheets vs Excel for UK budgets: Google Sheets dashboard preview, sample data",
    ogImage: "/og/sheets-vs-excel-uk-budgeting.jpg",
    ogImageAlt: "Google Sheets vs Excel for UK budgets \u2014 UkMoneySheets Google Sheets guide",
    showHeaderImage: false,
    inGuideImages: {
      afterIntro: {
        src: "/guides/inguide/sheets-vs-excel-uk-budgeting/1.webp",
        alt: "Real Google Sheets screenshot: a real Google Sheet, open in the browser, sample data",
      },
      nearChecklist: {
        src: "/guides/inguide/sheets-vs-excel-uk-budgeting/2.webp",
        alt: "Choosing for a UK household budget: Share one live link with a partner; Make quick edits on your phone; Free with a Google account for personal use; Need heavy offline desktop work? Excel may suit; Whichever you pick, start from a UK layout",
      },
    },
    shopLine: "Browse UkMoneySheets on Etsy — Google Sheets only, never Excel.",
    related: [
      "uk-monthly-budget-google-sheets",
      "uk-christmas-savings-tracker",
      "house-deposit-lisa-planner",
    ],
  },
  {
    slug: "uk-christmas-savings-tracker",
    ctaUrl: "https://www.etsy.com/listing/4568011416",
    title: "UK Christmas Savings Tracker: Gift List Plus January Bills",
    description:
      "List every gift and Christmas cost with a budget cap, save a little each week from autumn, and set aside a January buffer for rent, council tax, and energy so December cheer does not become February stress.",
    metaDescription:
      "UK Christmas savings tracker: gift list, weekly save-up, and a January buffer for rent and bills in Google Sheets.",
    category: "Savings",
    image: "/guides/uk-christmas-savings-tracker.jpg",
    imageAlt: "Christmas savings tracker: Google Sheets dashboard preview, sample data",
    ogImage: "/og/uk-christmas-savings-tracker.jpg",
    ogImageAlt: "Christmas savings tracker \u2014 UkMoneySheets Google Sheets guide",
    showHeaderImage: false,
    inGuideImages: {
      afterIntro: {
        src: "/guides/inguide/uk-christmas-savings-tracker/1.webp",
        alt: "Real Google Sheets screenshot: inside a christmas savings tracker, sample data",
      },
      nearChecklist: {
        src: "/guides/inguide/uk-christmas-savings-tracker/2.webp",
        alt: "Plan Christmas without the January shock: Set one total budget for Christmas; List gifts by person; Add food, travel and decorations; Track spent against planned as you buy; Put January bills in the plan too",
      },
    },
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
    ctaUrl: "https://www.etsy.com/listing/4459672655",
    title: "UK Crypto Portfolio Tracker: What to Log for Section 104 and CGT",
    description:
      "To prepare for UK Capital Gains Tax on crypto, log every acquisition and disposal in sterling — date, asset, quantity, GBP value, and fees — so you can support Section 104 pooling and same-day / 30-day matching when you work out gains.",
    metaDescription:
      "Log UK crypto trades for Section 104 and CGT: date, quantity, GBP value and fees in a simple spreadsheet.",
    category: "Tax",
    image: "/guides/uk-crypto-section-104.jpg",
    imageAlt: "Crypto records for Section 104 and CGT: Google Sheets dashboard preview, sample data",
    ogImage: "/og/uk-crypto-section-104.jpg",
    ogImageAlt: "Crypto records for Section 104 and CGT \u2014 UkMoneySheets Google Sheets guide",
    showHeaderImage: false,
    inGuideImages: {
      afterIntro: {
        src: "/guides/inguide/uk-crypto-section-104/1.webp",
        alt: "Real Google Sheets screenshot: a 2025/26 crypto portfolio tracker, sample data",
      },
      nearChecklist: {
        src: "/guides/inguide/uk-crypto-section-104/2.webp",
        alt: "What to log for each crypto transaction: Date and type: buy, sell, swap or spend; Which coin and how much; The value in pounds at the time; Any fees you paid; Pooled cost for each coin (Section 104)",
      },
    },
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
    ctaUrl: "https://www.etsy.com/listing/4467684075",
    title: "UK Landlord Spreadsheet: Track Rental Income for Self Assessment",
    description:
      "To report UK rental income on Self Assessment, keep a clear record of rent received, allowable expenses, and residential finance costs by tax year — then use those totals when you complete the UK property pages.",
    metaDescription:
      "Track UK rental income and expenses for Self Assessment and Section 24 finance costs in Google Sheets.",
    category: "Property",
    image: "/guides/uk-landlord-section-24.jpg",
    imageAlt: "Landlord records for Self Assessment: Google Sheets dashboard preview, sample data",
    ogImage: "/og/uk-landlord-section-24.jpg",
    ogImageAlt: "Landlord records for Self Assessment \u2014 UkMoneySheets Google Sheets guide",
    showHeaderImage: false,
    inGuideImages: {
      afterIntro: {
        src: "/guides/inguide/uk-landlord-section-24/1.webp",
        alt: "Real Google Sheets screenshot: a 2025/26 rental income tracker, sample data",
      },
      nearChecklist: {
        src: "/guides/inguide/uk-landlord-section-24/2.webp",
        alt: "Landlord records to keep: Rent received for each property; Allowable costs like repairs and agent fees; Mortgage interest logged separately (Section 24); Dates and receipts for every cost; Totals ready for the SA105 property pages",
      },
    },
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
    ctaUrl: "https://www.etsy.com/listing/4533504008",
    title:
      "UK Self Assessment for Side Hustles: What to Track in a Spreadsheet (SA103)",
    description:
      "To keep side-hustle income tidy for HMRC Self Assessment, record every payment and allowable expense by UK tax year in a simple spreadsheet — then use those totals when you fill in your self-employment pages (SA103).",
    metaDescription:
      "Track side-hustle income and expenses for UK Self Assessment (SA103) in a simple tax-year spreadsheet.",
    category: "Tax",
    image: "/guides/uk-self-assessment-side-hustle-sa103.jpg",
    imageAlt: "Side hustle records for SA103: Google Sheets dashboard preview, sample data",
    ogImage: "/og/uk-self-assessment-side-hustle-sa103.jpg",
    ogImageAlt: "Side hustle records for SA103 \u2014 UkMoneySheets Google Sheets guide",
    showHeaderImage: false,
    inGuideImages: {
      afterIntro: {
        src: "/guides/inguide/uk-self-assessment-side-hustle-sa103/1.webp",
        alt: "Real Google Sheets screenshot: a 2026/27 side hustle tracker, sample data",
      },
      nearChecklist: {
        src: "/guides/inguide/uk-self-assessment-side-hustle-sa103/2.webp",
        alt: "What to track for SA103: Income from each platform or client; Allowable business expenses, with receipts; Mileage and use of home, if you claim them; The date of every entry; Running totals so the return is quicker",
      },
    },
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
