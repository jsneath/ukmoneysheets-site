import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ABOUT_COPY, ABOUT_PHOTO, aboutJsonLdScript } from "@/lib/about";
import { pageHead } from "@/lib/site";

const META =
  "James has worked in finance for 18 years. Most UkMoneySheets templates are sheets he uses himself, built for UK tax years, council tax and ISAs.";

export const Route = createFileRoute("/about")({
  head: () => ({
    ...pageHead({
      // Brand is already in the title, so no " | UkMoneySheets" suffix.
      title: ABOUT_COPY.title,
      description: META,
      path: "/about",
    }),
    scripts: [aboutJsonLdScript()],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="border-b border-line bg-mint/40">
      <div
        className={
          ABOUT_PHOTO
            ? "mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-start"
            : "mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16"
        }
      >
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
            {ABOUT_COPY.title}
          </p>
          <h1 className="mt-3 font-display text-[2.15rem] leading-[1.12] font-semibold tracking-[-0.03em] text-navy sm:text-5xl">
            {ABOUT_COPY.h1}
          </h1>
          <div className="mt-6 space-y-5 text-[1.05rem] leading-relaxed text-body">
            {ABOUT_COPY.body.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>
          <p className="mt-6 text-[1.05rem] leading-relaxed font-medium text-navy">
            {ABOUT_COPY.closing}
          </p>
          <Button asChild size="lg" className="mt-6">
            <a
              href={ABOUT_COPY.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ABOUT_COPY.ctaLabel}
              <ArrowUpRight />
            </a>
          </Button>
        </div>
        {ABOUT_PHOTO ? (
          <div className="w-full max-w-[400px] overflow-hidden rounded-xl bg-paper hairline lg:justify-self-end">
            {/* Native 400×400: never display larger than that. */}
            <img
              src={ABOUT_PHOTO.src}
              alt={ABOUT_PHOTO.alt}
              width={400}
              height={400}
              decoding="async"
              className="block aspect-square h-auto w-full max-w-[400px] object-cover"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
