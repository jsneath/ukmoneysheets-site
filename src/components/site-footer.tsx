import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { LogoMark } from "@/components/site-logo";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-navy text-ivory">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark />
            <span className="font-display text-2xl font-semibold tracking-[-0.03em] text-ivory">
              {SITE.name}
            </span>
          </div>
          <p className="mt-4 max-w-sm text-[0.95rem] leading-relaxed text-mint">
            {SITE.tagline} Calm templates and free guides for British salaries,
            tax years and household bills.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] text-mint uppercase">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-[0.95rem]">
            <li>
              <Link to="/" className="text-ivory no-underline hover:text-mint">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/guides"
                className="text-ivory no-underline hover:text-mint"
              >
                Guides
              </Link>
            </li>
            <li>
              <a
                href={SITE.shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-ivory no-underline hover:text-mint"
              >
                Shop on Etsy
                <ArrowUpRight className="size-3.5" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] text-mint uppercase">
            Notes
          </p>
          <p className="mt-4 text-[0.9rem] leading-relaxed text-mint/90">
            Google Sheets only — never Excel. Prices in GBP. General information
            only, not tax or financial advice. Check{" "}
            <a
              href="https://www.gov.uk"
              className="text-ivory underline decoration-mint/50 underline-offset-3 hover:text-mint"
            >
              GOV.UK
            </a>{" "}
            for current rules.
          </p>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-sm text-mint/80 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} {SITE.name}. {SITE.location}.</p>
          <p>Digital Google Sheets templates · Instant download on Etsy</p>
        </div>
      </div>
    </footer>
  );
}
