import { Markdown, parseMarkdown } from "@/components/markdown";
import type { GuideMeta } from "@/lib/guides";

type InGuide = NonNullable<GuideMeta["inGuideImages"]>;

function Figure({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <figure className="my-8 overflow-hidden rounded-xl border border-line bg-paper">
      <img
        src={src}
        alt={alt}
        width={1200}
        height={800}
        loading="lazy"
        decoding="async"
        className="h-auto w-full max-w-full"
      />
    </figure>
  );
}

function isChecklistHeading(text: string) {
  return /checklist|what to (track|log|keep)|before you overpay|plan your house|plan christmas|registering for self|set up your monthly|^add it up:|^work it out:/i.test(
    text,
  );
}

function isFallbackAnchor(text: string) {
  return /how the ukmoneysheets|soft next step|^faq$/i.test(text);
}

/**
 * Renders guide markdown and inserts Nia's in-guide figures:
 * after the intro (leading quote / paragraphs before the first H2),
 * and just before a checklist-like H2 (or a late-article fallback).
 */
export function GuideBody({
  source,
  images,
}: {
  source: string;
  images?: InGuide;
}) {
  if (!images) {
    return <Markdown source={source} />;
  }

  const blocks = parseMarkdown(source);

  let introEnd = 0;
  while (introEnd < blocks.length && blocks[introEnd]?.type !== "h2") {
    introEnd += 1;
  }
  if (introEnd === 0) introEnd = Math.min(1, blocks.length);

  let checklistAt = blocks.findIndex(
    (b, i) => i >= introEnd && b.type === "h2" && isChecklistHeading(b.text),
  );
  if (checklistAt === -1) {
    checklistAt = blocks.findIndex(
      (b, i) => i >= introEnd && b.type === "h2" && isFallbackAnchor(b.text),
    );
  }
  if (checklistAt === -1) {
    checklistAt = Math.max(introEnd + 1, Math.floor(blocks.length * 0.55));
  }

  // Render via Markdown by reconstructing with HTML markers — simpler to map
  // blocks through the same Markdown renderer pieces.
  return (
    <div className="prose-guide">
      <MarkdownBlocks blocks={blocks.slice(0, introEnd)} />
      <Figure src={images.afterIntro.src} alt={images.afterIntro.alt} />
      <MarkdownBlocks blocks={blocks.slice(introEnd, checklistAt)} />
      <Figure
        src={images.nearChecklist.src}
        alt={images.nearChecklist.alt}
      />
      <MarkdownBlocks blocks={blocks.slice(checklistAt)} />
    </div>
  );
}

function MarkdownBlocks({
  blocks,
}: {
  blocks: ReturnType<typeof parseMarkdown>;
}) {
  if (blocks.length === 0) return null;
  // Re-serialize minimal markdown so existing Markdown component handles
  // inline links/emphasis consistently.
  const source = blocks
    .map((block) => {
      switch (block.type) {
        case "h2":
          return `## ${block.text}`;
        case "h3":
          return `### ${block.text}`;
        case "p":
          return block.text;
        case "quote":
          return `> ${block.text}`;
        case "ul":
          return block.items.map((i) => `- ${i}`).join("\n");
        case "ol":
          return block.items.map((i, n) => `${n + 1}. ${i}`).join("\n");
        case "hr":
          return "---";
        case "table": {
          const head = `| ${block.headers.join(" | ")} |`;
          const sep = `| ${block.headers.map(() => "---").join(" | ")} |`;
          const rows = block.rows
            .map((r) => `| ${r.join(" | ")} |`)
            .join("\n");
          return `${head}\n${sep}\n${rows}`;
        }
      }
    })
    .join("\n\n");
  return <Markdown source={source} />;
}

