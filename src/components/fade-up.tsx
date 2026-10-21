import { useEffect } from "react";

/** Adds a gentle fade-up to `.fade-up` elements as they scroll into view.
 *  Content is fully visible without JS (SSR) and with reduced motion. */
export function FadeUpObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>(".fade-up"));
    const vh = window.innerHeight;
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < vh) el.classList.add("is-in");
    });
    document.documentElement.classList.add("js-fade");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => !el.classList.contains("is-in") && io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
