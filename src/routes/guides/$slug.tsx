import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Markdown } from "@/components/markdown";
import { GuideCard } from "@/components/guide-card";
import { ShopCta } from "@/components/shop-cta";
import { Button } from "@/components/ui/button";
import { getGuide, relatedGuides } from "@/lib/guides";
import { getArticle } from "@/lib/articles";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/guides/$slug")({
  loader: ({ params }) => {
    const guide = getGuide(params.slug);
    const article = getArticle(params.slug);
    if (!guide || !article) throw notFound();
    return { guide, article };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.guide.title} | ${SITE.name}`
          : SITE.name,
      },
      {
        name: "description",
        content: loaderData?.guide.description ?? SITE.description,
      },
    ],
  }),
  component: GuidePage,
});

function GuidePage() {
  const { guide, article } = Route.useLoaderData();
  const related = relatedGuides(guide.slug);

  return (
    <>
      <article>
        <header className="border-b border-line bg-mint/40">
          <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
            <Link
              to="/guides"
              className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-teal no-underline"
            >
              <ArrowLeft className="size-4" />
              All guides
            </Link>
            <p className="mt-6 text-xs font-semibold tracking-[0.16em] text-teal uppercase">
              {guide.category}
            </p>
            <h1 className="mt-3 font-display text-[2.15rem] leading-[1.12] font-semibold tracking-[-0.03em] text-navy sm:text-5xl">
              {guide.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              {guide.description}
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
          <Markdown source={article} />

          <div className="mt-14 rounded-xl border border-line bg-paper px-6 py-6 sm:px-7">
            <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
              Disclaimer
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Not tax or financial advice. Rules, allowances and product names
              change — GOV.UK is the source of truth. Confirm the live Etsy
              listing before purchase. UkMoneySheets templates are Google Sheets
              only (never Excel), delivered as a PDF with a copy link, prices in
              GBP.
            </p>
            <Button asChild variant="link" className="mt-3 px-0">
              <a
                href={SITE.shopUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                UkMoneySheets on Etsy
                <ArrowUpRight />
              </a>
            </Button>
          </div>
        </div>
      </article>

      {related.length > 0 ? (
        <section className="border-t border-line bg-paper/70">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
            <h2 className="font-display text-3xl font-semibold text-navy">
              Related guides
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {related.map((item) => (
                <GuideCard key={item.slug} guide={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <ShopCta tone="navy" />
      </section>
    </>
  );
}
