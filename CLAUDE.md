# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # Install dependencies
npm run dev       # Dev server (Vite, localhost:5173)
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
npm run lint      # ESLint
npm run test      # Vitest (single run)
npm run test:watch # Vitest (watch mode)
npx tsc --noEmit  # Type-check without building
```

> **Note:** `bun` is not installed on this machine. Use `npm` and `npx` for all commands.

## Deployment

The site deploys via Railway using Docker + `npm ci` + `vite build`. After any `npm install` that changes `package-lock.json`, commit and push the updated lock file — otherwise `npm ci` will fail in the build container.

Remote: `https://github.com/business-wq/marklewitz-solar.git` (branch: `main`)

## Architecture

**React SPA** (Vite + TypeScript + React Router v6). No SSR. Google renders the JS, but with a delay — keep that in mind for SEO-critical content.

### Routing (`src/App.tsx`)
- `/` → `pages/Index.tsx` — Homepage, all sections stacked
- `/galerie` → `pages/Galerie.tsx`
- `/:slug` → `pages/LocationPage.tsx` — catches all 10 city slugs
- `/impressum`, `/datenschutz` — legal pages

### Location Pages (`src/data/locations.ts`)
Central data file for all 10 city landing pages. Each entry drives the dynamic route at `/:slug` and contains `metaTitle`, `metaDescription`, `keywords`, `headline`, `description`, `localInfo`, `benefits`, `distanceFromOwen`, `population`. **All meta titles must stay ≤ 60 characters.**

### SEO Architecture
- **`index.html`**: Static base — `lang="de"`, geo meta tags, LocalBusiness JSON-LD schema, favicon. Do not duplicate meta tags that `SEOHead` also sets (title, description, OG, canonical) — React overrides them post-hydration.
- **`src/components/SEOHead.tsx`**: Sets `document.title` + all meta/OG/Twitter/canonical tags dynamically per route via `useEffect`.
- **`src/pages/LocationPage.tsx`**: Injects a `@graph` schema (Service + BreadcrumbList + LocalBusiness `@id` reference) per city page.
- **`src/components/FAQSection.tsx`**: Renders FAQPage JSON-LD schema.
- **`src/components/TestimonialsSection.tsx`**: Renders Review + AggregateRating JSON-LD. Keep `reviewCount` in sync with the number of visible testimonials.
- **`public/sitemap.xml`**: Static — update `lastmod` dates and add new URLs manually when adding pages.

### Design System
- **Fonts**: `Space Grotesk` (headings, `font-heading`) / `Plus Jakarta Sans` (body)
- **Primary color**: Solar gold — `hsl(38 92% 50%)` — `text-primary`, `bg-primary`
- **Custom tokens**: `solar-gold`, `solar-navy`, `solar-green`, `solar-blue` — defined in `src/index.css` CSS variables, consumed via Tailwind (`tailwind.config.ts`)
- **Gradients**: `bg-gradient-solar`, `bg-gradient-navy`, `text-gradient-gold` — utility classes defined in `src/index.css`
- **Shadows**: `shadow-card`, `shadow-solar` — custom utility classes
- UI components live in `src/components/ui/` (shadcn/ui, Radix primitives). Prefer these over custom implementations.

### Contact / WhatsApp
`ContactSection.tsx` builds a pre-filled WhatsApp message from form fields and opens `https://wa.me/491627382351?text=...` on submit. No backend involved.

### Key Constants
- WhatsApp / phone: `+491627382351` (E.164), displayed as `0162-7382351`
- Address: Gartenstraße 43/1, 73277 Owen an der Teck
- Calendly: `https://calendly.com/svenmarklewitz-p9a/15min`
- Domain: `https://www.marklewitz-solar.de`
- LocalBusiness `@id`: `https://www.marklewitz-solar.de/#business` — must be consistent across all schema blocks
