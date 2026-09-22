import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ShopCta({
  tone = "navy",
  title = "Ready-made Google Sheets on Etsy",
  body = "UK categories, GBP and tax years from 6 April. Copy the file into your own Drive — no Excel, no US 401(k) placeholders.",
  className,
}: {
  tone?: "navy" | "mint";
  title?: string;
  body?: string;
  className?: string;
}) {
  const navy = tone === "navy";
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
      <Button
        asChild
        variant={navy ? "ivory" : "default"}
        className="mt-6"
      >
        <a href={SITE.shopUrl} target="_blank" rel="noopener noreferrer">
          Visit the shop
          <ArrowUpRight />
        </a>
      </Button>
    </aside>
  );
}
