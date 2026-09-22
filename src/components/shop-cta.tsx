import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ShopCta({
  tone = "navy",
  title = "Shop UK Google Sheets on Etsy",
  body = "Calm templates for British tax years, GBP and household bills. Google Sheets only — never Excel. Soft next step when a ready-made file helps.",
  ctaLabel = "Browse UkMoneySheets on Etsy",
  href,
  className,
}: {
  tone?: "navy" | "mint";
  title?: string;
  body?: string;
  ctaLabel?: string;
  href?: string;
  className?: string;
}) {
  const navy = tone === "navy";
  const link = href ?? SITE.shopUrl;
  return (
    <aside
      className={cn(
        "rounded-xl px-6 py-7 sm:px-8 sm:py-8",
        navy ? "bg-navy text-ivory" : "bg-mint text-navy",
        className,
      )}
    >
      <p
        className={cn(
          "text-xs font-semibold tracking-[0.16em] uppercase",
          navy ? "text-mint" : "text-teal",
        )}
      >
        Soft next step
      </p>
      <h2
        className={cn(
          "mt-2 font-display text-3xl font-semibold tracking-[-0.03em]",
          navy ? "text-ivory" : "text-navy",
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "mt-3 max-w-2xl text-[1.02rem] leading-relaxed",
          navy ? "text-mint" : "text-muted",
        )}
      >
        {body}
      </p>
      <Button asChild variant={navy ? "ivory" : "default"} className="mt-6">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {ctaLabel}
          <ArrowUpRight />
        </a>
      </Button>
    </aside>
  );
}
