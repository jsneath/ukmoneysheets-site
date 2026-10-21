import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  Download,
  PencilLine,
} from "lucide-react";
import { FadeUpObserver } from "@/components/fade-up";
import { FreeToolCta } from "@/components/free-tool-cta";
import { GuideCard } from "@/components/guide-card";
import { ShopCta } from "@/components/shop-cta";
import { PopularSheets } from "@/components/popular-sheets";
import { Button } from "@/components/ui/button";
import { featuredGuides } from "@/lib/guides";
import { SITE, etsyLink, pageHead } from "@/lib/site";

const HOME_META =
  "Free 2026/27 UK take-home pay checker in Google Sheets, no email needed, plus plain-English guides and templates for budgets, ISAs and Self Assessment.";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: `UK Google Sheets & Free 2026/27 Pay Checker | ${SITE.name}`,
      description: HOME_META,
      path: "/",
    }),
  component: Home,
});

const HERO_TICKS = [
  "UK tax year, 6 April to 5 April",
  "Works on phone and laptop",
  "Share with a partner",
];

const SITUATIONS = [
  {
    label: "Budgeting",
    strip: "bg-teal",
    benefit: "See where every pound goes each month",
    slug: "uk-monthly-budget-google-sheets",
    image: "/visual/tile-budgeting.webp",
    alt: "UK monthly budget dashboard in Google Sheets, example data",
  },
  {
    label: "Saving",
    strip: "bg-mint-deep",
    benefit: "Track your Cash ISA allowance this tax year",
    slug: "cash-isa-12k-under-65-planner",
    image: "/visual/tile-saving.webp",
    alt: "Cash ISA allowance planner in Google Sheets, example data",
  },
  {
    label: "Side hustle tax",
    strip: "bg-teal-deep",
    benefit: "Keep SA103-ready income and expense records",
    slug: "uk-self-assessment-side-hustle-sa103",
    image: "/visual/tile-side-hustle-tax.webp",
    alt: "Side hustle Self Assessment records in Google Sheets, example data",
  },
  {
    label: "Landlord",
    strip: "bg-teal",
    benefit: "Rental income, costs and Section 24 in one place",
    slug: "uk-landlord-section-24",
    image: "/visual/tile-landlord.webp",
    alt: "UK landlord records for Self Assessment in Google Sheets, example data",
  },
  {
    label: "Buying a home",
    strip: "bg-mint-deep",
    benefit: "Plan your deposit and Lifetime ISA pay-ins",
    slug: "house-deposit-lisa-planner",
    image: "/visual/tile-buying-a-home.webp",
    alt: "House deposit and Lifetime ISA planner in Google Sheets, example data",
  },
  {
    label: "Mortgage",
    strip: "bg-teal-deep",
    benefit: "See the interest an overpayment could save",
    slug: "mortgage-overpayment-calculator",
    image: "/visual/tile-mortgage.webp",
    alt: "Mortgage overpayment calculator in Google Sheets, example data",
  },
];

const INSIDE = [
  { src: "/visual/inside-energy-readings.webp", alt: "Winter energy bill tracker monthly readings tab in Google Sheets", caption: "Energy readings" },
  { src: "/visual/inside-couples-dashboard.webp", alt: "Couples shared bills dashboard in Google Sheets showing who owes whom", caption: "Couples settle-up" },
  { src: "/visual/inside-childcare-costs.webp", alt: "Childcare cost after support tab in Google Sheets", caption: "Childcare costs" },
  { src: "/visual/inside-student-safe-to-spend.webp", alt: "Student budget safe-to-spend tab in Google Sheets", caption: "Student safe-to-spend" },
  { src: "/guides/inguide/mortgage-overpayment-calculator/1.webp", alt: "Mortgage overpayment calculator tab in Google Sheets", caption: "Mortgage overpayments" },
];

const STEPS = [
  { icon: Download, title: "Download", body: "Get the PDF with your copy link." },
  { icon: Copy, title: "Make a copy", body: "File → Make a copy into your Drive." },
  { icon: PencilLine, title: "Add your figures", body: "Totals and charts update for you." },
];

function Home() {
  const featured = featuredGuides();

  return (
    <>
      {/* Hero */}
      <FadeUpObserver />
      <section className="hero-band relative overflow-hidden border-b border-line">
        <span className="leaf-mark -left-24 -bottom-24 size-[420px] rotate-[-18deg]" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:py-20">
          <div>
            <h1 className="font-display text-[2.6rem] leading-[1.05] font-semibold tracking-[-0.03em] sm:text-6xl">
              <span className="block text-navy">Simple Google Sheets</span>
              <span className="block text-teal">for UK money</span>
            </h1>
            <ul className="mt-6 space-y-2.5">
              {HERO_TICKS.map((t) => (
                <li key={t} className="flex items-center gap-2.5 text-[1.05rem] text-navy">
                  <span className="grid size-7 place-items-center rounded-full bg-teal">
                    <Check className="size-4 text-ivory" strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <Link to="/free-take-home-pay-checker">
                  Free take-home pay checker
                  <ArrowRight />
                </Link>
              </Button>
              <a
                href={etsyLink(SITE.shopUrl)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-1.5 px-2 text-sm font-semibold text-teal no-underline"
              >
                Browse the sheets on Etsy
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
          <figure className="relative">
            <div className="absolute -inset-3 -z-0 rotate-1 rounded-[1.75rem] bg-gradient-to-br from-teal to-teal-deep" aria-hidden />
            <img
              src="/visual/hero-living.webp"
              alt="UKMoneySheets budget planner open in Google Sheets on a laptop and phone in a calm living room, example data shown"
              width={1200}
              height={675}
              fetchPriority="high"
              decoding="async"
              className="relative aspect-[16/9] w-full rounded-xl object-cover shadow-[0_20px_50px_-20px_rgba(5,100,110,0.45)]"
            />
            <figcaption className="absolute right-3 bottom-3 rounded-full bg-ivory/90 px-3 py-1 text-xs font-semibold text-teal-deep">
              Example data shown
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Find your sheet */}
      <section className="bg-mint-light">
      <div className="fade-up mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-18">
        <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
          Find your sheet
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.03em] text-navy">
          What are you sorting out?
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {SITUATIONS.map((s) => (
            <Link
              key={s.slug}
              to="/guides/$slug"
              params={{ slug: s.slug }}
              className="lift group overflow-hidden rounded-xl bg-paper no-underline hairline"
            >
              <div className="aspect-square overflow-hidden bg-mint">
                <img
                  src={s.image}
                  alt={s.alt}
                  width={640}
                  height={640}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="flex items-center justify-between gap-2 font-display text-xl font-semibold text-navy group-hover:text-teal">
                  {s.label}
                  <ArrowRight className="size-4 shrink-0 text-teal" />
                </h3>
                <p className="mt-1 text-sm leading-snug text-muted">{s.benefit}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      </section>

      {/* See inside */}
      <section className="teal-band relative overflow-hidden">
        <span className="leaf-mark -right-20 -top-16 size-[380px] rotate-12" aria-hidden />
        <div className="fade-up relative mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-2">
            <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] text-ivory">
              See inside
            </h2>
            <p className="text-sm text-mint">Example data shown</p>
          </div>
          <div className="-mx-5 mt-8 flex snap-x gap-4 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8">
            {INSIDE.map((i) => (
              <figure key={i.src} className="w-[260px] shrink-0 snap-start sm:w-[300px]">
                <img
                  src={i.src}
                  alt={`${i.alt}, example data shown`}
                  width={640}
                  height={640}
                  loading="lazy"
                  decoding="async"
                  className="lift aspect-square w-full rounded-xl bg-paper object-cover object-top ring-4 ring-ivory/15"
                />
                <figcaption className="mt-2 text-sm font-semibold text-ivory">
                  {i.caption}
                  <span className="ml-1 font-normal text-mint">· Example data shown</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 3 steps */}
      <section className="bg-mint">
      <div className="fade-up mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <h2 className="text-center font-display text-3xl font-semibold tracking-[-0.03em] text-navy">
          Ready in three steps
        </h2>
        <ol className="mt-8 grid gap-4 sm:grid-cols-3">
          {STEPS.map((s, n) => (
            <li key={s.title} className="lift flex items-center gap-4 rounded-xl bg-ivory p-5 hairline">
              <span className="relative grid size-14 shrink-0 place-items-center rounded-full bg-gradient-to-br from-teal to-teal-deep">
                <s.icon className="size-6 text-ivory" strokeWidth={1.75} />
                <span className="absolute -top-1 -right-1 grid size-6 place-items-center rounded-full bg-mint text-xs font-bold text-teal-deep ring-2 ring-ivory">
                  {n + 1}
                </span>
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-navy">{s.title}</h3>
                <p className="text-sm text-muted">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      </section>

      {/* Free tool */}
      <section className="fade-up mx-auto max-w-6xl px-5 pt-14 sm:px-8">
        <FreeToolCta />
      </section>

      {/* Trust */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="teal-band fade-up relative grid items-center gap-6 overflow-hidden rounded-2xl p-6 sm:grid-cols-[auto_1fr] sm:p-8">
          <span className="leaf-mark -right-10 -bottom-12 size-64 rotate-[-10deg]" aria-hidden />
          <img
            src="/about/james.jpg"
            alt="James, founder of UkMoneySheets"
            width={160}
            height={160}
            loading="lazy"
            decoding="async"
            className="size-28 rounded-full object-cover ring-4 ring-ivory sm:size-36"
          />
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-ivory">
              Made by James, 18 years in finance
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {["Google Sheets", "Instant download", "UK tax year figures"].map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5 rounded-full bg-ivory px-3.5 py-1.5 text-sm font-semibold text-teal-deep">
                  <Check className="size-4" strokeWidth={2.5} />
                  {t}
                </li>
              ))}
            </ul>
            <Link to="/about" className="relative mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-mint no-underline">
              About James <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="border-y border-line bg-mint-light">
        <div className="fade-up mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-18">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] text-navy">
              Latest guides
            </h2>
            <Link
              to="/guides"
              className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-teal no-underline"
            >
              See all guides
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {featured.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </div>
      </section>

      <section className="fade-up mx-auto max-w-6xl px-5 pt-14 sm:px-8">
        <PopularSheets />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <ShopCta />
      </section>
    </>
  );
}
