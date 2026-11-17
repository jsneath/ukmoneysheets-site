import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type FreeDownloadProps = {
  title: string;
  body: string;
  buttonLabel: string;
  href: string;
  smallPrint: string;
  className?: string;
};

/** Optional free Google Sheets download box, used near the top of a guide. */
export function FreeDownloadBox({
  title,
  body,
  buttonLabel,
  href,
  smallPrint,
  className,
}: FreeDownloadProps) {
  return (
    <aside
      className={cn(
        "free-download not-prose my-8 rounded-xl border border-teal/30 bg-mint/60 px-6 py-6 sm:px-7",
        className,
      )}
      aria-label="Free download"
    >
      <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
        Free download
      </p>
      <h2 className="mt-2 font-display text-2xl leading-snug font-semibold tracking-[-0.02em] text-navy">
        {title}
      </h2>
      <p className="mt-2 max-w-2xl text-[0.98rem] leading-relaxed text-muted">
        {body}
      </p>
      <Button
        asChild
        className="mt-5 h-auto min-h-11 max-w-full py-2.5 text-center whitespace-normal"
      >
        <a href={href} target="_blank" rel="noopener noreferrer">
          {buttonLabel}
          <ArrowUpRight />
        </a>
      </Button>
      <p className="mt-3 text-sm text-muted">{smallPrint}</p>
    </aside>
  );
}
