# MMT Website

Marketing site for **MakeMyTechnology (MMT)** — a deep-tech Center of Excellence in
Bengaluru, India, building independent product families across **5G/6G, IoT, AI,
robotics, and quantum-safe security**.

Live site: `https://makemytechnology.com` (after deployment)

---

## Stack

- **Next.js 15** (App Router) · React 19 · TypeScript
- **Tailwind CSS 3.4** with custom MMT design tokens (coral / navy / gold / sky)
- **Framer Motion 11** for scroll-reveal, tilt cards, marquee, beam borders
- **lucide-react** icons
- **Inter** (body) + **Plus Jakarta Sans** (display) via `next/font`
- **CSS-only rotor / aurora / marquee** animations (GPU-cheap, scroll-friendly)

---

## Routes

| Path | Purpose |
|---|---|
| `/` | Homepage — 5 vertical cards (5G/6G · IoT · AI · Robotics · Quantum), stats counter, tech marquee, "From the field" workshop photo, closing CTA |
| `/5g-6g` | Flagship — MMT 5G/6G Studio overview with the 6-product family grid + workshop showcase |
| `/5g-6g/studio-core` | Studio Core — 5G SA core in Python + C/DPDK · demo video · NF list · DNN service domains |
| `/5g-6g/studio-testbench` | Studio TestBench — SA tester (gNB + UE emulator) · 202 cases · 19 Robot suites |
| `/5g-6g/studio-fleet` | Studio Fleet — Python / Flask orchestrator · 26 blueprints · 25 services · 8 Robot libs |
| `/5g-6g/studio-field` | Studio Field — Kotlin / Jetpack Compose Android app · DIAG · 7-day Pro trial |
| `/iot`, `/ai`, `/drone-corridor`, `/quantum` | In-development verticals |
| `/contact` | Contact form (embedded [Tally](https://tally.so) form — Tally hosts it and emails submissions) + sidebar with email, phone, address, map |

`/contact` is intentionally **not** in the top navigation. It's reachable via every
SectionCTA and the "Talk to us" buttons.

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

## Hosting — Vercel + GoDaddy domain

The recommended deployment is **Vercel** (free Hobby tier) with the GoDaddy
domain pointed at it via DNS. See `docs/HOSTING.md` for the full walk-through.

**Quick version:**

1. Push this repo to GitHub.
2. Sign in to **vercel.com** with GitHub → "Add New Project" → import the repo.
3. Vercel auto-detects Next.js → Deploy. Site is live at `<project>.vercel.app`.
4. In Vercel → Project → Settings → Domains → add `makemytechnology.com`.
5. In GoDaddy → DNS → add the **A** + **CNAME** records Vercel shows.
6. ~30 min DNS propagation → SSL auto-issued → live at `https://makemytechnology.com`.

**Cost:** ₹0/month hosting · only the GoDaddy domain renewal (~₹1,200/year).

### Size budget for Vercel Hobby

| Limit | Value | Current usage |
|---|---|---|
| Single file in `public/` | 100 MB | Largest file: `setup.jpg` (20 MB) ✓ |
| Total deployment (compressed) | 100 MB | ~45 MB ✓ |
| Bandwidth per month | 100 GB | Plenty for a B2B marketing site |
| Function execution | 100 GB-hours | Contact form uses microseconds per call |
| Image optimisation (source images) | 1,000 | ~10 ✓ |
| Custom domains | Unlimited | Used: 1 |

**Do not check in files larger than 100 MB to `public/`** — Vercel will reject
the deployment. Use `.vercelignore` if you have a large file you need locally
but not on Vercel.

### When to upgrade to Vercel Pro

Pro is **$20/month per member**. You only need it when one of these is true:

- More than ~10,000 monthly visitors (bandwidth pressure)
- You want team members on the project
- You need the formal commercial-use licence (Hobby is technically personal-use)
- You want extras: password-protected previews, faster builds, web analytics > 2,500 events/mo

---

## Project layout

```
mmt-website/
├── public/                   Static assets served at site root
│   ├── logo.png              MMT brand mark
│   ├── setup.jpg             Workshop / field-deployment photo
│   ├── base-station.png      gNB hardware shot
│   ├── studio-core-demo.mp4  Studio Core walkthrough
│   ├── studio-fleet-demo.mp4 Studio Fleet walkthrough
│   ├── fleet-dashboard.png   Real COTS dashboard screenshot
│   ├── 5g-6g-studio-core.html  Solution doc (opens in new tab, print-to-PDF)
│   └── robots.txt
│
├── src/
│   ├── app/                  Next.js App Router pages + API
│   │   ├── layout.tsx        Root layout · Header · Footer · fonts
│   │   ├── page.tsx          Home — verticals first, stats, marquee, setup, CTA
│   │   ├── 5g-6g/            Studio family pages
│   │   ├── iot/ ai/ ...      Vertical pages
│   │   ├── contact/          Tally form embed + sidebar
│   │   ├── icon.png          Tab favicon (auto-injected by Next.js)
│   │   ├── apple-icon.png    iOS home-screen icon
│   │   ├── sitemap.ts        Auto-generated sitemap.xml for SEO
│   │   └── globals.css       Tailwind layer + custom keyframes
│   │
│   ├── components/           Shared UI
│   │   ├── Header.tsx        Top nav + phone + email + active-page indicator
│   │   ├── Footer.tsx        Address + Google Maps link
│   │   ├── VerticalCard.tsx  Five-up card grid card (flagship + 4 others)
│   │   ├── StudioProductCard.tsx  Studio family card
│   │   ├── BaseStationTower.tsx   Animated cell-tower SVG (with drone)
│   │   ├── Drone.tsx              DJI-style cartoon drone SVG
│   │   ├── PackageAnimations.tsx  Animated call-flow + LMS orchestration SVGs
│   │   ├── DemoVideo.tsx          HTML5 video player with native controls + auto-unmute
│   │   ├── TiltCard.tsx           3-D mouse-tilt wrapper
│   │   ├── BeamBorder.tsx         Animated conic-gradient card border
│   │   ├── AuroraBg.tsx           Drifting radial-gradient background
│   │   ├── Sparkles.tsx           Twinkling-dot overlay
│   │   ├── Marquee.tsx            Infinite-scroll tag strip
│   │   ├── Counter.tsx            Animated stat counter
│   │   └── Reveal.tsx             Scroll-triggered fade-in
│   │
│   ├── content/              Typed copy / data
│   │   ├── verticals.ts      Five vertical cards on the home page
│   │   ├── studio-products.ts  Studio family cards on /5g-6g
│   │   ├── nfs.ts            13 5G core NFs + 8 higher-layer services
│   │   ├── dnns.ts           8 DNN service domains
│   │   ├── use-cases.ts      ·
│   │   ├── verticals-detail.ts  IoT / AI / Robotics / Quantum page detail
│   │   ├── engagement-models.ts ·
│   │   ├── positioning.ts ·
│   │   ├── roadmap.ts ·
│   │   ├── security.ts ·
│   │   └── iot-use-cases.ts ·
│   │
│   └── lib/                  Small utilities
│
├── next.config.mjs           Next.js config
├── tailwind.config.ts        Design tokens (colours, fonts, spacing)
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

**Marketing copy lives in typed TypeScript** under `src/content/`. Editing
verticals / Studio products / NFs / DNNs is a one-file change.

---

## SEO checklist — already wired in

The site ships with SEO essentials baked in:

| Feature | Where |
|---|---|
| Server-side rendering (App Router) | All pages |
| Per-page `<title>` + `<meta description>` | Each page's `export const metadata` |
| Canonical URLs | `metadata.alternates.canonical` on every page |
| OpenGraph + Twitter cards | `src/app/layout.tsx` |
| Structured data (JSON-LD) | Organisation on `/`, Product on Studio sub-pages |
| `sitemap.xml` | Auto-served by Next.js from `src/app/sitemap.ts` |
| `robots.txt` | `public/robots.txt` |
| Favicon + iOS icon | `src/app/icon.png` + `apple-icon.png` |
| `next/image` (AVIF/WebP optimisation) | All non-decorative images |
| `next/font` (zero render-blocking fonts) | Inter + Plus Jakarta Sans |
| Mobile responsive (Tailwind breakpoints) | Throughout |
| HTTPS + global CDN | Free with Vercel |

### Post-launch SEO steps

After deploying to Vercel:

1. **Google Search Console** — add `makemytechnology.com`, verify, submit `https://makemytechnology.com/sitemap.xml`.
2. **Google Analytics 4** — paste the GA4 snippet into `src/app/layout.tsx` (or use Vercel Web Analytics).
3. **Open Graph image** — drop a 1200×630 PNG at `public/og-image.png` for social link previews. `layout.tsx` already references it.

---

## Content

All marketing copy lives in **typed TypeScript** under `src/content/` so copy
edits are single-file changes. No CMS, no rebuild scripts — change the string,
push, Vercel redeploys.

### How to update a Studio product card

`src/content/studio-products.ts` — change the `bullets` / `sub` / `title` for
any product. The card updates everywhere it appears (home, 5G/6G overview).

### How to swap a demo video

Drop your MP4 in `public/<product>-demo.mp4`. The `DemoVideo` component on
each Studio page references it by path. If the file is missing, the component
shows a "Coming soon" placeholder.

### How to fix a typo on the home page

`src/app/page.tsx` — every visible string is right there.

---

## Animations & 3D effects

The site uses a mix of techniques tuned for smooth scroll on mobile:

- **Framer Motion** for scroll-reveal, hero counters, sequenced call-flow arrows
- **Pure CSS keyframes** for the drone propellers, marquee scroll, gradient
  text, beam-border spin — these run on the GPU compositor (cheap, don't
  stutter under scroll)
- **CSS perspective + transform** on TiltCard for 3-D mouse-follow tilt
- **prefers-reduced-motion** respected everywhere
- **Touch-device detection** disables AuroraBg + Sparkles on phones to keep
  scroll buttery

---

## Contact

Questions about the site or the brand:

- **info@makemytechnology.com**
- **+91 63610 31970**
- VTU Regional Center, Bengaluru, India

---

## License

Copyright © 2026 MakeMyTechnology. All rights reserved.
