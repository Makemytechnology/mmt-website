# MMT Website

Marketing site for **MakeMyTechnology (MMT)** — a Center of Excellence with five independent technology verticals.

## Stack

- Next.js 14 (App Router) · TypeScript
- Tailwind CSS with custom design tokens
- Framer Motion for tasteful scroll-reveal
- lucide-react icons
- Inter (body) + Plus Jakarta Sans (display) via `next/font`

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Routes

- `/` — homepage with 5 vertical cards
- `/5g-6g` — flagship product page (MMT 5G/6G Studio)
- `/iot`, `/ai`, `/drone-corridor`, `/quantum` — in-development verticals
- `/about`, `/contact`

## Logo

Drop the MMT badge at `public/logo.png`. The header/hero reference `/logo.png`. Always render on a dark background.

## Content

All marketing copy lives in typed TypeScript data files under `src/content/` so copy edits are one-file changes.
