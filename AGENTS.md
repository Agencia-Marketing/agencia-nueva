# AGENTS — VEXIAMAX | IA & Marketing Solutions (Cyber-Luxe Glassmorphism)

## Project Overview

Cyber-Luxe Glassmorphism landing page for **VEXIAMAX — IA & Marketing Solutions**, an AI & digital marketing agency. Built with Astro 5 + Tailwind CSS v3, deployable to Cloudflare Pages. Dark blue/violet aesthetic with glass surfaces. Brand lives in a single file (`src/config/theme.mjs`); content in `src/content/**` JSON (editable via `/admin`).

## Critical Conventions

- **Two variants coexist**: `src/` (Astro with local Tailwind + PostCSS) and `html/` (standalone HTML with Tailwind CDN + inline CSS). Keep both in sync when making visual/style changes.
- **All brand colors**: defined as CSS custom properties in `:root` in `src/styles/global.css` and each HTML file's `<style>` block. Also mirrored in `tailwind.config.mjs`.
- **Tailwind is v3**, not v4. Use `@tailwind base/components/utilities` directives.
- **Fonts**: Montserrat (display/headings + body + hero, weights 400–800, from Google Fonts) + Robexs (corporate, self-hosted at `public/fonts/Robexs.ttf` via `@font-face`). Robexs (Tailwind class `font-brand`) is reserved for the text logo wordmark fallback only; everything visible (including hero `h1`s) is Montserrat. Never substitute with Inter, Roboto, or Arial.
- **Backdrop-filter**: Always pair `backdrop-filter` with `-webkit-backdrop-filter` for Safari compatibility.

## Commands

| Command | Action |
|---|---|
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build to `dist/` |
| `npm run preview` | Preview build locally |

## Design System

### Colors — `:root` (paleta VEXIAMAX, Manual de identidad 5.1)
- `--bg-void: #03061A` — navy-black base background
- `--bg-depth: #081046` — deep section background
- `--grad-indigo: #0A2A88` — mesh gradient deep blue (Pantone 287C)
- `--grad-violet: #3F0DA0` — mesh gradient violet (Pantone 2091C)
- `--grad-pink: #1E6BFF` — mesh gradient (no pink in brand → bright blue)
- `--accent: #1E6BFF` — bright blue (Pantone 2727C, primary interactive)
- `--accent-rgb: 30, 107, 255` — RGB triplet for rgba() use
- `--accent-dim: rgba(30,107,255,0.08)` — subtle accent background tint
- `--accent-glow: 0 0 40px rgba(30,107,255,0.30)` — glow shadow for buttons
- `--accent-2: #8B5CF6` — soft violet secondary accent
- `--text-primary: #EAF0FF` — near-white blue-tinted
- `--text-secondary: #8A97C2` — muted blue-gray
- `--text-dim: #455080` — disabled / hint text
- Green `#30870B` (Pantone 2424C) is a complementary/success color available but NOT wired into the main UI.
- `--glass-bg: rgba(255,255,255,0.032)` — glass card base fill
- `--glass-bg-hover: rgba(255,255,255,0.065)` — glass fill on hover
- `--glass-border: rgba(255,255,255,0.075)` — default glass border
- `--glass-border-hover: rgba(255,255,255,0.18)` — glass border on hover
- `--glass-border-accent: rgba(0,240,255,0.28)` — accent-tinted glass border
- `--shadow-glass: 0 8px 32px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.05)` — glass shadow

### Typography
- **Display/Headings + Body**: Montserrat (400–800 weight; headings -0.02em letter-spacing, body 1.65 line-height)
- **Brand (`font-brand`)**: Robexs — text logo wordmark fallback only

### Rebranding flow
Change colors in TWO places:
1. `:root` block in `src/styles/global.css` (and each HTML file's `<style>`)
2. `theme.extend.colors` in `tailwind.config.mjs` (and inline config in HTMLs)

## Key CSS Classes

| Class | What it does |
|---|---|
| `.mesh-bg` | Layered `radial-gradient` mesh on `--bg-void`. 4 gradients: indigo TL, violet BR, pink TR, cyan center |
| `.mesh-bg-alt` | Alternate mesh on `--bg-depth`. Used for footer and secondary sections |
| `.glass` | Glass card base: `backdrop-filter: blur(20px) saturate(180%)`, `--glass-bg` fill, `--glass-border` border, `--shadow-glass`. Hover: brighter bg, stronger border, `translateY(-4px)` |
| `.card-cyber` | Glass card variant with `::after` pseudo-element: 2px gradient line at bottom that fades in on hover (accent glow accent) |
| `.btn-cyber` | Outlined accent button: glass bg + `--glass-border-accent` border + cyan text. Hover: glow shadow + `translateY(-2px)` |
| `.btn-cyber-solid` | Filled accent button: solid `--accent` bg + dark text. Hover: brighter + strong glow |
| `.btn-ghost` | Transparent button: subtle border + white text. Hover: border turns accent, text turns accent |
| `.lumen-border` | Luminous 1px top border via `border-image`: transparent → cyan 50% → violet 50% → transparent gradient |
| `.glow-text` | `text-shadow: 0 0 30px rgba(0,240,255,0.4)` for headline emphasis |
| `.gradient-text` | Gradient fill on text: cyan → violet → pink via `-webkit-background-clip: text` |
| `.tag-cyber` | Pill-shaped label: `--accent-dim` bg, 1px accent border, cyan uppercase text, Sora font |
| `.reveal` | Single-element scroll reveal: `opacity:0 + translateY(28px)` → `opacity:1 + translateY(0)` on `.visible` class (added by IntersectionObserver) |
| `.stagger-fade` | Staggered child reveal: each child gets `transition-delay` from 0ms to 560ms (70ms steps) when `.visible` class applied to parent |
| `.magnetic` | JS magnetic hover effect: mouse proximity causes `translateX/Y` on the element. Applied via JS `mousemove` listener in Layout.astro |
| `.press` | `scale(0.97)` on `:active` for tactile button feedback |
| `.icon-wrap` | Inline icon container: `gap` animates from 4px → 8px on parent hover, creating icon-slide effect |
| `.input-cyber` | Form input: glass bg + subtle border, cyan focus ring (`box-shadow: 0 0 0 3px rgba(0,240,255,0.08)`), transitions border on focus |
| `.cyber-divider` | Horizontal rule: 1px `linear-gradient` from transparent → `--glass-border-hover` → transparent |
| `.noise-overlay::before` | Fixed full-screen SVG noise texture at 40% opacity, `pointer-events: none`, `z-index: 9999` — gives depth to flat surfaces |

## JavaScript Behaviors (Layout.astro `<script>`)

| Behavior | Trigger | Effect |
|---|---|---|
| Nav glassify | `scroll > 20px` | Nav gets `background: rgba(3,3,15,0.75)`, `backdrop-filter: blur(24px)`, bottom border |
| Mobile menu | `#menu-btn` click | Toggles `.hidden` on `#mobile-menu` |
| Scroll reveal | IntersectionObserver threshold 0.12 | Adds `.visible` to `.reveal` and `.stagger-fade` elements |
| Magnetic buttons | `.magnetic` mousemove | `translateX/Y` by 35% of cursor offset from element center |
| Magnetic reset | `.magnetic` mouseleave | `transform: ''` resets position |

## Deployment

Push to `main` on GitHub → Cloudflare Pages auto-builds.
