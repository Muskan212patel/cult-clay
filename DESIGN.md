# Cult & Clay — Design System

## Brand Direction
**Quiet Luxury Minimalism** — Geometric minimalism with circles, strong negative space, editorial restraint. Contemporary global silhouettes with zero ethnic framing. Gallery-like experience, philosophical depth, anti-generic signature.

## Tone
Calm, intentional, timeless. Generous whitespace, soft fades. No clutter, no loud marketing. Minimalist editorial aesthetic.

## Differentiation
Deep cherry red accent (#8B1E2D) on soft off-white ground. Clay ripple micro-interactions. Scroll-triggered fade-in reveals (800ms). Geometric circle motifs. Playfair Display headers (48-72px) with elegant spacing.

## Color Palette (OKLCH)

| Token | Value | Use |
|---|---|---|
| background | 0.96 0.004 70 | Page bg (#F4F4F2), breathing room |
| foreground | 0.11 0.01 0 | Primary text (#111111), deep black |
| primary / accent | 0.38 0.15 14 | Buttons, interactive, cherry red (#8B1E2D) |
| secondary | 0.47 0.01 0 | Muted sections (#6E6E6E), soft grey |
| card | 0.95 0.01 70 | Elevated surfaces, near-white |
| border | 0.90 0.01 70 | Subtle dividers |
| muted | 0.85 0.04 70 | Disabled, low-contrast (#D8D2C8) |
| destructive | 0.42 0.16 20 | Error states, deep red |

## Typography

| Use | Font | Scale | Weight |
|---|---|---|---|
| Display | Playfair Display (serif) | 48–72px | 300–700 |
| Headlines | Playfair Display | 24–36px | 400–600 |
| Body | Inter (sans-serif) | 16–20px | 400–500 |
| Small | Inter | 12–14px | 400 |
| Mono | GeistMono | 12–14px | 400–500 |

## Spacing Scale
0px · 4px · 8px · 12px · 16px · 20px · 24px · 32px · 40px · 48px · 64px

## Elevation & Depth

| Layer | Shadow |
|---|---|
| Card | 0 4px 16px rgba(0,0,0,0.06) |
| Elevated | 0 10px 25px rgba(0,0,0,0.12) + 0 4px 12px rgba(0,0,0,0.08) |
| Subtle | 0 1px 3px rgba(0,0,0,0.08) + 0 1px 2px rgba(0,0,0,0.04) |

## Border Radius
0px (sharp) · 4px (minimal) · 8px (soft) · 999px (pill / full)

## Structural Zones

| Zone | Background | Treatment | Notes |
|---|---|---|---|
| Hero | Soft cherry red radial → off-white | Full viewport, 100% height, subtle khadi texture | Sticky nav, geometric circles |
| Navigation | Transparent / overlay | Minimal black text on light | Floats above hero |
| Philosophy | Off-white (#F4F4F2) | 3-column grid, white cards, cherry red top border on hover | Geometric circle icons |
| Carousel | Off-white | White cards, minimal shadows, cherry red accents | Horizontal scroll showcase |
| Story | Off-white + grey dividers | Editorial text + product imagery, slow parallax | Large Playfair headings |
| IG Grid | Off-white | Square tiles, earthy placeholders | Placeholder at launch |
| Footer | Soft grey (#6E6E6E) | Minimal links, black text, email capture | Centered, clean layout |

## Animation & Motion

| Name | Duration | Easing | Use |
|---|---|---|---|
| fade-in | 800ms | ease-out | Section reveals on scroll |
| fade-in-up | 800ms | ease-out | Cards cascade entrance |
| fade-in-down | 800ms | ease-out | Header slide-down |
| scale-in | 600ms | cubic-bezier(0.34, 1.56, 0.64, 1) | Card hover scale, playful bounce |
| ripple | 600ms | ease-out | Button click micro-interaction (radial ripple) |
| parallax | Variable | linear | Subtle y-offset on scroll event |

## Component Patterns

### Buttons
- **Primary:** terracotta bg, white text, clay ripple on click, no border
- **Secondary:** transparent bg, terracotta border, no fill, soft hover state
- **Disabled:** muted bg, muted-foreground text, no hover
- **Size:** default (36px height), sm (32px), lg (44px)

### Cards
- Background: white (0.99 0 0)
- Shadow: card (0 4px 16px rgba(0,0,0,0.06))
- Padding: 24px (generous interior spacing)
- Hover: scale 1.02 + shadow-elevated on :hover

### Section Containers
- Max width: 1400px
- Padding: 40px–64px (horizontal), 80px–120px (vertical, breathing room)
- Mobile: 20px padding (sides), 40px (vertical)

### Text Hierarchy
- **Display:** 48–72px, font-light, Playfair Display
- **Title:** 24–36px, font-light, Playfair Display
- **Subtitle:** 16–20px, font-light, 80% opacity, Inter
- **Body:** 16px, font-normal, 1.6 line-height, Inter
- **Caption:** 12px, font-light, 60% opacity, Inter

## Responsive Breakpoints
- **Mobile:** 320px–640px (full-width, single column)
- **Tablet:** 641px–1024px (2–3 columns, adjusted spacing)
- **Desktop:** 1025px+ (full layout, generous spacing)
- **Hero:** Always 100% viewport height (mobile-first)

## Dark Mode
**Not implemented.** Light-only by design intent. Future upgrade if brand expansion requires.

## Accessibility
- Min contrast ratio: AA (4.5:1 for normal text, 3:1 for large text)
- Focus states: ring-primary (2px offset) on all interactive elements
- Images: alt text required for all product/gallery images
- Motion: Respects `prefers-reduced-motion` media query (no parallax / ripple in reduced motion mode)

## Performance Constraints
- Font load: `font-display: swap` (no invisible text)
- Animation: GPU-accelerated (transform, opacity only — no layout shift)
- Images: WebP with JPG fallback, lazy-load off-screen content
- Target: <1.5s first contentful paint, <3.0s largest contentful paint

## Constraints & Rules
- **No :** RGB/hex literals (except legacy shadows), generic gradients, clutter, trend-based UI
- **Only:** OKLCH tokens, geometric minimalism, strong negative space, intentional micro-interactions
- **Brand:** Clay ripple on buttons + cherry red (#8B1E2D) are signature elements
- **Palette:** Strict 5-color system: #F4F4F2, #111111, #6E6E6E, #8B1E2D, #D8D2C8
- **Typography:** Playfair Display (headings, 48-72px) + Inter (body, 16-18px); no substitution

## Exports
- `index.css`: OKLCH tokens, @font-face declarations, utility classes (gradients, shadows, animations, spacing, text hierarchy)
- `tailwind.config.js`: Custom boxShadow, keyframes, animation entries; color tokens via CSS variables
- `public/assets/fonts/`: PlayfairDisplay.woff2, Inter.woff2, GeistMono.woff2
