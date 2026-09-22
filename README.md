# UkMoneySheets site

SEO/AEO guide site for **UkMoneySheets** — calm UK money articles that soft-sell the [Etsy shop](https://www.etsy.com/shop/UkMoneySheets). Templates are **Google Sheets** (not Excel).

Stack: **Vite + TanStack Router/Start + TypeScript** (Style B: ivory / navy / teal / mint). Deployed on Vercel (Nitro preset).

## Commands

```bash
npm install
npm run dev       # local preview (http://localhost:8080)
npm run build     # production build (Vite / Nitro → Vercel output)
npm run preview   # serve the production build
npm run db:migrate  # optional; skips when DATABASE_URL is unset
```

## Guides

Guide metadata lives in `src/lib/guides.ts`. Article bodies are in `src/lib/articles/*`. Routes:

- `/guides` — index
- `/guides/$slug` — individual guide

Old Astro trailing-slash URLs (`/guides/<slug>/`) redirect via `vercel.json`.

## Auth / DB scaffold

The Grok Build scaffolding includes Better Auth + PGLite/migrations. This content site keeps **`VITE_AUTH_ENABLED=false`** (see `.env.production`). `npm run build` does **not** run migrations; use `npm run db:migrate` only if you later enable a database.

Do not invent testimonials, sales counts, or review scores in copy.

## Disclaimers

Footer and guide intros stress that content is **not tax/financial/mortgage advice**. Point readers to [GOV.UK](https://www.gov.uk) and [MoneyHelper](https://www.moneyhelper.org.uk/en).
