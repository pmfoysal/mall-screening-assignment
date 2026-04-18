# American Dream — Interactive Sales Deck Platform

> A cinematic, browser-based, immersive sales platform for American Dream — the world's most extraordinary retail and entertainment destination. Built as a high-stakes commercial pitch tool for prospective tenants, sponsors, and event partners.

---

## Overview

This is a purpose-built interactive sales deck that replaces the fragmented process of pulling up videos, PDFs, and spreadsheets during a property sales call. It delivers a self-contained, self-explanatory experience that:

- Creates immediate emotional buy-in within **≤ 10 seconds**
- Works on **live sales calls** (screen-shared) and as an **async standalone link**
- Drives three primary business actions: **retail leasing**, **brand sponsorship**, and **event bookings**
- Covers American Dream (East Rutherford, NJ) — 3M sq ft, 40M+ annual visitors, 6 miles from NYC

### Structure

| Route                     | Content                                           |
| ------------------------- | ------------------------------------------------- |
| `/`                       | Main experience — 7 cinematic sections            |
| `/events`                 | Phase 2: Event hosting capabilities + venue specs |
| `/sponsorship`            | Phase 2: Partnership tiers + activation examples  |
| `/leasing`                | Phase 2: Leasing overview                         |
| `/leasing/luxury`         | Luxury wing leasing pitch                         |
| `/leasing/retail`         | Flagship retail pitch                             |
| `/leasing/fnb`            | F&B & restaurant pitch                            |
| `/leasing/popup`          | Pop-up & temporary leasing                        |
| `/venues/performing-arts` | Dream Live PAC — 5,000 seats                      |
| `/venues/expo-hall`       | Expo Hall — 48,000 sq ft                          |

---

## Tech Stack

| Layer             | Technology                                                             |
| ----------------- | ---------------------------------------------------------------------- |
| **Framework**     | Next.js 16.2 (App Router, `cacheComponents: true`)                     |
| **Runtime**       | React 19.2 + TypeScript 5 (strict mode)                                |
| **Styling**       | Tailwind CSS v4 (CSS-first `@theme` config, zero `tailwind.config.ts`) |
| **Animation**     | GSAP 3 + `@gsap/react` (cinematic sequences, horizontal scroll)        |
| **UI Animation**  | Framer Motion (component-level transitions, stagger, AnimatePresence)  |
| **Smooth Scroll** | Lenis (premium scroll behavior, GSAP ScrollTrigger sync)               |
| **State**         | Zustand (navigation, theme, media stores)                              |
| **UI Primitives** | Radix UI (Dialog, Tooltip, Popover) + class-variance-authority         |
| **Forms**         | React Hook Form + Zod validation                                       |
| **Icons**         | Lucide React                                                           |
| **Fonts**         | Cormorant Garamond (display) + DM Sans (body) + DM Mono (data)         |
| **Deployment**    | Vercel                                                                 |

---

## Setup Instructions

### Prerequisites

- **Node.js** ≥ 18.0
- **npm** ≥ 9.0

### Local Development

```bash
# 1. Clone the repository
git clone <repository-url>
cd mall-screening-assignment

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

---

## Project Architecture

```
src/
├── app/                    # Next.js App Router routes
│   ├── layout.tsx          # Root layout (fonts, providers, FOUC prevention)
│   ├── page.tsx            # Main experience (Server Component)
│   ├── SectionsLoader.tsx  # Client Component for dynamic section imports
│   ├── global-error.tsx    # Global error boundary
│   ├── opengraph-image.tsx # Dynamic OG image (next/og)
│   ├── sitemap.ts          # XML sitemap
│   ├── robots.ts           # Robots directives
│   ├── events/             # Phase 2: Events module route
│   ├── sponsorship/        # Phase 2: Sponsorship module route
│   ├── leasing/            # Phase 2: Leasing paths
│   └── venues/             # Phase 2: Venue deep-dives
│
├── components/
│   ├── ui/                 # Primitive UI (Button, Skeleton, Badge, Modal, Tooltip)
│   ├── layout/             # Layout system (Nav, Lenis, Theme, SectionContainer, Progress)
│   ├── shared/             # Reusable components (VideoPlayer, AnimatedCounter, CTAButton...)
│   ├── sections/           # 7 main experience sections
│   └── modules/            # Phase 2 expandable modules
│
├── data/                   # Config-driven content (never hardcoded in components)
├── store/                  # Zustand stores (navigation, theme, media)
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities, constants, animation presets
└── types/                  # TypeScript type definitions
```

Every component follows the per-folder convention:

```
ComponentName/
  ├── ComponentName.tsx
  ├── ComponentName.types.ts
  ├── ComponentName.styles.css   ← @apply, no long JSX class strings
  └── index.ts
```

---

## Design Decisions

### Aesthetic Direction

**Refined Luxury with High-Energy Contrast** — the visual language deliberately sits between Hermès (precision, restraint, editorial typography) and Nickelodeon Universe (energy, scale, immersion). The dark near-black base with warm gold accents creates a premium foundation that doesn't feel cold.

Key choices:

- **Cormorant Garamond** — high-contrast serif with editorial, ultra-luxury feel. Paired with DM Sans for clean body text.
- **OKLCH color space** — perceptually uniform colors that maintain saturation across light/dark modes without manual calibration
- **Gold accent** — `oklch(72% 0.12 75)` — warm without being garish, reads clearly on dark backgrounds at 3:1+ contrast
- **Fluid type scale** — `clamp()` values throughout; no fixed breakpoint font jumps

### Animation Architecture

Three layers with distinct responsibilities:

- **GSAP** — hero entrance timeline, horizontal scroll panels (AttractionsSection) — complex multi-step sequences where precise timing control matters
- **Framer Motion** — component enter/exit (viewport-triggered), tab transitions (AnimatePresence), nav indicator (layoutId) — declarative, React-integrated
- **CSS keyframes** — skeleton shimmer, scroll indicator bounce — pure CSS where JS isn't needed

**Performance rule**: only `transform` and `opacity` are animated (no `width`, `height`, `margin`, `top`). GSAP contexts are always reverted on unmount to prevent memory leaks.

### Navigation Design

Non-linear by design — the user controls their journey. No forced sequencing. The fixed navigation provides:

- Section jump links with Lenis smooth scroll
- Active section tracking via IntersectionObserver (not scroll position math)
- Gold `layoutId` animated underline that physically moves between active items
- Right-edge progress dots for spatial orientation on desktop

### Server/Client Boundary

`app/page.tsx` is a Server Component. All section components are `'use client'` and dynamically imported:

- `HeroSection` — `ssr: true` (above fold, critical for LCP)
- All other sections — `ssr: false` (below fold, defer for performance)

`ssr: false` requires a Client Component wrapper (`SectionsLoader.tsx`) per Next.js 16.

### Theme System

Class-based dark mode via Tailwind v4 `@custom-variant dark (&:where(.dark, .dark *))`. Theme is stored in Zustand with localStorage persistence (key: `mallx-theme`). A blocking inline `<script id="theme-init">` in `<head>` prevents FOUC before hydration.

---

## AI Tools Used

This project was built with assistance from AI tools:

| Tool                        | Usage                                                                                                     |
| --------------------------- | --------------------------------------------------------------------------------------------------------- |
| **Kilo (Claude Sonnet)**    | Primary development agent — architecture planning, all component implementation, debugging, and iteration |
| **Cursor / GitHub Copilot** | Inline code completion during development                                                                 |

### How AI was used

- **Planning**: Full implementation plan generated from spec files (`.agents/*.md`) before any code was written — covering architecture, component hierarchy, animation strategy, commit sequence, and edge cases
- **Implementation**: Each component, hook, store, and data file generated with context awareness of the full codebase and design system
- **Debugging**: TypeScript errors, Next.js 16 API changes (e.g., `ssr: false` in client components, `viewport` export, Zod v4 API changes), and Lenis context bug all identified and fixed
- **Design**: Color token system, typography pairing, and animation choreography were AI-directed based on SPECIFICATIONS.md aesthetic requirements

### What AI got right

- The overall architecture and separation of concerns
- Correct Next.js 16 patterns (async params, `cacheComponents`, `viewport` export)
- React 19 patterns (no `forwardRef`)
- Tailwind v4 CSS-first configuration

### What required human-directed correction

- `ssr: false` restriction to Client Components (caught at build time)
- Zod v4 `required_error` API removal (caught at build time)
- Lenis context ref bug (null value in context — fixed to ref-in-context pattern)
- DiningSection Image `fill` style override (identified in code review)

---

## What I Would Improve With More Time

1. **Real video assets** — replace Unsplash fallback images with actual American Dream footage (drone overview, Nickelodeon Universe, Water Park highlights). Videos committed to a CDN, not the repo.

2. **Interactive property map** — the current SVG map is decorative. A truly interactive version would let users click zones and see tenant details, with animated zone highlights.

3. **Scroll-jacked video transitions** — between sections, a GSAP ScrollTrigger-driven video fade would create a fully cinematic experience (Apple-style product pages).

4. **Analytics integration** — the `lib/performance.ts` tracking hooks are already wired. Connecting Vercel Analytics + a custom GA4 event layer would enable real-time sales call data.

5. **CRM form integration** — the ContactForm currently simulates submission. A Formspree/Resend/HubSpot integration would make it production-ready.

6. **A11y audit** — run `axe-core` against all sections, resolve any remaining contrast issues at the gradient transition zones, and add `<track>` captions to any video with meaningful audio.

7. **Lighthouse ≥ 90** — the current build has not been audited. Hero video assets and GSAP bundle size are the most likely CLS/LCP bottlenecks.

---

## Environment Requirements

| Requirement | Version                                                 |
| ----------- | ------------------------------------------------------- |
| Node.js     | ≥ 18.0                                                  |
| npm         | ≥ 9.0                                                   |
| Browser     | Chrome 108+, Firefox 110+, Safari 15.4+ (OKLCH support) |

---

## Deployment

Deployed on Vercel. Connect the GitHub repository to Vercel and deploy — no environment variables required for the frontend-only build.

```bash
# Verify build locally before deploying
npm run build
```

The build output confirms 16 static/PPR routes. All Phase 2 routes use `generateStaticParams` for static generation at build time.
