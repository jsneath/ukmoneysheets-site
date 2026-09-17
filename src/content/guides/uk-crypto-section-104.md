---
title: "UK Crypto Portfolio Tracker: What to Log for Section 104 and CGT"
description: "To prepare for UK Capital Gains Tax on crypto, log every acquisition and disposal in sterling — date, asset, quantity, GBP value, and fees — so you can support Section 104 pooling and same-day / 30-day matching when you work out gains."
---

*This article is general information about record-keeping, not personalised tax advice. Cryptoasset and CGT rules can change. Check live guidance on [GOV.UK](https://www.gov.uk) or speak to a qualified adviser before you file. A spreadsheet does not file your return or produce an HMRC-guaranteed calculation.*

---

## Who this is for

This is for UK individuals who buy, sell, swap, or otherwise **dispose of** cryptoassets and may need to consider **Capital Gains Tax (CGT)**.

You want organised records in **Google Sheets**, not a US Form 8949 template — and you know exchanges alone rarely hand you a complete UK-ready history.

This is not aimed at crypto trading as a business (which can be Income Tax territory) or at companies. If your activity is frequent or complex, get advice early.

---

## What HMRC expects you to keep

Start with the official cryptoassets guidance:

- [Check if you need to pay tax when you sell cryptoassets](https://www.gov.uk/guidance/check-if-you-need-to-pay-tax-when-you-sell-cryptoassets)
- [HMRC Cryptoassets Manual — pooling (Section 104)](https://www.gov.uk/hmrc-internal-manuals/cryptoassets-manual/crypto22200)
- [Capital Gains Tax allowances](https://www.gov.uk/capital-gains-tax/allowances)
- [Work out if you need to pay CGT](https://www.gov.uk/capital-gains-tax/work-out-need-to-pay)
- [Report and pay Capital Gains Tax](https://www.gov.uk/report-and-pay-your-capital-gains-tax)

GOV.UK’s cryptoassets guidance explains that for each pool of tokens you should keep separate records of transactions, including type of tokens, dates, quantities, sterling values, bank evidence, and pooled costs before and after disposals.

You may need to report and pay CGT when your taxable gains for the tax year sit above the annual exempt amount — and there are also rules about reporting based on disposal proceeds even when gains look small. **Do not guess.** Use the live GOV.UK pages for the current allowance, rates, and reporting triggers. At the time of writing, GOV.UK’s allowances page shows an annual exempt amount of **£3,000** for individuals — re-check before you rely on that figure.

Disposals are not only “sold for cash.” GOV.UK’s crypto guidance covers selling, exchanging, using tokens to pay for goods or services, and giving them away (other than to a spouse or civil partner in many cases). Confirm the current list on GOV.UK.

---

## Section 104 pooling in plain English

For many interchangeable tokens, HMRC treats holdings of the **same type** as a **Section 104 pool**: one pool per token type (for example separate pools for bitcoin and ether), each with a **pooled allowable cost**.

At a high level (always follow GOV.UK / the Cryptoassets Manual for the real rules):

- When you **acquire** tokens of that type (and matching rules do not pull them elsewhere), you add quantity and cost to the pool
- When you **dispose** of tokens from the pool, you take a **proportion** of the pooled cost as your allowable cost for that disposal
- **Same-day** acquisitions of the same type are matched to same-day disposals before the pool
- Acquisitions within the following **30 days** can be matched to earlier disposals under the 30-day rule before remaining amounts hit the pool

Those matching rules exist so you cannot always pick which lot you sold. Your job in a tracker is to capture **every** line with enough detail that you (or your accountant / specialist software) can apply the rules later.

This article does **not** walk every edge case (hard forks, airdrops, DeFi, NFTs treated differently, lost keys). Use HMRC’s manual and professional help when the facts get unusual.

---

## Minimum columns to log

One row per transaction (or per fill if you split trades):

1. **Date and time** (UTC and UK date if that helps you)
2. **Asset** (e.g. BTC, ETH — one pool per type)
3. **Side** — buy / sell / swap in / swap out / transfer / fee in token
4. **Quantity**
5. **Value in GBP** at the time (GOV.UK expects sterling)
6. **Fees in GBP** (and note if the fee was paid in crypto)
7. **Exchange or wallet**
8. **Tx id / trade id**
9. **Notes** (e.g. paired swap, airdrop, gift)

Optional but useful: running quantity held per asset, GBP cost added to pool (for your own estimate), and a flag for “needs accountant review.”

**Worked mini-example (fictional only — not a real CGT computation):**

| Date | Asset | Side | Quantity | GBP value | Fees (£) | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| 10 May 2025 | ETH | Buy | 1.0 | 2,000 | 5 | Card purchase |
| 2 Aug 2025 | ETH | Buy | 0.5 | 1,100 | 3 | Exchange |
| 20 Jan 2026 | ETH | Sell | 0.4 | 1,000 | 4 | To GBP |

Sam’s sheet preserves the history. Working out the gain still needs same-day / 30-day checks and Section 104 pooling per GOV.UK — the log is the evidence, not the filed computation.

---

## Why exchange CSVs alone are messy

Exports help, but they often:

- Miss transfers between your own wallets
- Show quotes in USD or omit a clean GBP rate
- Split one economic swap into confusing legs
- Ignore NFTs, chain fees, or off-exchange peer trades
- Duplicate or drop rows when you use several venues

A personal tracker (or specialist UK crypto tax software) is where you reconcile CSVs into one sterling timeline. Keep the raw CSVs anyway — they are part of your evidence pack.

---

## How the UkMoneySheets crypto tracker fits

[UkMoneySheets](https://www.etsy.com/shop/UkMoneySheets) sells a **UK Crypto Portfolio Tracker 2025/26 | Section 104 Estimate | Google Sheets**.

It is Google Sheets (not Excel), delivered typically via a PDF with a Sheets link so you can **File → Make a copy**.

Important honesty:

- It is a **record / estimate helper**, not a product that files CGT for you
- It does **not** replace HMRC rules, the Cryptoassets Manual, or an adviser
- Complex histories may still need specialist crypto tax software or an accountant

Shop: [etsy.com/shop/UkMoneySheets](https://www.etsy.com/shop/UkMoneySheets)

---

## FAQ

### Do I always pay CGT when I sell crypto?

Not always. It depends on your gains, losses, and the current annual exempt amount and reporting rules. Check [GOV.UK’s cryptoassets tax guidance](https://www.gov.uk/guidance/check-if-you-need-to-pay-tax-when-you-sell-cryptoassets) and [CGT allowances](https://www.gov.uk/capital-gains-tax/allowances).

### What is Section 104 in one sentence?

A way of pooling the cost of interchangeable tokens of the same type so disposals take a proportionate share of pooled allowable cost — subject to same-day and 30-day matching. See [CRYPTO22200](https://www.gov.uk/hmrc-internal-manuals/cryptoassets-manual/crypto22200).

### Can a Google Sheet file my CGT?

No. A sheet stores and organises data. You (or your adviser / software) still apply the law and report through the channels GOV.UK describes.

### Is this tax advice?

No. Education and organisation only.

---

## Soft next step

Export every exchange CSV you can find. Start one sterling transaction log with the columns above. Back up wallet addresses and tx ids.

If you want a UK-oriented Google Sheets layout aimed at portfolio logging and Section 104-style estimates, get the **UK Crypto Portfolio Tracker** from [UkMoneySheets on Etsy](https://www.etsy.com/shop/UkMoneySheets), make your own copy, and treat every calculated gain as an estimate until checked against GOV.UK.

---

*Disclaimer: Not tax advice. CGT rates, allowances, and cryptoasset rules can change — GOV.UK is the source of truth. Product names and shop links may change; confirm the live Etsy listing before purchase. The sheet does not file CGT or guarantee HMRC-accepted calculations.*
