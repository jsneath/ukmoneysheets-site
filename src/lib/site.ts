export const SITE = {
  name: "UkMoneySheets",
  tagline: "Google Sheets for UK tax, salaries and savings.",
  description:
    "Calm Google Sheets templates and free guides for UK tax, salaries, household bills and savings. Built for British tax years, GBP and council tax — not US Excel worksheets.",
  metaDescription:
    "UK Google Sheets for tax, salaries and savings. Free guides plus calm templates for British tax years, GBP and council tax.",
  shopUrl: "https://www.etsy.com/shop/UkMoneySheets",
  location: "Built in Kent",
  url: "https://www.ukmoneysheets.co.uk",
  /** Default social card (home, /guides, guides without a per-page image). */
  ogImage: "/og.jpg",
  ogImageAlt: "Simple Google Sheets for UK money — UkMoneySheets Google Sheets guide",
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
  image,
  imageAlt,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  /** Absolute URL or site-root path for og:image / twitter:image. */
  image?: string;
  imageAlt?: string;
}) {
  const url = path === "/" ? SITE.url : absoluteUrl(path);
  const imagePath = image ?? SITE.ogImage;
  const imageUrl = imagePath.startsWith("http")
    ? imagePath
    : absoluteUrl(imagePath);
  const alt = imageAlt ?? SITE.ogImageAlt;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:image", content: imageUrl },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: alt },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
