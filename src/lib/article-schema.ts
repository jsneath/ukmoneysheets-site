import { ORG_ID } from "@/lib/about";
import type { GuideMeta } from "@/lib/guides";
import { SITE, absoluteUrl } from "@/lib/site";

/** Article JSON-LD for a guide (only when `guide.articleSchema` is set). */
export function articleJsonLdScript(guide: GuideMeta) {
  if (!guide.articleSchema) return null;
  const url = absoluteUrl(`/guides/${guide.slug}`);
  const image = guide.ogImage ?? SITE.ogImage;
  const org = {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/brand/leaf-logo.png"),
    },
  };
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.metaDescription,
    image: image.startsWith("http") ? image : absoluteUrl(image),
    datePublished: guide.articleSchema.datePublished,
    dateModified: guide.articleSchema.dateModified,
    inLanguage: "en-GB",
    author: org,
    publisher: org,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
  return {
    type: "application/ld+json",
    // Escape "<" so text can never close the script tag.
    children: JSON.stringify(data).replace(/</g, "\\u003c"),
  };
}
