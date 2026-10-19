/**
 * Google Analytics 4 with Google Consent Mode v2.
 *
 * Everything defaults to "denied" before gtag config runs, so no analytics
 * cookies (_ga, _ga_*) are set until the visitor clicks Accept in the cookie
 * banner. Accept only grants analytics_storage; the ad signals stay denied.
 * The visitor's choice is kept in localStorage (no cookie needed for it).
 */
export const GA_MEASUREMENT_ID = "G-7Q1NVER710";
export const CONSENT_STORAGE_KEY = "ums-cookie-consent";
export const OPEN_COOKIE_SETTINGS_EVENT = "ums:open-cookie-settings";

export type ConsentChoice = "granted" | "denied";

/**
 * Inline bootstrap, rendered in <head>. Order matters:
 * consent default -> (stored grant, if any) -> js -> config -> load gtag.js.
 */
export const GA_SCRIPT_SRC = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;

/**
 * gtag.js is injected from this same inline script (async) rather than as a
 * separate <script async src> tag, because React 19 hoists async src scripts
 * above inline ones. This keeps the consent default strictly first.
 */
export const GA_BOOTSTRAP = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});try{if(localStorage.getItem('${CONSENT_STORAGE_KEY}')==='granted'){gtag('consent','update',{analytics_storage:'granted'});}}catch(e){}gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}');var s=document.createElement('script');s.async=true;s.src='${GA_SCRIPT_SRC}';document.head.appendChild(s);`;

type GtagWindow = Window & { gtag?: (...args: unknown[]) => void };

export function readConsent(): ConsentChoice | null {
  try {
    const v = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function saveConsent(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  } catch {
    // Private mode etc.: choice just won't persist.
  }
  const gtag = (window as GtagWindow).gtag;
  if (!gtag) return;
  gtag("consent", "update", { analytics_storage: choice });
  if (choice === "denied") clearGaCookies();
}

/** If someone switches from Accept to Reject, remove any existing GA cookies. */
function clearGaCookies() {
  const host = window.location.hostname;
  const domains = ["", host, `.${host}`, `.${host.replace(/^www\./, "")}`];
  for (const c of document.cookie.split(";")) {
    const name = c.split("=")[0]?.trim();
    if (!name || !(name === "_ga" || name.startsWith("_ga_"))) continue;
    for (const d of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${d ? `; domain=${d}` : ""}`;
    }
  }
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT));
}
