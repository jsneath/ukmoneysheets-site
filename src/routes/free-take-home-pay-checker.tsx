import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FREE_TOOL } from "@/lib/free-tool";
import { SITE, pageHead } from "@/lib/site";

const META =
  "Free Google Sheet for 2026/27: estimate your UK take-home pay, then check side or rental income for the £1,000 allowance, Self Assessment and MTD.";

export const Route = createFileRoute("/free-take-home-pay-checker")({
  head: () =>
    pageHead({
      title: `Free ${FREE_TOOL.name} | ${SITE.name}`,
      description: META,
      path: FREE_TOOL.path,
    }),
  component: FreeToolPage,
});

const TELLS_YOU = [
  "Your take-home pay after Income Tax, National Insurance and student loan — yearly and monthly",
  "What you keep from a side hustle or rental income after tax",
  "Whether the £1,000 trading and property allowances cover your side income",
  "Whether you’re likely to need a Self Assessment tax return for 2026/27",
  "When Making Tax Digital for Income Tax could start for you",
  "Whether the new property income tax rates from April 2027 affect you",
];

const TABS = [
  { name: "Start here", body: "What the checker does, how to use it, and the GOV.UK sources." },
  { name: "Inputs", body: "Overwrite the sample figures in the yellow cells: where you live (Scottish or UK rates), salary, pension, student loan plan, and any side-hustle or rental income." },
  { name: "Results", body: "Your take-home pay and your side-income checks, updated as you type." },
  { name: "What next?", body: "Links to the UkMoneySheets tracker that fits your situation." },
];

const NOT_COVERED = [
  "Savings interest and dividend income",
  "Marriage Allowance and Gift Aid",
  "The High Income Child Benefit Charge",
  "Losses and benefits in kind",
  "More than one job — it assumes your salary is your only job",
  "Payslip-by-payslip accuracy — it works on annual figures",
];

const FULL_VERSIONS = [
  {
    title: "UK Salary / Monthly Budget",
    body: "Turn your take-home pay into a monthly plan.",
    href: "https://www.etsy.com/listing/4460132151",
  },
  {
    title: "UK Side Hustle Tax Spreadsheet",
    body: "Log side-hustle sales, expenses and mileage for Self Assessment (SA103).",
    href: "https://www.etsy.com/listing/4533504008",
  },
  {
    title: "Self Assessment 2025/26",
    body: "Get last year’s side-hustle figures ready for the 31 January 2027 deadline.",
    href: "https://www.etsy.com/listing/4462593252",
  },
  {
    title: "UK Landlord Spreadsheet",
    body: "Track rent, expenses and mortgage interest for your Self Assessment figures.",
    href: "https://www.etsy.com/listing/4467684075",
  },
];

function FreeToolPage() {
  return (
    <>
      <section className="border-b border-line bg-mint/40">
        <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
          <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
            Free Google Sheet · No email needed
          </p>
          <h1 className="mt-3 font-display text-[2.15rem] leading-[1.12] font-semibold tracking-[-0.03em] text-navy sm:text-5xl">
            {FREE_TOOL.name}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Enter your salary, pension, student loan plan and any side-hustle or
            rental income. The sheet estimates your take-home pay for the
            2026/27 tax year, and what you keep from your side income after tax.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a
                href={FREE_TOOL.copyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Make your free copy
                <ArrowUpRight />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href={FREE_TOOL.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Eye />
                Preview the sheet
              </a>
            </Button>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Making a copy needs a free Google account. The copy goes into your
            own Google Drive, and nothing you type is shared.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <section>
          <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-navy">
            What it tells you
          </h2>
          <ul className="mt-5 space-y-3">
            {TELLS_YOU.map((item) => (
              <li key={item} className="flex gap-3 text-[1.02rem] leading-relaxed text-body">
                <Check className="mt-1 size-4 shrink-0 text-teal" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-navy">
            How it works
          </h2>
          <p className="mt-3 text-[1.02rem] leading-relaxed text-muted">
            Four tabs. It takes about two minutes.
          </p>
          <ol className="mt-5 space-y-4">
            {TABS.map((tab, i) => (
              <li key={tab.name} className="rounded-xl bg-paper px-5 py-4 hairline">
                <p className="font-semibold text-navy">
                  {i + 1}. {tab.name}
                </p>
                <p className="mt-1 text-[0.98rem] leading-relaxed text-muted">
                  {tab.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-navy">
            What it doesn’t cover
          </h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-[1.02rem] leading-relaxed text-body">
            {NOT_COVERED.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <div className="mt-12 rounded-xl border border-line bg-paper px-6 py-6 sm:px-7">
          <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
            Not tax advice
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            A planning tool that gives estimates, using 2026/27 rates checked
            against GOV.UK on 8 October 2026. It isn’t tax or financial advice:
            your payslip, HMRC and your tax return are what count. Check{" "}
            <a
              href="https://www.gov.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              GOV.UK
            </a>{" "}
            or a qualified adviser before you act.
          </p>
        </div>
      </div>

      <section className="border-t border-line bg-paper/70">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
            Paid Google Sheets on Etsy
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-navy">
            Want the full version?
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FULL_VERSIONS.map((item) => (
              <article
                key={item.href}
                className="flex flex-col rounded-xl bg-paper p-6 hairline"
              >
                <h3 className="font-display text-xl font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-[0.98rem] leading-relaxed text-muted">
                  {item.body}
                </p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-11 items-center gap-1.5 self-start text-sm font-semibold text-teal no-underline"
                >
                  View on Etsy
                  <ArrowUpRight className="size-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
