import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  OPEN_COOKIE_SETTINGS_EVENT,
  readConsent,
  saveConsent,
  type ConsentChoice,
} from "@/lib/analytics";

const BUTTON =
  "inline-flex h-10 min-w-[6.5rem] flex-1 items-center justify-center rounded-lg border border-teal bg-ivory px-4 text-[0.95rem] font-semibold text-teal transition-colors hover:bg-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-ivory sm:flex-none";

/**
 * Client-only cookie banner. Nothing renders on the server or on the first
 * client render, so there is no hydration mismatch.
 */
export function CookieBanner() {
  const [open, setOpen] = useState(false);
  const regionRef = useRef<HTMLDivElement>(null);
  const focusOnOpen = useRef(false);

  useEffect(() => {
    if (readConsent() === null) setOpen(true);
    const reopen = () => {
      focusOnOpen.current = true;
      setOpen(true);
    };
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen);
  }, []);

  useEffect(() => {
    if (open && focusOnOpen.current) {
      focusOnOpen.current = false;
      regionRef.current?.focus();
    }
  }, [open]);

  if (!open) return null;

  const choose = (choice: ConsentChoice) => {
    saveConsent(choice);
    setOpen(false);
  };

  return (
    <div
      ref={regionRef}
      role="region"
      aria-label="Cookie choice"
      tabIndex={-1}
      data-cookie-banner
      className="fixed inset-x-3 bottom-3 z-50 rounded-xl border border-teal/30 bg-ivory p-4 text-navy shadow-[0_6px_24px_rgba(3,36,62,0.14)] outline-none sm:inset-x-auto sm:left-5 sm:bottom-5 sm:max-w-md"
    >
      <p className="text-[0.92rem] leading-snug text-navy">
        We'd like to use Google Analytics cookies to see which pages help.
        They're only set if you accept.{" "}
        <Link
          to="/privacy"
          hash="cookies"
          className="font-medium text-teal underline underline-offset-2"
        >
          Privacy &amp; cookies
        </Link>
      </p>
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          className={BUTTON}
          onClick={() => choose("granted")}
        >
          Accept
        </button>
        <button
          type="button"
          className={BUTTON}
          onClick={() => choose("denied")}
        >
          Reject
        </button>
      </div>
    </div>
  );
}
