export const SITE = {
  name: "UkMoneySheets",
  tagline: "Google Sheets for UK tax, salaries and savings.",
  description:
    "Calm Google Sheets templates and free guides for UK tax, salaries, household bills and savings. Built for British tax years, GBP and council tax — not US Excel worksheets.",
  metaDescription:
    "UK Google Sheets for tax, salaries and savings. Free guides plus calm templates for British tax years, GBP and council tax.",
  shopUrl: "https://www.etsy.com/shop/UkMoneySheets",
  location: "Built in Kent",
  url: "https://ukmoneysheets-site.vercel.app",
} as const;

export const NAV = [
  { label: "Guides", to: "/guides" },
] as const;

export function absoluteUrl(path = "/") {
  const normalised = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${normalised === "/" ? "" : normalised}` || SITE.url;
}

/** Shared head meta + canonical for TanStack Start routes. */
export function pageHead({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}) {
  const url = path === "/" ? SITE.url : absoluteUrl(path);
  const image = `${SITE.url}/og.jpg`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
