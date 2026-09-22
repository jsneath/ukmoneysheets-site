import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SiteLogo } from "@/components/site-logo";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ivory/90 backdrop-blur-md">
      <div className="h-0.5 bg-teal" aria-hidden="true" />
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <SiteLogo compact />
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          <Link
            to="/guides"
            className="inline-flex h-11 items-center rounded-lg px-3.5 text-[0.95rem] font-medium text-navy no-underline hover:bg-mint/70"
          >
            Guides
          </Link>
          <Button asChild variant="outline" size="sm" className="ml-2">
            <a
              href={SITE.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop
              <ArrowUpRight />
            </a>
          </Button>
        </nav>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-lg text-navy md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      <div
        id="mobile-nav"
        className={cn(
          "border-t border-line bg-ivory md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3" aria-label="Mobile">
          <Link
            to="/guides"
            className="inline-flex min-h-11 items-center rounded-lg px-3 text-base font-medium text-navy no-underline hover:bg-mint/70"
            onClick={() => setOpen(false)}
          >
            Guides
          </Link>
          <a
            href={SITE.shopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-base font-medium text-teal no-underline hover:bg-mint/70"
            onClick={() => setOpen(false)}
          >
            Shop
            <ArrowUpRight className="size-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
