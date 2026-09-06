# Son Designs

Editorial-luxury portfolio site for a high-end architecture and interior design studio based in Nairobi, working across Kenya and East Africa. Built with **Next.js (App Router)**, **Tailwind CSS** and **Framer Motion**.

## Design system

- **Palette** — Warm off-white `#F9F6F0`, deep charcoal `#2C2C2C`, muted sage `#7A8B76`, warm terracotta `#C28B75`
- **Type** — Cormorant Garamond (display) + Manrope (body), loaded via `next/font`
- **Motion** — scroll-triggered reveals, layered parallax on the hero and studio imagery, an animated process timeline and testimonial slider

## Sections

1. Navbar (transparent → blurred solid on scroll)
2. Hero (full-screen parallax)
3. Studio / Phase Zero split screen
4. Services grid
5. Process timeline
6. Masonry portfolio
7. Press strip
8. Testimonials slider
9. Stats strip
10. Contact form + footer

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4 (`@theme` tokens in `app/globals.css`)
- Framer Motion
- TypeScript

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint       # eslint
```

> Note: this project pins the Webpack bundler (`--webpack`) because the
> Turbopack native SWC binding is unavailable on this machine. See
> `package.json` scripts.

## Deployment (Render)

The repo includes a `render.yaml` blueprint, so deploying is a single click:

1. Push this repo to GitHub.
2. In the Render dashboard, **New → Blueprint**, and select the repo.
3. Render detects `render.yaml` and creates the service automatically.

What it runs:

- **Build** — `npm ci && npm run build` (Node 24)
- **Start** — `npm start` (`next start`, serves the static + prerendered output)
- **Health check** — `/`

Notes:

- The build uses `next build --webpack`, which is deterministic on any
  platform — no native SWC binding is required.
- All site images live in `public/images`, so `next/image` serves them
  locally with no external dependencies.
- The free plan sleeps after inactivity; the first request wakes it up.

## Project structure

```
app/          # layout, globals.css (design tokens), page assembly
components/   # one component per section (Navbar, Hero, Philosophy, …)
lib/images.ts # local image map (assets live in public/images)
public/images # studio photography used across the site
```