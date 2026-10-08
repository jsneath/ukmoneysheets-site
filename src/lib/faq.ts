import { parseMarkdown } from "@/components/markdown";

export type FaqItem = { question: string; answer: string };

/** Strip inline markdown (links, bold, italic, code) to plain text. */
function plain(text: string) {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

/** Q&As from an article's "## FAQ" section (### question + following blocks). */
export function faqFromArticle(source: string): FaqItem[] {
  const blocks = parseMarkdown(source);
  const start = blocks.findIndex((b) => b.type === "h2" && /^faq$/i.test(b.text));
  if (start === -1) return [];
  const items: FaqItem[] = [];
  let current: { question: string; parts: string[] } | null = null;
  const flush = () => {
    if (current && current.parts.length) {
      items.push({ question: plain(current.question), answer: plain(current.parts.join(" ")) });
    }
  };
  for (const block of blocks.slice(start + 1)) {
    if (block.type === "h2") break;
    if (block.type === "h3") {
      flush();
      current = { question: block.text, parts: [] };
      continue;
    }
    if (!current) continue;
    if (block.type === "p" || block.type === "quote") current.parts.push(block.text);
    else if (block.type === "ul" || block.type === "ol") current.parts.push(block.items.join("; "));
  }
  flush();
  return items;
}

/** FAQPage JSON-LD script for TanStack `head().scripts`. */
export function faqJsonLdScript(source: string) {
  const items = faqFromArticle(source);
  if (items.length === 0) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  return {
    type: "application/ld+json",
    // Escape "<" so answer text can never close the script tag.
    children: JSON.stringify(data).replace(/</g, "\\u003c"),
  };
}
