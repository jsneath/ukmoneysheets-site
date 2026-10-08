import { SITE, absoluteUrl } from "@/lib/site";

/**
 * Optional square photo for /about. Leave null to render no photo slot.
 * To add one later: put a square image at public/about/james.jpg and set
 *   export const ABOUT_PHOTO = { src: "/about/james.jpg", alt: "…" };
 */
export const ABOUT_PHOTO: { src: string; alt: string } | null = null;

/** Approved copy: brand/2026-10-08-about-james-copy.md, section 3 (verbatim). */
export const ABOUT_COPY = {
  title: "About UkMoneySheets",
  h1: "Hi, I'm James",
  body: [
    "I've worked in finance for 18 years, and spreadsheets became a slight obsession in my job. Over time I used the same approach for my own money, with spreadsheets I kept coming back to every month.",
    "Friends and family started asking me for budget advice, and I'd share the sheets I actually use. That led me to make them properly, for anyone in the UK to use. Most of the UkMoneySheets templates are ones I use personally; a few others are sheets I believe will be truly helpful to many more people.",
    "Why UK-only? Most templates online are American. UK money runs on different rules: tax years from 6 April, Self Assessment, council tax, ISAs and the Lifetime ISA. Every sheet here is built around those.",
    "The free guides on this site explain the rules in plain English, with links to GOV.UK. They're general information, not financial or tax advice.",
  ],
  /** Closing line from James (via SEO, 8 Oct 2026), verbatim; sits just before the Etsy button. */
  closing:
    "Thank you for checking out my page. If you have any questions about a sheet, before or after you buy, just message me through Etsy and I'll help you get set up.",
  ctaLabel: "Browse the templates on Etsy",
  ctaUrl: SITE.shopUrl,
  /** Author box shown at the bottom of every guide (section 3, verbatim). */
  authorBox:
    "UkMoneySheets is run by James, who has worked in finance for 18 years and builds UK budgeting and tax spreadsheets he uses himself. General information, not financial or tax advice.",
  authorBoxLink: "About James",
} as const;

export const ORG_ID = `${SITE.url}/#organization`;
export const PERSON_ID = `${absoluteUrl("/about")}#james`;

/** Organization + Person (+ AboutPage) JSON-LD for /about. No job title or adviser claims. */
export function aboutJsonLdScript() {
  const aboutUrl = absoluteUrl("/about");
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: SITE.name,
        url: SITE.url,
        sameAs: [SITE.shopUrl],
        founder: { "@id": PERSON_ID },
      },
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: "James",
        url: aboutUrl,
        worksFor: { "@id": ORG_ID },
      },
      {
        "@type": "AboutPage",
        "@id": `${aboutUrl}#webpage`,
        url: aboutUrl,
        name: ABOUT_COPY.title,
        about: { "@id": ORG_ID },
        mainEntity: { "@id": PERSON_ID },
      },
    ],
  };
  return {
    type: "application/ld+json",
    children: JSON.stringify(data).replace(/</g, "\\u003c"),
  };
}
