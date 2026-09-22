import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Markdown } from "@/components/markdown";
import { GuideCard } from "@/components/guide-card";
import { ShopCta } from "@/components/shop-cta";
import { Button } from "@/components/ui/button";
import { getGuide, relatedGuides } from "@/lib/guides";
import { getArticle } from "@/lib/articles";
import { SITE, pageHead } from "@/lib/site";

export const Route = createFileRoute("/guides/$slug")({
  loader: ({ params }) => {
    const guide = getGuide(params.slug);
    const article = getArticle(params.slug);
    if (!guide || !article) throw notFound();
    return { guide, article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return pageHead({
        title: SITE.name,
        description: SITE.description,
        path: "/guides",
      });
    }
    const { guide } = loaderData;
    return pageHead({
      title: `${guide.title} | ${SITE.name}`,
      description: guide.metaDescription,
      path: `/guides/${guide.slug}`,
      type: "article",
    });
  },
  component: GuidePage,
});

function GuidePage() {
  const { guide, article } = Route.useLoaderData();
  const related = relatedGuides(guide.slug);

  return (
    <>
      <article>
        <header className="border-b border-line bg-mint/40">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center">
            <div>
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
            <div className="overflow-hidden rounded-xl bg-paper hairline">
              <img
                src={guide.image}
                alt=""
                width={960}
                height={960}
                decoding="async"
                className="aspect-square w-full object-cover object-top"
              />
            </div>
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
                Browse UkMoneySheets on Etsy
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
        <ShopCta
          tone="navy"
          title="Shop UK Google Sheets on Etsy"
          body={
            guide.shopLine ??
            "Browse UkMoneySheets on Etsy for calm UK Google Sheets templates."
          }
          ctaLabel="Browse UkMoneySheets on Etsy"
        />
      </section>
    </>
  );
}
