import { createFileRoute } from "@tanstack/react-router";
import { openCookieSettings } from "@/lib/analytics";
import { SITE, etsyLink, pageHead } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead({
      title: `Privacy & Cookies | ${SITE.name}`,
      description:
        "How UkMoneySheets uses Google Analytics cookies, which are only set if you accept, and how to change your cookie choice at any time.",
      path: "/privacy",
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
      <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
        Privacy
      </p>
      <h1 className="mt-3 font-display text-[2.15rem] leading-[1.12] font-semibold tracking-[-0.03em] text-navy sm:text-5xl">
        Privacy &amp; cookies
      </h1>
      <div className="mt-6 space-y-5 text-[1.05rem] leading-relaxed text-body">
        <p>
          This site doesn't ask for or store your personal details. There are no
          accounts, forms or newsletters here, and the free tools run in your
          browser. The only data collected is anonymous usage statistics from
          Google Analytics, and only if you accept analytics cookies.
        </p>
        <p>
          Purchases happen on Etsy, under Etsy's own privacy policy. If you have
          a question about your data, contact us through our{" "}
          <a
            href={etsyLink(SITE.shopUrl)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal underline underline-offset-2"
          >
            Etsy shop
          </a>
          .
        </p>
      </div>

      <h2
        id="cookies"
        className="mt-10 scroll-mt-24 font-display text-2xl font-semibold text-navy sm:text-3xl"
      >
        Cookies
      </h2>
      <div className="mt-4 space-y-5 text-[1.05rem] leading-relaxed text-body">
        <p>
          We use Google Analytics 4 to see which pages and guides are useful. It
          sets the analytics cookies <code>_ga</code> and <code>_ga_*</code>,
          which last up to two years. These are only set if you click{" "}
          <strong>Accept</strong> in the cookie banner. If you click{" "}
          <strong>Reject</strong>, or make no choice, no analytics cookies are
          set. We don't use advertising cookies.
        </p>
        <p>
          Your choice is saved in your browser's local storage, not in a cookie,
          so the banner doesn't show again. You can change your mind at any time
          with the <strong>Cookie settings</strong> link at the bottom of every
          page, or here:
        </p>
        <button
          type="button"
          onClick={openCookieSettings}
          className="inline-flex h-10 items-center rounded-lg border border-teal bg-ivory px-4 text-[0.95rem] font-semibold text-teal hover:bg-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
        >
          Change cookie settings
        </button>
      </div>
    </section>
  );
}
