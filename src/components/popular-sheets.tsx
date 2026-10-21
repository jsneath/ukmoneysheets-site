import { ArrowUpRight } from "lucide-react";
import { etsyLink } from "@/lib/site";

const POPULAR_SHEETS = [
  {
    title: "UK Monthly Budget",
    href: "https://www.etsy.com/listing/4460132151",
    image: "/guides/uk-monthly-budget-google-sheets.jpg",
    imageAlt: "UK monthly budget in Google Sheets: Google Sheets dashboard preview, sample data",
  },
  {
    title: "Side Hustle Tax 2026/27",
    href: "https://www.etsy.com/listing/4533504008",
    image: "/guides/uk-self-assessment-side-hustle-sa103.jpg",
    imageAlt: "Side hustle records for SA103: Google Sheets dashboard preview, sample data",
  },
  {
    title: "Christmas Savings Tracker",
    href: "https://www.etsy.com/listing/4568011416",
    image: "/guides/uk-christmas-savings-tracker.jpg",
    imageAlt: "Christmas savings tracker: Google Sheets dashboard preview, sample data",
  },
  {
    title: "UK Landlord",
    href: "https://www.etsy.com/listing/4467684075",
    image: "/guides/uk-landlord-section-24.jpg",
    imageAlt: "Landlord records for Self Assessment: Google Sheets dashboard preview, sample data",
  },
];

export function PopularSheets() {
  return (
    <div aria-label="Popular sheets" role="region">
      <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
        Popular sheets
      </p>
      <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.03em] text-navy">
        Ready-made UK Google Sheets
      </h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {POPULAR_SHEETS.map((sheet) => (
          <a
            key={sheet.href}
            href={etsyLink(sheet.href)}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-xl border border-line bg-paper no-underline transition-colors hover:bg-mint"
          >
            <img
              src={sheet.image}
              alt={sheet.imageAlt}
              width={960}
              height={960}
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
            <div className="flex items-center justify-between gap-2 p-4">
              <h3 className="font-display text-lg font-semibold text-navy">{sheet.title}</h3>
              <ArrowUpRight className="size-4 shrink-0 text-teal" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
