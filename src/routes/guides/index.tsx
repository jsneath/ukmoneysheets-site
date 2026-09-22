import { createFileRoute } from "@tanstack/react-router";
import { GuideCard } from "@/components/guide-card";
import { ShopCta } from "@/components/shop-cta";
import { guides } from "@/lib/guides";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/guides/")({
  head: () => ({
    meta: [
      { title: `Guides | ${SITE.name}` },
      {
        name: "description",
        content:
          "Practical UK personal-finance explainers for Google Sheets. General information only — check GOV.UK for current rules.",
      },
    ],
  }),
  component: GuidesIndex,
});

function GuidesIndex() {
  return (
    <>
      <section className="border-b border-line bg-mint/50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
            Free explainers
          </p>
          <h1 className="mt-3 font-display text-5xl font-semibold tracking-[-0.03em] text-navy">
            Guides
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            Practical UK personal-finance explainers. General information only —
            check{" "}
            <a href="https://www.gov.uk" className="underline">
              GOV.UK
            </a>{" "}
            for current rules.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {guides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
        <ShopCta className="mt-16" tone="mint" />
      </section>
    </>
  );
}
