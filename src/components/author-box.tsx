import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ABOUT_COPY } from "@/lib/about";
import { cn } from "@/lib/utils";

/** Short "about the site" box for the bottom of every guide. Not a byline. */
export function AuthorBox({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        "rounded-xl border border-teal/25 bg-mint/50 px-6 py-5 sm:px-7",
        className,
      )}
      aria-label="About UkMoneySheets"
    >
      <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
        About UkMoneySheets
      </p>
      <p className="mt-2 text-[0.98rem] leading-relaxed text-body">
        {ABOUT_COPY.authorBox}{" "}
        <Link
          to="/about"
          className="inline-flex items-center gap-1 font-semibold text-teal no-underline hover:underline"
        >
          {ABOUT_COPY.authorBoxLink}
          <ArrowRight className="size-3.5" />
        </Link>
      </p>
    </aside>
  );
}
