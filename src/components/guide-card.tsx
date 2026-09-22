import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { GuideMeta } from "@/lib/guides";
import { cn } from "@/lib/utils";

const CATEGORY_ACCENT: Record<string, string> = {
  Savings: "bg-teal",
  Tax: "bg-navy",
  Property: "bg-teal-deep",
  Budgeting: "bg-navy-soft",
  Guides: "bg-teal",
};

export function GuideCard({
  guide,
  featured = false,
}: {
  guide: GuideMeta;
  featured?: boolean;
}) {
  const accent = CATEGORY_ACCENT[guide.category] ?? "bg-teal";

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl bg-paper transition-[box-shadow,transform] duration-200 ease-out hairline hairline-hover",
      )}
    >
      <div className={cn("h-1.5 w-full shrink-0", accent)} aria-hidden />
      <div className="relative aspect-[16/10] overflow-hidden bg-mint/40">
        <img
          src={guide.image}
          alt=""
          width={960}
          height={600}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.02]"
        />
      </div>
      <div className={cn("flex flex-1 flex-col p-6", featured ? "sm:p-7" : "")}>
        <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-teal uppercase">
          {guide.category}
        </p>
        <h3 className="mt-2 font-display text-[1.45rem] leading-snug font-semibold tracking-[-0.02em] text-navy">
          <Link
            to="/guides/$slug"
            params={{ slug: guide.slug }}
            className="text-navy no-underline group-hover:text-teal"
          >
            {guide.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-[0.98rem] leading-relaxed text-muted">
          {guide.metaDescription}
        </p>
        <Link
          to="/guides/$slug"
          params={{ slug: guide.slug }}
          className="mt-5 inline-flex min-h-11 items-center gap-1.5 self-start text-sm font-semibold text-teal no-underline"
        >
          Read guide
          <ArrowRight className="size-4 transition-transform duration-150 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
