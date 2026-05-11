# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev          # Start dev server
yarn build        # Production build
yarn generate     # Static site generation
yarn preview      # Preview production build
```

No linter or test runner is configured.

## Architecture

**Nuxt 4** app with SSR enabled, using the `app/` directory convention (Nuxt 4 layout: all app code lives under `app/`, not the root).

- `app/app.vue` — Root shell: handles smooth-scroll hijacking, custom CSS cursor (disabled on touch), click spark canvas, scroll-reveal observer, and back-to-top button. Global CSS vars and theme classes live here.
- `app/pages/index.vue` — Homepage, composes section components in order.
- `app/pages/blog/` — Blog routes using `@nuxt/content` v3. Content lives in `content/blog/**/index.md`.
- `app/components/sections/` — One component per page section (Hero, About, Experience, CaseStudies, etc.).
- `app/components/shared/` — Reusable primitives: Button, Card, GlassCard, Badge, IconBox, SectionHeader, Section, SectionWrapper, Header, Footer, Logo, FloatingWhatsApp.
- `app/components/blog/` — Blog-specific components: PostCard, PostHeader, Reader, Tag.
- `app/composables/useTheme.ts` — Theme composable persisting `light`/`dark` to `localStorage` under the key `portal-theme`. Theme is applied as a class on `<html>`.
- `app/composables/useBrandScheme.ts` — Brand scheme composable with 6 schemes (`futuristic`, `premium`, `energetic`, `editorial`, `neutral`, `monochrome`). Persists to `localStorage` under `site-brand-scheme` and applies as `data-brand-scheme` attribute on `<html>`. Default scheme is `premium`.
- `app/pages/tin-check.vue` — TIN audit checker page for Bangladesh tax (2023–24 AY). Posts to `/api/tin-check` and checks against `server/assets/audit.json` (bundled as a Nitro server asset).
- `app/pages/privacy.vue`, `app/pages/terms.vue` — Static legal pages.
- `server/api/tin-check.post.ts` — Server API route that reads audit data from Nitro storage key `assets:server/audit.json` and hashes TINs with `TIN_SALT` env var (set in `runtimeConfig.tinSalt`).

## Design System

All colors are CSS custom properties, not Tailwind color scales. Use the semantic tokens:

| Token | Usage |
|---|---|
| `--bg-page`, `--bg-panel`, `--bg-glass`, `--bg-soft` | Backgrounds |
| `--text-main`, `--text-soft`, `--text-muted` | Text hierarchy |
| `--accent`, `--accent-fg` | Primary accent (obsidian in light, white in dark) |
| `--border-glass`, `--border-subtle` | Borders |

Tailwind utility aliases map to these vars: `bg-page`, `bg-panel`, `bg-glass`, `text-main`, `text-soft`, `text-muted`, `border-glass`, `border-subtle`.

Dark mode is toggled via `.dark` / `.light` class on `<html>` (not `prefers-color-scheme` media query at runtime). Tailwind is configured with `darkMode: ['class', '.dark']`.

**Typography**: Roboto/Inter (`font-sans`) for body; Inconsolata (`font-mono`) for code. Headings use `font-weight: 800`, `letter-spacing: -0.04em`.

**Additional Tailwind color scales** (defined in `tailwind.config.js`, use sparingly — prefer CSS vars above):
- `brand.DEFAULT / brand.light / brand.dark` — orange `#FF5C00` scale
- `surface.900 / .800 / .700` — near-black surface ramp
- `accent.purple`, `accent.blue` — secondary accent tints

**Theme FOUC prevention**: an inline `<script>` in `nuxt.config.ts`'s `app.head` reads `portal-theme` from localStorage and sets the class on `<html>` before hydration.

## Scroll System

The smooth-scroll system in `app.vue` uses a fixed-position wrapper + `requestAnimationFrame` lerp (factor `0.08`) to simulate inertia scrolling on desktop. It dispatches a `smooth-scroll` custom event and sets `window.__SMOOTH_SCROLL_OFFSET__` each frame. Sections that need scroll position (parallax, sticky effects) should listen to this event, not `window.scroll`.

Touch devices (`pointer: coarse`) bypass the custom scroll entirely and use native scroll.

## Scroll Reveal

Add class `reveal` to any element to animate it in on intersection. Optional delay utilities: `reveal-delay-1` through `reveal-delay-4` (0.1s–0.4s steps). The observer is set up in `app.vue` via `MutationObserver` so dynamically added elements are picked up automatically.

## Blog Content

Blog posts go in `content/blog/<slug>/index.md`. Required frontmatter fields (from `content.config.ts`):

```yaml
title: string
date: string
readingTime: string
excerpt: string
tags: string[]
```

## Key Modules

- `@nuxt/content` v3 — blog content, queried via `queryCollection('blog')`
- `@nuxt/icon` — icon component `<Icon name="lucide:..." />`
- `@nuxtjs/tailwindcss` — Tailwind v3 integration
- `@tailwindcss/typography` — prose styles for blog reader
