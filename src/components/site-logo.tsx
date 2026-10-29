import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src="/brand/leaf-logo.png"
      alt=""
      width={32}
      height={32}
      className={cn("size-8 shrink-0 object-contain", className)}
      aria-hidden="true"
    />
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
          UKMoneySheets
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
