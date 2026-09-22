import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, BookOpen, Landmark, Smartphone } from "lucide-react";
import { GuideCard } from "@/components/guide-card";
import { ShopCta } from "@/components/shop-cta";
import { LedgerPreview } from "@/components/ledger-preview";
import { Button } from "@/components/ui/button";
import { featuredGuides } from "@/lib/guides";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: `${SITE.name} — Google Sheets for UK tax, salaries and savings`,
      },
      { name: "description", content: SITE.description },
    ],
  }),
  component: Home,
});

const REASONS = [
  {
    icon: Landmark,
    title: "Built for Britain",
    body: "Categories and tax-year thinking that match GOV.UK-style life, not 401(k) placeholders. Council tax, GBP, and 6 April to 5 April.",
  },
  {
    icon: Smartphone,
    title: "Google Sheets, not Excel",
    body: "Browser-first files you can share with a partner and open on mobile without version chaos. File → Make a copy into your own Drive.",
  },
  {
    icon: BookOpen,
    title: "Guides first",
    body: "Free explainers on budgeting, Self Assessment records, landlord tracking, ISAs and more — a soft shop link only when a template helps.",
  },
];

function Home() {
  const featured = featuredGuides();

  return (
    <>
      <section className="ledger-grid border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:py-24">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
              {SITE.location} · Google Sheets only · GBP £
            </p>
            <h1 className="mt-4 font-display text-[2.7rem] leading-[1.05] font-semibold tracking-[-0.03em] text-navy sm:text-6xl">
              Simple Google Sheets for UK money
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Calm guides and ready-made templates built for British salaries,
              tax years, and household bills — not US Excel worksheets with the
              wrong categories.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/guides">
                  Read the guides
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a
                  href={SITE.shopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Browse the shop
                  <ArrowUpRight />
                </a>
              </Button>
            </div>
          </div>
          <LedgerPreview />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
          Why Google Sheets
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-[-0.03em] text-navy">
          Most households here need a living file they can share and update on a
          phone
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          UkMoneySheets focuses on <strong className="font-semibold text-navy">Google Sheets</strong> templates
          that speak UK: council tax, GBP, and tax years from 6 April.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {REASONS.map((reason) => (
            <article
              key={reason.title}
              className="rounded-xl bg-mint p-6 sm:p-7"
            >
              <reason.icon className="size-5 text-teal" strokeWidth={1.75} />
              <h3 className="mt-4 font-display text-2xl font-semibold text-navy">
                {reason.title}
              </h3>
              <p className="mt-2 text-[0.98rem] leading-relaxed text-muted">
                {reason.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-paper/60">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
                Latest guides
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.03em] text-navy">
                Practical overviews you can use whether or not you buy a template
              </h2>
            </div>
            <Link
              to="/guides"
              className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-teal no-underline"
            >
              See all guides
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {featured.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} featured />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <ShopCta />
      </section>
    </>
  );
}
