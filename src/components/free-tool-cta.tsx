import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Reusable promo for the free checker. Links to the internal page, not Google. */
export function FreeToolCta({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        "rounded-xl border border-teal/30 bg-mint/60 px-6 py-6 sm:px-7",
        className,
      )}
      aria-label="Free take-home pay checker"
    >
      <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
        Free Google Sheet
      </p>
      <p className="mt-2 font-display text-2xl leading-snug font-semibold tracking-[-0.02em] text-navy">
        Free: UK Take-Home Pay &amp; Side-Income Checker — make your copy
      </p>
      <p className="mt-2 max-w-2xl text-[0.98rem] leading-relaxed text-muted">
        Estimate your 2026/27 take-home pay, then check any side or rental
        income against the £1,000 allowances, Self Assessment and Making Tax
        Digital. No email needed.
      </p>
      <Button asChild className="mt-5">
        <Link to="/free-take-home-pay-checker">
          Get the free checker
          <ArrowRight />
        </Link>
      </Button>
    </aside>
  );
}
