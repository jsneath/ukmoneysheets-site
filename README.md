# UkMoneySheets site

SEO/AEO guide site for **UkMoneySheets** — calm UK money articles that soft-sell the [Etsy shop](https://www.etsy.com/shop/UkMoneySheets). Templates are **Google Sheets** (not Excel).

Stack: **Astro 4** (static), `@astrojs/sitemap`, Markdown content collections.

## Commands

```bash
npm install
npm run dev      # local preview (http://localhost:4321)
npm run build    # production build → dist/
npm run preview  # serve the production build
```

## Project layout

```
src/
  content/guides/   # Markdown guides (frontmatter: title, description)
  pages/            # Routes
  layouts/          # BaseLayout (meta, header, footer)
  components/       # SoftCta, etc.
  styles/           # global.css
public/             # robots.txt, favicon
```

Site URL used for canonical links and sitemap: set in `astro.config.mjs` (`site`).

## How to add a guide

1. Create a new file in `src/content/guides/` with a kebab-case slug, e.g. `uk-emergency-fund.md`.
2. Add YAML frontmatter:

   ```md
   ---
   title: "Your guide title"
   description: "One or two sentences for meta description and cards."
   ---

   Body content in Markdown…
   ```

3. The guide appears automatically at `/guides/<slug>/` and on the guides index.
4. Run `npm run build` to confirm it builds.

Do not invent testimonials, sales counts, or review scores in copy.

## Disclaimers

Footer and guide intros stress that content is **not tax/financial/mortgage advice**. Point readers to [GOV.UK](https://www.gov.uk) and [MoneyHelper](https://www.moneyhelper.org.uk/en).
