import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { GuideBody } from "@/components/guide-body";
import { AuthorBox } from "@/components/author-box";
import { FreeToolCta } from "@/components/free-tool-cta";
import { GuideCard } from "@/components/guide-card";
import { ShopCta } from "@/components/shop-cta";
import { Button } from "@/components/ui/button";
import { getGuide, relatedGuides } from "@/lib/guides";
import { getArticle } from "@/lib/articles";
import { faqJsonLdScript } from "@/lib/faq";
import { SITE, etsyLink, pageHead } from "@/lib/site";

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
    const { guide, article } = loaderData;
    const head = pageHead({
      title: `${guide.seoTitle ?? guide.title} | ${SITE.name}`,
      description: guide.metaDescription,
      path: `/guides/${guide.slug}`,
      type: "article",
      image: guide.ogImage,
      imageAlt: guide.ogImageAlt,
    });
    const faq = guide.faqSchema ? faqJsonLdScript(article) : null;
    return faq ? { ...head, scripts: [faq] } : head;
  },
  component: GuidePage,
});

function GuidePage() {
  const { guide, article } = Route.useLoaderData();
  const related = relatedGuides(guide.slug);
  const showHeaderImage = guide.showHeaderImage !== false;

  return (
    <>
      <article>
        {guide.keyFacts ? (
          <header className="border-b border-line">
            <div className="mx-auto grid max-w-6xl gap-8 px-5 pt-4 pb-10 sm:px-8 sm:pt-6 sm:pb-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-start">
              <div>
                <Link
                  to="/guides"
                  className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-teal no-underline"
                >
                  <ArrowLeft className="size-4" />
                  {guide.category} guides
                </Link>
                <h1 className="mt-2 font-display text-[1.9rem] leading-[1.12] font-semibold tracking-[-0.03em] text-navy sm:text-5xl">
                  {guide.title}
                </h1>
                <div className="mt-5 rounded-xl border-l-4 border-teal bg-mint-light px-5 py-4">
                  <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-teal-deep uppercase">
                    Quick answer
                  </p>
                  <p className="mt-1 text-[1.02rem] leading-relaxed text-navy">
                    {guide.description}
                  </p>
                </div>
                {guide.keyFigures ? (
                  <dl className="mt-5 grid grid-cols-3 gap-3">
                    {guide.keyFigures.map((f) => (
                      <div key={f.label} className="rounded-xl bg-mint px-3 py-3 text-center">
                        <dt className="sr-only">{f.label}</dt>
                        <dd className="font-display text-2xl font-semibold text-teal-deep sm:text-3xl">
                          {f.value}
                        </dd>
                        <dd className="mt-0.5 text-xs leading-snug text-muted">{f.label}</dd>
                      </div>
                    ))}
                  </dl>
                ) : null}
                <div className="mt-5 flex flex-wrap gap-3">
                  {guide.inlineTool ? (
                    <Button asChild size="lg" className="rounded-full px-6">
                      <a href="#calculator">Try the free calculator</a>
                    </Button>
                  ) : null}
                </div>
              </div>
              <div className="space-y-5">
                {showHeaderImage ? (
                  <div className="hidden overflow-hidden rounded-xl bg-paper shadow-[0_20px_50px_-24px_rgba(5,100,110,0.45)] hairline lg:block">
                    <img
                      src={guide.image}
                      alt={guide.imageAlt}
                      width={960}
                      height={960}
                      decoding="async"
                      className="aspect-[4/3] w-full object-cover object-top"
                    />
                  </div>
                ) : null}
                <div className="rounded-xl bg-paper p-5 hairline">
                  <p className="font-display text-xl font-semibold text-navy">Key points</p>
                  <ul className="mt-3 space-y-2.5">
                    {guide.keyFacts.map((k) => (
                      <li key={k} className="flex gap-2.5 text-[0.95rem] leading-snug text-body">
                        <Check className="mt-0.5 size-4 shrink-0 text-teal" strokeWidth={2.5} />
                        {k}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </header>
        ) : (
        <header className="border-b border-line bg-mint/40">
            <div
              className={
                showHeaderImage
                  ? "mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center"
                  : "mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16"
              }
            >
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
              {showHeaderImage ? (
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
              ) : null}
            </div>
          </header>
        )}

        <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
          <GuideBody
            source={article}
            images={guide.inGuideImages}
            inlineTool={guide.inlineTool}
            afterFirstSection={
              guide.product ? (
                <ProductCard {...guide.product} href={guide.ctaUrl ?? SITE.shopUrl} />
              ) : undefined
            }
          />

          {guide.product ? (
            <ProductCard {...guide.product} href={guide.ctaUrl ?? SITE.shopUrl} className="mt-12" />
          ) : null}

          {guide.freeToolCta ? <FreeToolCta className="mt-12" /> : null}

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
            <Button
              asChild
              variant="link"
              className="mt-3 max-w-full px-0 text-left whitespace-normal"
            >
              <a
                href={etsyLink(guide.ctaUrl ?? SITE.shopUrl)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {guide.ctaLabel ?? "Browse UkMoneySheets on Etsy"}
                <ArrowUpRight />
              </a>
            </Button>
          </div>

          <AuthorBox className="mt-6" />
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
          ctaLabel={guide.ctaLabel ?? "Browse UkMoneySheets on Etsy"}
          href={guide.ctaUrl ?? SITE.shopUrl}
        />
      </section>
    </>
  );
}
