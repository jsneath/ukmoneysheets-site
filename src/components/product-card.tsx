import { ArrowUpRight, Check } from "lucide-react";
import { etsyLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ProductCard({
  name,
  image,
  imageAlt,
  href,
  className,
}: {
  name: string;
  image: string;
  imageAlt: string;
  href: string;
  className?: string;
}) {
  return (
    <aside
      className={cn(
        "not-prose my-10 grid items-center gap-5 overflow-hidden teal-band lift fade-up relative rounded-xl p-4 sm:grid-cols-[180px_1fr] sm:p-5",
        className,
      )}
    >
      <img
        src={image}
        alt={imageAlt}
        width={360}
        height={360}
        loading="lazy"
        decoding="async"
        className="aspect-square w-full rounded-lg bg-paper object-cover object-top hairline"
      />
      <div>
        <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-mint uppercase">
          Google Sheets template
        </p>
        <p className="mt-1 font-display text-2xl leading-tight font-semibold text-ivory">
          {name}
        </p>
        <ul className="mt-3 space-y-1 text-sm text-mint [&_li]:text-mint">
          {["Instant download", "Make a copy into your Drive", "Example data to start"].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <Check className="size-4 text-ivory" strokeWidth={2.5} />
              {t}
            </li>
          ))}
        </ul>
        <a
          href={etsyLink(href)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex min-h-11 items-center gap-1.5 rounded-full bg-ivory px-5 text-sm font-semibold text-teal-deep no-underline hover:bg-mint"
        >
          Get it on Etsy
          <ArrowUpRight className="size-4" />
        </a>
      </div>
    </aside>
  );
}
