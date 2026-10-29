export type GuideMeta = {
  slug: string;
  title: string;
  /**
   * Optional search title (the <title>, og:title, twitter:title) before the
   * " | UKMoneySheets" suffix. Keep ≤44 chars so the full title is ≤60.
   * Falls back to `title`; the H1 and cards always use `title`.
   */
  seoTitle?: string;
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
  /** Label for the guide CTA buttons; falls back to "Browse UKMoneySheets on Etsy". */
  ctaLabel?: string;
  /** Emit FAQPage JSON-LD from the article's "## FAQ" section. */
  faqSchema?: boolean;
  /** Show the free take-home pay checker promo after the article body. */
  freeToolCta?: boolean;
  /** Interactive tool rendered straight after the intro, before figure 1. */
  inlineTool?: "mortgage-overpayment";
  /** 3–5 short key-fact bullets shown under the answer box (HTML, not images). */
  keyFacts?: string[];
  /** Headline figures shown in mint number boxes. */
  keyFigures?: { value: string; label: string }[];
  /** Visual product card for the Etsy sheet (screenshot + name). */
  product?: { name: string; image: string; imageAlt: string };
  /** Wide lifestyle header image for the visual guide layout (16:9). */
  headerImage?: { src: string; alt: string };
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
    slug: "autumn-budget-2026-what-it-means",
    ctaUrl: "https://www.etsy.com/listing/4460132151?utm_source=site",
    ctaLabel: "Get the UK Monthly Budget sheet on Etsy",
    seoTitle: "Autumn Budget 2026: What It Means for You",
    title: "What the 28 Oct 2026 Budget Means for Your Money (UK)",
    description:
      "The 28 October 2026 Budget left income tax, National Insurance and VAT rates unchanged. From 6 April 2027 it raises savings and property income tax by a further 2 points, adds a Pension Tax Allowance and keeps the cash ISA limit at £20,000. It also brings a £100 energy payment for bands A to D in England.",
    metaDescription:
      "The 28 Oct 2026 Budget in plain English: pensioner tax, savings tax to 24%, cash ISA kept at £20k, energy help, first homes and MTD, with GOV.UK sources.",
    category: "Tax",
    image: "/guides/uk-monthly-budget-google-sheets.jpg",
    imageAlt: "UK monthly budget in Google Sheets: Google Sheets dashboard preview, sample data",
    showHeaderImage: true,
    headerImage: {
      src: "/visual/guides/uk-monthly-budget-google-sheets.webp",
      alt: "A UK monthly budget in Google Sheets on a laptop at home, example data shown",
    },
    keyFigures: [
      { value: "24%", label: "savings basic rate from 6 April 2027 (now 20%)" },
      { value: "£20,000", label: "cash ISA limit stays for all adult savers" },
      { value: "£100", label: "energy payment, bands A to D in England, from January 2027" },
    ],
    keyFacts: [
      "Income tax, National Insurance and VAT rates are unchanged; the Personal Allowance stays £12,570.",
      "Pensioners with total income up to £13,036.40 pay no income tax from 6 April 2027, through the new Pension Tax Allowance.",
      "Making Tax Digital still starts on 6 April 2027 for qualifying income over £30,000, with no late-submission penalty points for 2027-28 quarterly updates.",
      "Your First Home: a 20% equity loan with a 2.5% deposit, household income caps of £110,000 (£140,000 in London), applications from February 2027.",
      "Tax measures are to be legislated in Finance Bill 2026-27, so they are subject to legislation.",
    ],
    product: {
      name: "UK Monthly Budget sheet",
      image: "/guides/uk-monthly-budget-google-sheets.jpg",
      imageAlt: "UK Monthly Budget template in Google Sheets showing income, bills and spending, example data",
    },
    faqSchema: true,
    freeToolCta: true,
    shopLine:
      "Get the UK Monthly Budget Spreadsheet for Google Sheets on UKMoneySheets Etsy.",
    related: [
      "uk-monthly-budget-google-sheets",
      "winter-energy-bills-tracker",
      "adjusted-net-income-100k-childcare-hicbc",
    ],
  },
  {
    slug: "cash-isa-12k-under-65-planner",
    faqSchema: true,
    ctaUrl: "https://www.etsy.com/listing/4461347110?utm_source=site",
    ctaLabel: "Get the UK Net Worth tracker on Etsy",
    seoTitle: "Cash ISA Limit Stays £20,000: 2026/27 Allowance Planner (UK)",
    title:
      "Cash ISA Allowance Planner (UK): The £12k Cut Is Cancelled and the £20,000 Limit Stays",
    description:
      "The planned cut to £12,000 for under-65s has been cancelled. At the 28 October 2026 Budget the government said the cash ISA limit stays £20,000 for all savers aged 18 or over from April 2027, inside the overall £20,000 ISA allowance. So you can plan cash ISA subscriptions the same way each tax year; check GOV.UK before you act.",
    metaDescription:
      "The planned £12k cash ISA cut for under-65s is cancelled, so the cash ISA limit stays £20,000 from April 2027. Plan your allowance in Google Sheets.",
    category: "Savings",
    featured: true,
    image: "/guides/cash-isa-12k-under-65-planner.jpg?v=2",
    imageAlt: "Cash ISA allowance planner for 2026/27: Google Sheets dashboard preview, sample data",
    ogImage: "/og/cash-isa-12k-under-65-planner.jpg?v=2",
    ogImageAlt: "Cash ISA allowance planner for 2026/27 \u2014 UKMoneySheets Google Sheets guide",
    showHeaderImage: false,
    inGuideImages: {
      afterIntro: {
        src: "/guides/inguide/cash-isa-12k-under-65-planner/1.webp",
        alt: "Real Google Sheets screenshot: plan regular saving in Google Sheets, sample data",
      },
      nearChecklist: {
        src: "/guides/inguide/cash-isa-12k-under-65-planner/2.webp?v=2",
        alt: "Plan your Cash ISA allowance: The cash ISA limit stays £20,000 from April 2027; Overall ISA allowance is £20,000; Allowances reset each 6 April and don't roll over; Log each subscription with its date and amount; Check your remaining allowance before paying in",
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
    ctaUrl: "https://www.etsy.com/listing/4563932731?utm_source=site",
    ctaLabel: "Get the savings challenge sheet on Etsy",
    seoTitle: "Help to Save 2026: Deposits & 50% Bonus Log",
    title:
      "Help to Save Tracker: Monthly Deposits and 2-Year / 4-Year Bonus Planner (UK)",
    description:
      "If you’re eligible for Help to Save, you can pay in £1–£50 each calendar month and earn a 50% government bonus paid after year 2 and year 4 — use a simple Google Sheet to log deposits, running totals, and projected bonuses, and always confirm eligibility and bonus rules on GOV.UK.",
    metaDescription:
      "UK Savings Week 2026: Help to Save is now permanent. Save £1 to £50 a month, get 50p per £1. Free column layout to log deposits and estimate bonuses.",
    category: "Savings",
    featured: true,
    image: "/guides/help-to-save-deposit-bonus-tracker.jpg",
    imageAlt: "Help to Save deposits and bonus planner: Google Sheets dashboard preview, sample data",
    ogImage: "/og/help-to-save-deposit-bonus-tracker.jpg",
    ogImageAlt: "Help to Save deposits and bonus planner \u2014 UKMoneySheets Google Sheets guide",
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
      "Browse UKMoneySheets on Etsy for UK Google Sheets that sit beside your Help to Save habit.",
    related: [
      "uk-monthly-budget-google-sheets",
      "uk-christmas-savings-tracker",
      "cash-isa-12k-under-65-planner",
    ],
  },
  {
    slug: "register-self-assessment-5-october",
    freeToolCta: true,
    ctaUrl: "https://www.etsy.com/listing/4462593252?utm_source=site",
    ctaLabel: "Get the Self Assessment 2025/26 sheet on Etsy",
    title:
      "How to Register for Self Assessment (UK): Deadlines, Late Registration + Spreadsheet Setup",
    description:
      "How to register for Self Assessment on GOV.UK, what the 5 October notify date means, what happens if you register late, and how to set up simple income and expense records in Google Sheets before you file.",
    metaDescription:
      "Register for Self Assessment, what the 5 October deadline means, what happens if you register late, and how to set up your records in Google Sheets.",
    category: "Tax",
    featured: true,
    image: "/guides/register-self-assessment-5-october.jpg",
    imageAlt: "Register for Self Assessment: Google Sheets dashboard preview, sample data",
    ogImage: "/og/register-self-assessment-5-october.jpg?v=2",
    ogImageAlt: "Register for Self Assessment \u2014 UKMoneySheets Google Sheets guide",
    showHeaderImage: false,
    inGuideImages: {
      afterIntro: {
        src: "/guides/inguide/register-self-assessment-5-october/1.webp",
        alt: "Real Google Sheets screenshot: records ready for your 2025/26 return, sample data",
      },
      nearChecklist: {
        src: "/guides/inguide/register-self-assessment-5-october/2.webp?v=2",
        alt: "Registering for Self Assessment: Check on GOV.UK whether you need to register; Usual deadline: 5 October after the tax year ends; Missed it? Register as soon as you can; Keep your UTR safe when HMRC sends it; Online filing and payment: 31 January; Late payment can bring penalties",
      },
    },
    shopLine:
      "Browse side-hustle and Self Assessment Google Sheets on UKMoneySheets Etsy.",
    related: [
      "uk-self-assessment-side-hustle-sa103",
      "uk-landlord-section-24",
      "uk-crypto-section-104",
    ],
  },
  {
    slug: "uk-monthly-budget-google-sheets",
    ctaUrl: "https://www.etsy.com/listing/4460132151?utm_source=site",
    ctaLabel: "Get the UK Monthly Budget sheet on Etsy",
    seoTitle: "UK Monthly Budget Google Sheet: 2026 Guide",
    title: "How to Use a UK Monthly Budget Spreadsheet in Google Sheets",
    description:
      "Copy a UK-ready Google Sheet, set categories for real UK bills (rent or mortgage, council tax, utilities, groceries), enter take-home pay and planned amounts, then log actual spend weekly and adjust.",
    metaDescription:
      "Set up a UK monthly budget in Google Sheets for 2026: take-home pay, council tax, energy and sinking funds, plus a weekly planned vs actual check-in.",
    category: "Budgeting",
    featured: true,
    image: "/guides/uk-monthly-budget-google-sheets.jpg",
    imageAlt: "UK monthly budget in Google Sheets: Google Sheets dashboard preview, sample data",
    ogImage: "/og/uk-monthly-budget-google-sheets.jpg",
    ogImageAlt: "UK monthly budget in Google Sheets \u2014 UKMoneySheets Google Sheets guide",
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
      "Get the UK Winter Energy Bill Tracker 2026/27 for Google Sheets on UKMoneySheets Etsy.",
    related: [
      "autumn-budget-2026-what-it-means",
      "uk-christmas-savings-tracker",
      "sheets-vs-excel-uk-budgeting",
      "house-deposit-lisa-planner",
    ],
  },
  {
    slug: "house-deposit-lisa-planner",
    faqSchema: true,
    ctaUrl: "https://www.etsy.com/listing/4463017307?utm_source=site",
    ctaLabel: "Get the House Deposit Savings Planner on Etsy",
    seoTitle: "House Deposit & LISA Planner UK (2026/27)",
    title: "House Deposit and LISA Tracker: A Simple First-Time Buyer Planner (UK)",
    description:
      "Pick a target house price and deposit percentage, work out how much you need to save, then track monthly transfers and Lifetime ISA (LISA) contributions in one Google Sheet so the bonus and the timeline stay visible.",
    metaDescription:
      "Plan a UK first-time buyer deposit: set a target, track LISA pay-ins (£4,000 a year, 25% bonus) in Google Sheets, plus the new 20% charge above £450k.",
    category: "Property",
    featured: true,
    image: "/guides/house-deposit-lisa-planner.jpg",
    imageAlt: "House deposit and LISA planner: Google Sheets dashboard preview, sample data",
    ogImage: "/og/house-deposit-lisa-planner.jpg",
    ogImageAlt: "House deposit and LISA planner \u2014 UKMoneySheets Google Sheets guide",
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
      "Get the House Deposit Savings Planner (FTB & LISA) on UKMoneySheets Etsy.",
    related: [
      "mortgage-overpayment-calculator",
      "uk-monthly-budget-google-sheets",
      "cash-isa-12k-under-65-planner",
    ],
  },
  {
    slug: "mortgage-overpayment-calculator",
    ctaUrl: "https://www.etsy.com/listing/4563937681?utm_source=site",
    ctaLabel: "Get the UK Mortgage Overpayment Calculator on Etsy",
    title: "Mortgage Overpayment Calculator UK: Interest and Time Saved",
    description:
      "Overpaying a repayment mortgage cuts the balance that interest is charged on, so you pay less interest and finish sooner. Use the free calculator below to see your interest saved, months saved and new end date. Then check your lender’s overpayment allowance and any early repayment charge (ERC) before you pay.",
    metaDescription:
      "Free UK mortgage overpayment calculator: enter your balance, rate and term to see interest saved, months saved and your new end date. Check ERCs first.",
    category: "Property",
    featured: true,
    image: "/guides/mortgage-overpayment-calculator.jpg",
    imageAlt: "Mortgage overpayment calculator: Google Sheets dashboard preview, sample data",
    ogImage: "/og/mortgage-overpayment-calculator.jpg",
    ogImageAlt: "Mortgage overpayment calculator UK \u2014 UKMoneySheets free calculator and Google Sheets guide",
    faqSchema: true,
    freeToolCta: true,
    inlineTool: "mortgage-overpayment",
    showHeaderImage: true,
    headerImage: {
      src: "/visual/guide-mortgage-header.webp",
      alt: "Mortgage overpayment calculator open in Google Sheets on a laptop beside a model house and keys, example data shown",
    },
    keyFacts: [
      "Overpaying cuts the balance interest is charged on, so you pay less and finish sooner.",
      "Many lenders allow up to 10% a year without a penalty; your own offer sets the limit.",
      "Above the allowance an early repayment charge (ERC) can apply, so check first.",
      "Compare your mortgage rate with what savings would pay after tax.",
    ],
    keyFigures: [
      { value: "£21,834", label: "less interest in the made-up example" },
      { value: "4y 2m", label: "sooner, with £150 a month extra" },
      { value: "10%", label: "a year many lenders allow penalty-free" },
    ],
    product: {
      name: "UK Mortgage Overpayment Calculator",
      image: "/guides/mortgage-overpayment-calculator.jpg",
      imageAlt: "UK Mortgage Overpayment Calculator in Google Sheets showing interest and time saved, example data",
    },
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
      "Get the UK Mortgage Overpayment Calculator for Google Sheets on UKMoneySheets Etsy.",
    related: [
      "house-deposit-lisa-planner",
      "uk-monthly-budget-google-sheets",
      "cash-isa-12k-under-65-planner",
    ],
  },
  {
    slug: "sheets-vs-excel-uk-budgeting",
    ctaUrl: "https://www.etsy.com/listing/4460132151?utm_source=site",
    ctaLabel: "Get the UK Monthly Budget sheet on Etsy",
    title: "Google Sheets vs Excel for UK Household Budgeting",
    description:
      "For most UK households that budget together or on a phone, Google Sheets is the simpler fit; Excel still wins if you need heavy offline modelling, advanced Excel-only features, or you already live in a Microsoft 365 workflow.",
    metaDescription:
      "Google Sheets vs Excel for UK household budgeting: when Sheets wins for couples and phones, and when Excel still fits.",
    category: "Guides",
    image: "/guides/sheets-vs-excel-uk-budgeting.jpg",
    imageAlt: "Google Sheets vs Excel for UK budgets: Google Sheets dashboard preview, sample data",
    ogImage: "/og/sheets-vs-excel-uk-budgeting.jpg",
    ogImageAlt: "Google Sheets vs Excel for UK budgets \u2014 UKMoneySheets Google Sheets guide",
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
    shopLine: "Get the UK Monthly Budget sheet for Google Sheets on UKMoneySheets Etsy",
    freeToolCta: true,
    related: [
      "uk-monthly-budget-google-sheets",
      "uk-christmas-savings-tracker",
      "house-deposit-lisa-planner",
    ],
  },
  {
    slug: "uk-christmas-savings-tracker",
    ctaUrl: "https://www.etsy.com/listing/4568011416?utm_source=site",
    ctaLabel: "Get the Christmas Savings Tracker on Etsy",
    title: "UK Christmas Savings Tracker: Gift List Plus January Bills",
    description:
      "List every gift and Christmas cost with a budget cap, save a little each week from autumn, and set aside a January buffer for rent, council tax, and energy so December cheer does not become February stress.",
    metaDescription:
      "UK Christmas savings tracker: gift list, weekly save-up, and a January buffer for rent and bills in Google Sheets.",
    category: "Savings",
    image: "/guides/uk-christmas-savings-tracker.jpg",
    imageAlt: "Christmas savings tracker: Google Sheets dashboard preview, sample data",
    ogImage: "/og/uk-christmas-savings-tracker.jpg",
    ogImageAlt: "Christmas savings tracker \u2014 UKMoneySheets Google Sheets guide",
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
    shopLine: "Browse UKMoneySheets on Etsy for calm UK Google Sheets templates.",
    related: [
      "uk-monthly-budget-google-sheets",
      "help-to-save-deposit-bonus-tracker",
      "cash-isa-12k-under-65-planner",
    ],
  },
  {
    slug: "uk-crypto-section-104",
    ctaUrl: "https://www.etsy.com/listing/4459672655?utm_source=site",
    ctaLabel: "Get the UK Crypto Portfolio Tracker on Etsy",
    seoTitle: "Crypto Section 104 Log for UK CGT (2025/26)",
    title: "UK Crypto Portfolio Tracker: What to Log for Section 104 and CGT",
    description:
      "To prepare for UK Capital Gains Tax on crypto, log every acquisition and disposal in sterling — date, asset, quantity, GBP value, and fees — so you can support Section 104 pooling and same-day / 30-day matching when you work out gains.",
    metaDescription:
      "What to log for UK crypto CGT: date, quantity, GBP value and fees for each Section 104 pool, same-day and 30-day rules, and the £3,000 allowance.",
    category: "Tax",
    image: "/guides/uk-crypto-section-104.jpg",
    imageAlt: "Crypto records for Section 104 and CGT: Google Sheets dashboard preview, sample data",
    ogImage: "/og/uk-crypto-section-104.jpg",
    ogImageAlt: "Crypto records for Section 104 and CGT \u2014 UKMoneySheets Google Sheets guide",
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
      "Get the UK Crypto Portfolio Tracker for Google Sheets on UKMoneySheets Etsy.",
    related: [
      "uk-self-assessment-side-hustle-sa103",
      "register-self-assessment-5-october",
      "uk-landlord-section-24",
    ],
  },
  {
    slug: "uk-landlord-section-24",
    freeToolCta: true,
    ctaUrl: "https://www.etsy.com/listing/4467684075?utm_source=site",
    ctaLabel: "Get the UK Landlord sheet on Etsy",
    title: "UK Landlord Spreadsheet: Track Rental Income for Self Assessment",
    description:
      "To report UK rental income on Self Assessment, keep a clear record of rent received, allowable expenses, and residential finance costs by tax year — then use those totals when you complete the UK property pages.",
    metaDescription:
      "Track UK rental income and expenses for Self Assessment and Section 24 finance costs in Google Sheets.",
    category: "Property",
    image: "/guides/uk-landlord-section-24.jpg",
    imageAlt: "Landlord records for Self Assessment: Google Sheets dashboard preview, sample data",
    ogImage: "/og/uk-landlord-section-24.jpg",
    ogImageAlt: "Landlord records for Self Assessment \u2014 UKMoneySheets Google Sheets guide",
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
      "Get the UK Landlord Spreadsheet for Self Assessment on UKMoneySheets Etsy.",
    related: [
      "uk-self-assessment-side-hustle-sa103",
      "register-self-assessment-5-october",
      "mortgage-overpayment-calculator",
    ],
  },
  {
    slug: "uk-self-assessment-side-hustle-sa103",
    freeToolCta: true,
    ctaUrl: "https://www.etsy.com/listing/4533504008?utm_source=site",
    ctaLabel: "Get the Side Hustle Tax 2026/27 sheet on Etsy",
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
    ogImageAlt: "Side hustle records for SA103 \u2014 UKMoneySheets Google Sheets guide",
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
      "Get the UK Side Hustle Tax Spreadsheet for Google Sheets on UKMoneySheets Etsy.",
    related: [
      "register-self-assessment-5-october",
      "uk-landlord-section-24",
      "uk-crypto-section-104",
    ],
  },
  {
    slug: "making-tax-digital-30k-april-2027",
    freeToolCta: true,
    ctaUrl: "https://www.etsy.com/listing/4533504008?utm_source=site",
    ctaLabel: "Get the Side Hustle Tax 2026/27 sheet on Etsy",
    title:
      "Making Tax Digital £30k Threshold (April 2027): Qualifying Income Check",
    description:
      "From 6 April 2027, you must use Making Tax Digital for Income Tax if you're a sole trader or landlord whose qualifying income on your 2025/26 tax return was over £30,000. Qualifying income is your self-employment and property income added together before expenses — so £18,500 of side-hustle sales plus £14,400 of rent is £32,900, even if your profit is far lower (example only). If you're in, you'll keep digital records and send quarterly updates through HMRC-recognised software; a spreadsheet can hold your records, but only if bridging software links it to HMRC.",
    metaDescription:
      "Does your side hustle or rental income put you in Making Tax Digital from April 2027? Add up 2025/26 gross income against £30k and plan quarterly updates.",
    category: "Tax",
    image: "/guides/making-tax-digital-30k-april-2027.jpg",
    imageAlt: "Making Tax Digital £30k qualifying income check: Google Sheets dashboard preview, sample data",
    ogImage: "/og/making-tax-digital-30k-april-2027.jpg",
    ogImageAlt: "Making Tax Digital £30k qualifying income check — UKMoneySheets Google Sheets guide",
    showHeaderImage: false,
    inGuideImages: {
      afterIntro: {
        src: "/guides/inguide/making-tax-digital-30k-april-2027/1.webp",
        alt: "Real Google Sheets screenshot: log gross income and expenses as you go, sample data (a record-keeping sheet, not MTD software)",
      },
      nearChecklist: {
        src: "/guides/inguide/making-tax-digital-30k-april-2027/2.webp",
        alt: "Check if MTD applies to you: Add self-employment and property income together; Use turnover before expenses, not profit; PAYE salary, dividends and pensions don't count; Jointly owned rental? Count only your share; Over £30k: digital records + quarterly updates; A Google Sheet holds records; bridging software sends updates",
      },
    },
    faqSchema: true,
    shopLine:
      "Get the UK Side Hustle Tax Spreadsheet for Google Sheets on UKMoneySheets Etsy.",
    related: [
      "uk-self-assessment-side-hustle-sa103",
      "uk-landlord-section-24",
      "register-self-assessment-5-october",
    ],
  },
  {
    slug: "adjusted-net-income-100k-childcare-hicbc",
    freeToolCta: true,
    ctaUrl: "https://www.etsy.com/listing/4598755762?utm_source=site",
    ctaLabel: "Get the Childcare Cost & £100k Calculator 2026/27 on Etsy",
    title: "£100k Childcare Cliff: Work Out Your Adjusted Net Income (UK)",
    description:
      "You lose Tax-Free Childcare and England's 30 hours of free childcare if you or your partner expect adjusted net income over £100,000 this tax year — and that's your total taxable income (pay, bonus, savings interest, dividends, side-hustle profit) minus certain reliefs, not your salary. Paying into a relief-at-source pension lowers it by the grossed-up amount (£1 paid = £1.25 off), as does Gift Aid, while net-pay and salary-sacrifice contributions are already out of your taxable pay. The same figure sets the High Income Child Benefit Charge (1% for every £200 over £60,000, all of it at £80,000) — and the Conservative pledge to scrap the £100k cliff hasn't changed any of these rules.",
    metaDescription:
      "Work out your adjusted net income, see how pension and Gift Aid lower it, and check the £100k childcare limit and the £60k–£80k Child Benefit charge.",
    category: "Tax",
    image: "/guides/adjusted-net-income-100k-childcare-hicbc.jpg",
    imageAlt: "The £100k childcare cliff and adjusted net income: Google Sheets dashboard preview, sample data",
    ogImage: "/og/adjusted-net-income-100k-childcare-hicbc.jpg",
    ogImageAlt: "The £100k childcare cliff and adjusted net income — UKMoneySheets Google Sheets guide",
    showHeaderImage: false,
    inGuideImages: {
      afterIntro: {
        src: "/guides/inguide/adjusted-net-income-100k-childcare-hicbc/1.webp",
        alt: "Real Google Sheets screenshot: map take-home pay and monthly outgoings, sample data (a budget planner, not an ANI calculator)",
      },
      nearChecklist: {
        src: "/guides/inguide/adjusted-net-income-100k-childcare-hicbc/2.webp",
        alt: "Work out your adjusted net income: Start with all taxable income, not just salary; Include bonus, savings interest and dividends; Each parent is tested on their own; Over £100k: no Tax-Free Childcare or 30 hours (England); Relief-at-source pension: £1 paid = £1.25 off; HICBC: 1% per £200 over £60k, all of it at £80k",
      },
    },
    faqSchema: true,
    shopLine:
      "Get the Childcare Cost & £100k Calculator 2026/27 for Google Sheets on UKMoneySheets Etsy.",
    related: [
      "autumn-budget-2026-what-it-means",
      "uk-monthly-budget-google-sheets",
      "uk-self-assessment-side-hustle-sa103",
      "register-self-assessment-5-october",
    ],
  },
  {
    slug: "black-friday-spending-cap-price-log",
    ctaUrl: "https://www.etsy.com/listing/4568011416?utm_source=site",
    ctaLabel: "Get the Christmas Savings Tracker on Etsy",
    title: "Black Friday Spending Cap + Price Log (UK 2026): Is the Deal Real?",
    description:
      "Set a Black Friday spending cap by taking it out of your Christmas gift budget, not adding it on top. Then, from now until 27 November 2026, write down the price of each item you plan to buy every week or so. On Black Friday or Cyber Monday (30 November), a deal is only a real saving if it's lower than the lowest price you logged and it's still within your cap. Which? found that 83% of Black Friday sales-period deals it tracked were the same price or cheaper at another time of year.",
    metaDescription:
      "Set a Black Friday spending cap from your Christmas budget and log usual prices from now, so you can see if a 27–30 Nov 2026 deal is really a discount.",
    category: "Budgeting",
    // No Nia pack yet: reuse the Christmas savings tracker card (same CTA listing); og falls back to /og.jpg.
    image: "/guides/uk-christmas-savings-tracker.jpg",
    imageAlt: "Christmas savings tracker: Google Sheets dashboard preview, sample data",
    showHeaderImage: false,
    faqSchema: true,
    shopLine:
      "Get the UK Christmas Savings Tracker for Google Sheets on UKMoneySheets Etsy.",
    related: [
      "uk-christmas-savings-tracker",
      "uk-monthly-budget-google-sheets",
      "help-to-save-deposit-bonus-tracker",
    ],
  },
  {
    slug: "winter-energy-bills-tracker",
    ctaUrl: "https://www.etsy.com/listing/4598582893?utm_source=site",
    ctaLabel: "Get the UK Winter Energy Bill Tracker 2026/27 on Etsy",
    title: "Winter Energy Bill Tracker (UK): Price Cap January 2027 & Should You Fix?",
    description:
      "From 1 October to 31 December 2026, Ofgem's price cap for a typical household paying by Direct Debit is £1,723 a year, but the cap limits your unit rates and standing charges, not your bill — so the only way to know your own winter cost is to log your meter readings and multiply. Ofgem will announce the January to March 2027 cap by 25 November 2026; until then, analysts' forecasts range from £1,999 (Cornwall Insight) to an average of £2,084 (MSE), which are forecasts, not Ofgem figures. A simple Google Sheet with your readings, your rates and a monthly log shows what you're really paying and lets you test a fixed deal against the cap with your own usage.",
    metaDescription:
      "Track UK energy bills in Google Sheets with meter readings, unit rates and standing charges, and see if fixing beats the cap before Ofgem's 25 Nov update.",
    category: "Budgeting",
    // No Nia pack yet: reuse the monthly budget card; og falls back to /og.jpg.
    image: "/guides/uk-monthly-budget-google-sheets.jpg",
    imageAlt: "UK monthly budget in Google Sheets: Google Sheets dashboard preview, sample data",
    showHeaderImage: false,
    faqSchema: true,
    freeToolCta: true,
    shopLine:
      "Get the UK Monthly Budget Spreadsheet for Google Sheets on UKMoneySheets Etsy.",
    related: [
      "autumn-budget-2026-what-it-means",
      "uk-monthly-budget-google-sheets",
      "uk-christmas-savings-tracker",
      "black-friday-spending-cap-price-log",
    ],
  },
];

/**
 * Visual guide layout data (Quick answer = description; these add figure
 * boxes and key points). Every figure and point is taken verbatim from, or is
 * a faithful shortening of, the guide's own article text. Guides without clear
 * headline figures have no figure boxes.
 */
const VISUAL: Record<
  string,
  Pick<GuideMeta, "keyFigures" | "keyFacts">
> = {
  "cash-isa-12k-under-65-planner": {
    keyFigures: [
      { value: "£20,000", label: "overall ISA allowance, 2026/27 and from April 2027" },
      { value: "£20,000", label: "cash ISA limit for savers aged 18 or over from 6 April 2027" },
      { value: "24%", label: "basic-rate tax on savings interest outside ISAs from 6 April 2027" },
    ],
    keyFacts: [
      "The planned £12,000 cash ISA limit for under-65s will not happen.",
      "The cash ISA limit stays £20,000 for all savers aged 18 or over from April 2027.",
      "Savings interest outside ISAs is taxed at 24%, 44% or 49% from 6 April 2027, above your allowances.",
      "Allowances reset each 6 April and don't roll over.",
    ],
  },
  "help-to-save-deposit-bonus-tracker": {
    keyFigures: [
      { value: "£1–£50", label: "you can pay in each calendar month" },
      { value: "50%", label: "government bonus: 50p for every £1 saved" },
      { value: "£1,200", label: "maximum bonus over 4 years (HMRC's framing)" },
    ],
    keyFacts: [
      "Bonuses are paid after year 2 and year 4.",
      "The first bonus is 50% of the highest balance saved in years 1–2.",
      "The final bonus depends on the highest balance in years 3–4 rising above years 1–2.",
      "Always confirm eligibility and bonus rules on GOV.UK.",
    ],
  },
  "register-self-assessment-5-october": {
    keyFigures: [
      { value: "5 Oct 2026", label: "tell HMRC you need to file (2025/26)" },
      { value: "31 Oct 2026", label: "paper return deadline" },
      { value: "31 Jan 2027", label: "online return and payment deadline" },
    ],
    keyFacts: [
      "5 October is the notify date, not the filing date.",
      "When you register, HMRC gives you a 10-digit Unique Taxpayer Reference (UTR).",
      "Registering late does not move the 31 January payment date.",
    ],
  },
  "uk-monthly-budget-google-sheets": {
    keyFacts: [
      "Make your own copy: File → Make a copy into your Google Drive.",
      "Use UK categories: rent or mortgage, council tax, energy, groceries.",
      "Start with take-home pay, then compare planned vs actual.",
      "A weekly 15-minute check-in is what makes the sheet useful.",
    ],
  },
  "house-deposit-lisa-planner": {
    keyFigures: [
      { value: "£4,000", label: "you can usually put into a LISA each tax year" },
      { value: "25%", label: "government bonus, up to £1,000 a year" },
      { value: "£450,000", label: "or less: property price for charge-free first-home use" },
    ],
    keyFacts: [
      "Deposit target ≈ price × deposit %.",
      "You must make your first LISA payment before you are 40.",
      "The £4,000 LISA limit counts towards your £20,000 ISA allowance.",
      "Above the £450,000 cap the charge is 20% from 29 Oct 2026; other withdrawals stay 25%.",
      "A First Time Buyer ISA replaces the LISA for new savers from 6 April 2029.",
    ],
  },
  "sheets-vs-excel-uk-budgeting": {
    keyFacts: [
      "Google Sheets suits households that budget together or on a phone.",
      "Share one live link instead of emailing versions back and forth.",
      "The weekly habit of updating planned vs actual matters more than the app.",
      "Start from a UK layout: council tax, GBP and the UK tax year.",
    ],
  },
  "uk-christmas-savings-tracker": {
    keyFacts: [
      "List every gift and Christmas cost with a budget cap.",
      "Starting before December gives you more paydays to spread the cost.",
      "Set aside a January buffer for rent, council tax and energy.",
      "Track actual spend so you see drift early, not on Christmas Eve.",
    ],
  },
  "uk-crypto-section-104": {
    keyFacts: [
      "Log every acquisition and disposal in sterling: date, asset, quantity, GBP value and fees.",
      "HMRC pools tokens of the same type in a Section 104 pool.",
      "Same-day and 30-day matching come before the pool.",
      "Exchange CSVs alone are messy; your log is the evidence.",
    ],
  },
  "uk-landlord-section-24": {
    keyFacts: [
      "Record rent received, allowable expenses and finance costs by tax year.",
      "Mortgage interest is no longer deducted in full for many individual landlords.",
      "Keep finance costs clearly labelled, separate from repairs and agent fees.",
      "Keep records at least 5 years after the 31 January deadline (check GOV.UK).",
    ],
  },
  "uk-self-assessment-side-hustle-sa103": {
    keyFigures: [
      { value: "£1,000", label: "sole-trader earnings above which you must send a return" },
      { value: "5 years", label: "keep records after the 31 January deadline" },
      { value: "6 Apr–5 Apr", label: "the UK tax year your sheet should follow" },
    ],
    keyFacts: [
      "Record every payment and allowable expense by UK tax year.",
      "SA103 is the self-employment section of your Self Assessment return.",
      "Your sheet holds the totals; it is not the form itself.",
    ],
  },
  "making-tax-digital-30k-april-2027": {
    keyFigures: [
      { value: "£30,000", label: "qualifying income on your 2025/26 return" },
      { value: "6 Apr 2027", label: "MTD for Income Tax start date if you're over" },
      { value: "£20,000", label: "threshold from April 2028, tested on 2026/27" },
    ],
    keyFacts: [
      "Qualifying income is turnover before expenses, not profit.",
      "Self-employment and property income are added together.",
      "For jointly owned rentals, only your share counts.",
      "No late-submission penalty points on 2027/28 quarterly updates, but you still have to send them.",
    ],
  },
  "adjusted-net-income-100k-childcare-hicbc": {
    keyFigures: [
      { value: "£100,000", label: "expected ANI where childcare support stops" },
      { value: "£2,000", label: "a year per child from Tax-Free Childcare" },
      { value: "30 hours", label: "a week for 38 weeks (England)" },
    ],
    keyFacts: [
      "The test applies if you or your partner expect ANI over £100,000.",
      "Relief-at-source pension payments are deducted grossed up (× 1.25).",
      "Gift Aid: deduct £1.25 for every £1 donated.",
      "15 hours for 3- and 4-year-olds in England stay regardless of income.",
    ],
  },
  "black-friday-spending-cap-price-log": {
    keyFigures: [
      { value: "27 Nov", label: "Black Friday 2026" },
      { value: "30 Nov", label: "Cyber Monday 2026" },
      { value: "83%", label: "of deals Which? tracked were the same or cheaper at another time" },
    ],
    keyFacts: [
      "Take your Black Friday cap out of your Christmas gift budget, not on top.",
      "Log the price of each item you plan to buy every week or so.",
      "A deal is only real if it beats your lowest logged price and fits your cap.",
    ],
  },
  "winter-energy-bills-tracker": {
    keyFigures: [
      { value: "£1,723", label: "a year: typical Direct Debit cap, Oct–Dec 2026" },
      { value: "4%", label: "up on the July to September cap" },
      { value: "25 Nov", label: "Ofgem announces the January 2027 cap" },
    ],
    keyFacts: [
      "The cap limits unit rates and standing charges, not your bill.",
      "Log your meter readings and multiply to see your own cost.",
      "January forecasts are forecasts, not Ofgem figures.",
      "Test a fixed deal against the cap with your own usage.",
    ],
  },
};

/** Nia's 16:9 lifestyle header photos (public/visual/guides/<slug>.webp). */
const NIA_HEADERS: Record<string, string> = {
  "cash-isa-12k-under-65-planner": "Cash ISA allowance planner",
  "help-to-save-deposit-bonus-tracker": "Help to Save bonus tracker",
  "register-self-assessment-5-october": "Self Assessment records sheet",
  "uk-monthly-budget-google-sheets": "UK monthly budget",
  "house-deposit-lisa-planner": "house deposit and LISA planner",
  "sheets-vs-excel-uk-budgeting": "UK household budget",
  "uk-christmas-savings-tracker": "Christmas savings tracker",
  "uk-crypto-section-104": "crypto Section 104 records sheet",
  "uk-landlord-section-24": "landlord rental income sheet",
  "uk-self-assessment-side-hustle-sa103": "side hustle SA103 records sheet",
  "making-tax-digital-30k-april-2027": "Making Tax Digital qualifying income check",
  "adjusted-net-income-100k-childcare-hicbc": "adjusted net income and childcare calculator",
  "black-friday-spending-cap-price-log": "Black Friday spending cap and price log",
  "winter-energy-bills-tracker": "winter energy bill tracker",
};

for (const g of guides) {
  const v = VISUAL[g.slug];
  if (v) Object.assign(g, v);
  if (!g.headerImage && NIA_HEADERS[g.slug]) {
    g.headerImage = {
      src: `/visual/guides/${g.slug}.webp`,
      alt: `A ${NIA_HEADERS[g.slug]} in Google Sheets on a laptop at home, example data shown`,
    };
  }
}

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
