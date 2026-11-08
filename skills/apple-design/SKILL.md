---
name: apple-design
description: Apply Apple-inspired design principles (clarity, deference, depth) to web pages and UI. Use when asked to make a site or component look "Apple-like", premium, minimal, or polished; when redesigning a landing page, product page or reader view; or when reviewing UI for typography, spacing, color, motion and accessibility quality. Not for recreating Apple's actual site, logos, product imagery or trademarked assets.
---

# Apple-Inspired Design

Design the way Apple's Human Interface Guidelines describe: **clarity** (content first, legible
at every size), **deference** (UI steps back so the content leads), and **depth** (layering and
motion that explain hierarchy). Borrow the *principles*, never Apple's brand: no Apple logos,
product photos, SF Pro font files, copy, or page layouts copied from apple.com.

## Workflow

1. **Audit first.** Read the existing CSS tokens (`:root` variables), type scale, and page
   structure. List what fights the principles below (too many accents, cramped spacing, weak
   hierarchy, decorative motion) before changing anything.
2. **Set tokens, then components.** Change the design system in `:root` first — color, type,
   spacing, radius, shadow, easing — so every page inherits it. Only then adjust components.
3. **One idea per section.** Each viewport-height section gets one headline, one supporting
   line, one visual, at most one primary action.
4. **Verify in a browser** at 390px (phone), 768px (tablet) and 1440px (desktop), in light and
   dark mode, with `prefers-reduced-motion` on. Screenshot and check before calling it done.

## Typography

- Font stack: `-apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", "Helvetica Neue",
  Arial, sans-serif` (system fonts render SF on Apple devices without shipping font files).
  Use `"SF Pro Display"` / `-apple-system` for headlines ≥ 20px.
- Big, confident headlines: `clamp(2.5rem, 6vw, 5rem)`, weight 600–700, letter-spacing
  `-0.015em` to `-0.03em`, line-height 1.05–1.1.
- Body 17px (`1.0625rem`), line-height 1.47, letter-spacing `-0.01em`. Reading column
  ≤ 680px.
- A short eyebrow above headlines: 12–14px, weight 600, in the accent color.
- Hierarchy through size and weight, not color variety. Limit to ~5 type sizes.
- A serif display face is fine if it is the brand — keep it to headlines only.

## Color

- Mostly neutral. Light: background `#ffffff` / `#f5f5f7`, text `#1d1d1f`, secondary
  `#6e6e73`. Dark: background `#000000` / `#1d1d1f`, text `#f5f5f7`, secondary `#a1a1a6`.
- **One** accent color, used only for interactive elements and the single most important
  emphasis. If the brand already has an accent (e.g. gold), keep it and drop the others.
- Alternate section backgrounds (white ↔ `#f5f5f7`, or black ↔ `#111`) instead of borders to
  separate content.
- Contrast: body text ≥ 4.5:1, large text ≥ 3:1. Check the accent on both backgrounds.
- Define every color as a `:root` token and redefine under
  `@media (prefers-color-scheme: dark)`.

## Layout & spacing

- 8px spacing grid. Section padding generous: `clamp(80px, 12vw, 160px)` vertical.
- Center-aligned hero and section intros; left-aligned long-form text.
- Max content width ~980–1080px; full-bleed backgrounds behind it.
- Cards: radius 18–28px, no visible border, subtle background shift, optional
  `box-shadow: 0 4px 24px rgba(0,0,0,.06)` (light) — shadows almost invisible in dark mode.
- Whitespace is a feature. When in doubt, remove an element rather than shrink the gaps.

## Navigation & controls

- Translucent sticky nav: 44–52px tall, `background: rgba(255,255,255,.72)` (or
  `rgba(22,22,23,.72)` dark) with `backdrop-filter: saturate(180%) blur(20px)`, hairline
  bottom border `rgba(0,0,0,.08)`. Small 12–14px links.
- Primary button: pill (`border-radius: 980px`), accent fill, 17px text, padding
  `12px 22px`. Secondary action: plain text link with a `›` chevron, accent colored.
- Touch targets ≥ 44×44px. Visible `:focus-visible` ring (2–4px accent outline, offset 2px).

## Imagery

- Large, high-quality, product-or-subject-centered visuals with lots of breathing room.
- Prefer real images or simple SVG over stock clip art and emoji. Always set `alt`,
  `width`, `height` and `loading="lazy"` below the fold.

## Motion

- Purposeful and quiet: fade + 16–24px translate on scroll reveal, 0.6–0.8s,
  `cubic-bezier(0.28, 0.11, 0.32, 1)` or `cubic-bezier(0.25, 0.1, 0.25, 1)`.
- Hover: small opacity/scale changes (≤ 1.02), 0.2–0.3s.
- Animate only `opacity` and `transform`. Use `IntersectionObserver`, not scroll listeners.
- Wrap all motion in `@media (prefers-reduced-motion: no-preference)` or disable it under
  `reduce`.

## Starter tokens

```css
:root {
  --bg: #ffffff; --bg-alt: #f5f5f7; --text: #1d1d1f; --text-2: #6e6e73;
  --accent: #0071e3; --hairline: rgba(0,0,0,.08);
  --font: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", "Helvetica Neue", Arial, sans-serif;
  --radius-card: 22px; --radius-pill: 980px;
  --ease: cubic-bezier(0.28, 0.11, 0.32, 1);
  --section-y: clamp(80px, 12vw, 160px);
}
@media (prefers-color-scheme: dark) {
  :root { --bg: #000; --bg-alt: #1d1d1f; --text: #f5f5f7; --text-2: #a1a1a6;
          --accent: #2997ff; --hairline: rgba(255,255,255,.12); }
}
```

Swap `--accent` for the brand's color (for example this repo's gold `#c9a84c`) rather than
adopting Apple blue.

## Review checklist

- [ ] One accent color; everything else neutral
- [ ] Headline is the largest, tightest-tracked element on screen
- [ ] Each section communicates a single idea
- [ ] Spacing on an 8px grid; sections feel roomy at every width
- [ ] No horizontal scroll at 390px; 16px minimum side gutters
- [ ] Contrast passes WCAG AA in light and dark
- [ ] Focus states visible; targets ≥ 44px
- [ ] Motion respects `prefers-reduced-motion`
- [ ] No Apple trademarks, logos, product imagery or copied copy
