import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-8 shrink-0", className)}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill="#062638" />
      <rect x="6" y="7" width="20" height="18" rx="3" fill="#DDEDE7" />
      <rect x="6" y="7" width="20" height="5" rx="3" fill="#08616A" />
      <rect x="6" y="10" width="20" height="2" fill="#08616A" />
      <path
        d="M12.5 7v18M19.5 12v13M6 16.5h20M6 21.5h20"
        stroke="#062638"
        strokeWidth="1"
        opacity="0.35"
      />
      <path
        d="M9.2 9.1h2.2c.55 0 .9.22.9.68 0 .32-.18.54-.5.63v.04c.4.1.62.35.62.74 0 .52-.4.81-1.02.81H9.2V9.1Zm1.05 1.85h.95c.28 0 .44-.14.44-.36s-.16-.35-.46-.35h-.93v.71Zm0 1.55h1.08c.32 0 .5-.16.5-.4 0-.24-.18-.39-.52-.39h-1.06v.79Z"
        fill="#FAF8F1"
      />
    </svg>
  );
}

export function SiteLogo({
  compact = false,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <Link
      to="/"
      className={cn(
        "group flex items-center gap-3 text-navy no-underline",
        className,
      )}
    >
      <LogoMark />
      <span className="flex min-w-0 flex-col">
        <span className="font-display text-[1.45rem] leading-none font-semibold tracking-[-0.03em]">
          UkMoneySheets
        </span>
        {compact ? null : (
          <span className="mt-1 hidden text-[0.72rem] leading-snug text-muted sm:block">
            Google Sheets for UK tax, salaries and savings
          </span>
        )}
      </span>
    </Link>
  );
}
