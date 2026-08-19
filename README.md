# MMT Website

Marketing site for **MakeMyTechnology (MMT)** — a Deep Edu-Tech Center of
Excellence building independent product families across **5G/6G, IoT, AI,
robotics, and quantum-safe security**.

Live site: **https://www.makemytechnology.com**

---

## Stack

- **Next.js 15** (App Router) · React 19 · TypeScript
- **Tailwind CSS 3.4** with custom MMT design tokens (coral / navy / gold / sky)
- **Framer Motion 11** for scroll-reveal, marquee, beam borders
- **lucide-react** icons
- **Inter** (body) + **Plus Jakarta Sans** (display) via `next/font`
- **Vercel Web Analytics** (`@vercel/analytics`)
- **CSS-only rotor / aurora / marquee** animations (GPU-cheap, scroll-friendly)

---

## Routes

| Path | Purpose |
|---|---|
| `/` | Homepage — 6 platform cards, hero "Download the free Studio Core" card, "We're on YouTube" banner, tech marquee, "From the field" **setup slideshow** (workshop → PES → Sona) |
| `/5g-6g` | MMT 5G/6G Studio overview — the 6-product family grid + live-setup slideshow |
| `/5g-6g/studio-core` | Studio Core — 5G SA core in Python + C/DPDK · demo video · highlighted free open-source download (GitHub) · NF list · DNN domains |
| `/5g-6g/studio-nr-gnb` (URL slug `/5g-6g/studio-gnb`) | **Studio NR-gNB** — portable 5G Standalone base station · N78 · 4×4 MIMO · **3GPP Rel-16** |
| `/5g-6g/studio-testbench` | Studio TestBench — SA tester (gNB + UE emulator) · 202 cases · 19 Robot suites |
| `/5g-6g/studio-fleet` | Studio Fleet — Python / Flask orchestrator · 26 blueprints · 25 services |
| `/5g-6g/studio-field` | Studio Field — Kotlin / Jetpack Compose Android app · DIAG · 7-day Pro trial |
| `/5g-6g/studio-academy` | Studio Academy — AI-powered Django LMS · course player · live-equipment labs |
| `/gnu-radio` | **MMT-GNU Kit** — 210 SDR experiments · hero demo video · auto-playing overview deck · manual · flyer · **local-currency pricing** · free-SDR badge · enterprise/distributor CTAs |
| `/iot`, `/ai`, `/drone-corridor`, `/quantum` | In-development verticals |
| `/documents/[slug]` | In-site document viewer — PDFs render natively; DOCX via the Microsoft Office online viewer; each has a Download button (gNB spec, Studio manual, COTS manual, 5G syllabus) |
| `/contact` | Contact page — embedded **[Tally](https://tally.so)** form (Tally hosts it and emails submissions) with conditional logic + Get-in-touch sidebar (email, phone, hours, Follow us) |
| `/privacy`, `/terms` | Legal pages |

**"Contact us" is in the top navigation** and every page's footer links to it.

---

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

---

## Location-aware pricing (MMT-GNU Kit)

The GNU Kit price shows in the **visitor's local currency**, based on their real
IP location (via [ipwho.is](https://ipwho.is)). Indian / unknown visitors see the
base **₹** price; ~37 countries map to a local currency (USD, GBP, EUR, AED, SGD,
AUD, CAD, JPY, CHF, SAR, ZAR, and more). Converted amounts are **approximate** and
the rates are hardcoded in `src/lib/localCurrency.ts` (easy to refresh).

- Shared logic: `src/lib/localCurrency.ts`
- Home platform card: `src/components/CardPrice.tsx`
- GNU Kit hero price: `src/components/KitPrice.tsx`
- **Test override:** append `?cc=US` (or `GB`, `SG`, `DE`, …) to any URL to force a country.

---

## Regional language

The site is **translation-friendly** for the browser's built-in "Translate page"
feature: `lang="en"` is set as the source language, and the brand name is marked
`translate="no"`. Visitors can view the site in their own language via the
browser translate prompt (no in-app i18n / language switcher).

---

## Hosting — Vercel + GoDaddy domain

Deployed on **Vercel** with the GoDaddy domain pointed at it via DNS. Every push
to `main` auto-deploys. See `docs/HOSTING.md` for the full walk-through.

> ⚠️ **The GitHub repo must be public** on Vercel's Hobby plan — Hobby cannot
> deploy a **private** repo owned by a GitHub **organization**. Keep it public,
> upgrade to Vercel Pro, or move the repo to a personal account if you need it
> private.

**Canonical domain is `www`** — the non-www host 308-redirects to www, so
`metadataBase`, `sitemap.ts`, `robots.txt`, and the DOCX viewer origin all use
`https://www.makemytechnology.com`.

### Size budget for Vercel Hobby

| Limit | Value | Current usage |
|---|---|---|
| Single file in `public/` | 100 MB | Largest: `gnu-kit-demo.mp4` (~61 MB) ✓ |
| Bandwidth per month | 100 GB | Plenty for a B2B marketing site |
| Image optimisation (source images) | 1,000 | Comfortably under |
| Custom domains | Unlimited | Used: 1 |

**Do not commit files larger than 100 MB to `public/`.** The GNU demo video is
~61 MB — consider compressing large videos before adding more.

---

## Project layout

```
mmt-website/
├── public/                      Static assets served at site root
│   ├── logo.png                 MMT brand mark
│   ├── og-image.png             1200×630 social share image
│   ├── setup.jpg / setup-pes.jpg / setup-sona.jpg   Live-deployment slideshow
│   ├── studio-gnb.png           Portable gNB hardware shot
│   ├── gnu-*.png                MMT-GNU Kit UI screenshots (course, hardware, …)
│   ├── gnu-slides/              Exported overview deck (slide-01…12.png)
│   ├── gnu-kit-demo.mp4         GNU Kit hero demo video
│   ├── studio-core-demo.mp4     Studio Core / TestBench walkthrough
│   ├── studio-academy-*.jpg     Studio Academy screenshots
│   ├── docs/                    Downloadable docs (gNB spec, Studio manual,
│   │                            COTS manual, 5G syllabus)
│   ├── 5g-6g-studio-core.html   Studio Core solution doc
│   └── robots.txt
│
├── src/
│   ├── app/
│   │   ├── layout.tsx           Root layout · Header · Footer · fonts · Analytics
│   │   ├── page.tsx             Home
│   │   ├── 5g-6g/               Studio family pages (core, gnb, testbench, fleet, field, academy)
│   │   ├── gnu-radio/           MMT-GNU Kit
│   │   ├── iot/ ai/ ...         Vertical pages
│   │   ├── documents/[slug]/    In-site document viewer
│   │   ├── contact/             Tally form embed + sidebar
│   │   ├── privacy/ terms/      Legal pages
│   │   ├── sitemap.ts           Auto-generated sitemap.xml
│   │   └── globals.css          Tailwind layer + custom keyframes
│   │
│   ├── components/
│   │   ├── Header.tsx           Top nav (incl. "Contact us") + phone + email
│   │   ├── Footer.tsx           Get in touch + brand + LinkedIn/YouTube + Privacy/Terms
│   │   ├── VerticalCard.tsx     Home platform card (with local-currency CardPrice)
│   │   ├── StudioProductCard.tsx  Studio family card (whole-card link + doc button)
│   │   ├── SetupSlideshow.tsx   Auto-advancing live-setup slideshow
│   │   ├── SlideDeck.tsx        Auto-playing image deck (GNU overview)
│   │   ├── KitPrice.tsx / CardPrice.tsx  Local-currency price components
│   │   ├── DemoVideo.tsx        HTML5 video player + auto-unmute
│   │   ├── TiltCard.tsx         Card container with a hover lift (no 3-D tilt)
│   │   ├── PackageAnimations.tsx / BaseStationTower.tsx / Drone.tsx  SVG art
│   │   ├── Marquee.tsx / Counter.tsx / Reveal.tsx / Sparkles.tsx / AuroraBg.tsx / BeamBorder.tsx
│   │   └── Button.tsx / StatusPill.tsx
│   │
│   ├── content/                 Typed copy / data
│   │   ├── verticals.ts         Home platform cards (incl. GNU Kit priceInr)
│   │   ├── studio-products.ts   Studio family cards on /5g-6g
│   │   ├── documents.ts         Document-viewer registry
│   │   ├── gnu-radio.ts         GNU Kit content
│   │   ├── nfs.ts / dnns.ts / use-cases.ts / verticals-detail.ts / …
│   │
│   └── lib/
│       ├── localCurrency.ts     Country → currency + rates + IP lookup
│       └── utils.ts
│
├── next.config.mjs · tailwind.config.ts · tsconfig.json · package.json
```

**Marketing copy lives in typed TypeScript** under `src/content/` — edits are
one-file changes; push and Vercel redeploys.

---

## Documents

Downloadable docs live in `public/docs/` and are surfaced through the in-site
viewer at `/documents/[slug]` (registered in `src/content/documents.ts`):

- **PDFs** render inline in the browser's native viewer.
- **DOCX** render via the Microsoft Office online viewer (fetches the file from
  the public `www` URL — so DOCX previews only work on the deployed site, not
  `localhost`). The Download button always works.

---

## SEO — wired in

| Feature | Where |
|---|---|
| SSR (App Router) | All pages |
| Per-page title + description | Each page's `export const metadata` |
| Canonical URLs (**www**) | `metadata.alternates.canonical` |
| OpenGraph + Twitter cards + `og-image.png` | `src/app/layout.tsx` + `public/og-image.png` |
| Structured data (JSON-LD) | Organisation on `/`, Product on Studio sub-pages |
| `sitemap.xml` | `src/app/sitemap.ts` |
| `robots.txt` | `public/robots.txt` |
| Favicon + iOS icon | `src/app/icon.png` + `apple-icon.png` |
| `next/image` (AVIF/WebP) + `next/font` | Throughout |

**Google Search Console:** a **Domain property** (`sc-domain:makemytechnology.com`)
is verified via DNS (covers www + non-www); `sitemap.xml` is submitted.

---

## Contact

- **info@makemytechnology.com**
- **+91 63610 31970**
- LinkedIn: https://www.linkedin.com/company/makemytechnology
- YouTube: https://www.youtube.com/@bixbisystemspvtltd

---

## License

Copyright © 2026 MakeMyTechnology. All rights reserved.
