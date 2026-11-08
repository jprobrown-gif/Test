---
name: apple-design
description: Apply Apple-inspired design principles (clarity, deference, depth) to anything visual Claude makes for the user — PDFs, playbooks, guides, one-pagers, slide decks, reports, worksheets, scorecards, dashboards, emails, web pages and apps. Use whenever the user asks Claude to design, lay out, format, style, polish or redesign a deliverable, or to make it look clean, premium, minimal, professional or "Apple-like", even when they don't name this skill. Works alongside file-format skills (pdf, docx, pptx, xlsx, artifacts) by setting the visual standard they follow. Not for copying Apple's own logos, product imagery, fonts or marketing pages.
---

# Apple-Inspired Design (any medium)

Design the way Apple's Human Interface Guidelines describe:

- **Clarity** — content first, legible at every size, nothing ambiguous.
- **Deference** — the design steps back so the message leads. No decoration for its own sake.
- **Depth** — hierarchy and layering that make it obvious what to read first, second, third.

Borrow the *principles*, never Apple's brand: no Apple logos, product photos, copied copy, or
recreations of apple.com pages.

## Before you design

1. **Find the one job.** Write one sentence: who reads this, and what should they do or know
   afterwards? (e.g. "A rep reads this in 2 minutes before a call and knows the 3 questions
   to ask.") Cut anything that doesn't serve it.
2. **Respect an existing brand.** If the user, their company, or the project has colors, fonts or
   a logo, use them and apply these principles on top. Brand beats defaults. Ask only if it
   genuinely matters and you can't find it.
3. **Pick the medium's rules** from the sections below, then apply the universal rules.
4. **Check the result visually** (render the PDF/slide/page and look at it) against the
   checklist at the end before handing it over.

## Universal rules

**Hierarchy.** One dominant element per page/slide/screen — usually a short, confident
headline. Then a supporting line, then detail. Hierarchy comes from size and weight, not from
many colors, boxes or underlines. Use at most ~5 text sizes in a whole piece.

**Typography.**
- One sans-serif family is enough. In order of preference: the brand font →
  SF Pro / `-apple-system` (where it renders natively) → Inter → Helvetica Neue → Arial.
  Never embed or redistribute SF Pro font files; use it only via the system.
- Headlines: bold/semibold, tight tracking (−1% to −3%), line-height ~1.05–1.15.
- Body: regular weight, line-height ~1.4–1.5, comfortable line length (45–75 characters).
- An optional small "eyebrow" label above headlines, semibold, in the accent color.
- A serif display face is fine if it's part of the brand — headlines only.
- Sentence case for headings. No ALL-CAPS paragraphs, no underlines for emphasis.

**Color.**
- Mostly neutral. Light: white `#FFFFFF` / soft gray `#F5F5F7` backgrounds, near-black text
  `#1D1D1F`, secondary text `#6E6E73`. Dark: black `#000000` / `#1D1D1F`, text `#F5F5F7`,
  secondary `#A1A1A6`.
- **One accent color**, used sparingly for the most important emphasis, links and key numbers.
  If there's a brand color, that's the accent. Default if none: `#0071E3`.
- Use status colors (green/amber/red) only for genuine status, never decoration.
- Contrast: body text ≥ 4.5:1 against its background, large text ≥ 3:1. Darken an accent for
  text on light backgrounds if needed (keep the brighter version for fills).
- Separate sections with whitespace or a soft background shift, not heavy borders or lines.

**Space.**
- Work on an 8-point grid (8, 16, 24, 32, 48, 64…). Be generous — whitespace is what makes
  it feel premium. When something feels crowded, remove content before shrinking gaps.
- Align everything to a few strong edges. Left-align body text; center only short
  headlines, covers and closing statements.

**Shapes and depth.** Rounded corners (cards ~12–24pt, buttons fully rounded), no visible
borders on cards, very soft shadows or none. Flat and calm beats glossy.

**Imagery and icons.** Fewer, larger, higher-quality visuals with breathing room. Simple
line icons in one consistent style and weight, in the accent or text color. No clip art, no
stock photos of handshakes, no emoji as decoration.

**Words are design.** Short headlines that make a point ("Close rate up 12%" not "Q3
Results Overview"). Cut filler. Use numbers and lists where they're clearer than prose.

**Data.** One idea per chart. Highlight the one series that matters in the accent; everything
else gray. Label directly instead of using legends where possible. No 3D, no pie charts with
more than ~4 slices, no gridline clutter. Big single numbers ("$1.2M") beat small charts when
one number is the point.

## Medium-specific rules

### PDFs, playbooks, guides and reports
- Page: US Letter or A4 as appropriate; margins ≥ 0.75in / 18mm, larger outer margins
  look more premium. Single column for reading; two columns only for reference material.
- Body 10.5–12pt, headings 18–32pt, cover title 36–60pt. Line-height ~1.4.
- **Cover:** title, one-line subtitle, author/date, lots of empty space. Optional single
  strong image or a full-bleed brand color. Nothing else.
- **Section openers:** a page or half-page with the section number (small, accent) and title
  (large). Gives the reader a breath.
- Include a short contents page for anything over ~6 pages; page numbers in the footer,
  small and gray. Running header optional (section name, small, gray).
- Pull out key takeaways in a soft-gray callout box — one per page at most.
- Checklists and worksheets: real checkbox glyphs (☐), generous write-in space, light
  hairline rules (`#D2D2D7`) for fill-in lines.
- Avoid widows/orphans; never let a heading sit alone at the bottom of a page.

### Slides and decks
- One idea per slide. The headline states the takeaway as a sentence.
- 16:9. Title 36–54pt, body ≥ 20pt — if it doesn't fit at 20pt, split the slide.
- ≤ 3 bullets, ideally none: prefer one big number, one image, or one simple diagram.
- Plenty of empty space; consistent title position on every slide.
- Dark backgrounds for dramatic moments (opener, big number, closer); light for content.

### One-pagers, scorecards and dashboards
- A clear top band: title, who/what period it covers, and the 3–5 headline numbers as large
  stat tiles (big number, small label, optional small trend in accent/gray).
- Then details in a tidy grid of cards. Every card has a short title; no orphan charts.
- For people/team views (e.g. a manager tracking a small team): one row or card per person,
  same structure for everyone, so comparison is effortless. Show what needs attention first.

### Emails and messages
- Plain, scannable: a one-line point first, short paragraphs, bold sparingly, a single clear
  call to action. No heavy HTML templates, banners or multiple colors.

### Spreadsheets
- Header row: bold, light-gray fill, frozen. No gridline-heavy borders — use thin light
  rules. Numbers right-aligned with consistent formatting; accent color only for the
  cells that matter (totals, flags).

### Web pages and apps
- System font stack: `-apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter",
  "Helvetica Neue", Arial, sans-serif`.
- Headlines `clamp(2.5rem, 6vw, 5rem)`, body 17px / 1.47, reading column ≤ 680px,
  content max width ~980–1080px, section padding `clamp(80px, 12vw, 160px)`.
- Translucent sticky nav (44–52px, `backdrop-filter: saturate(180%) blur(20px)`).
  Pill primary buttons; secondary actions as text links with a `›` chevron.
- Touch targets ≥ 44px, visible `:focus-visible` outline, works at 390px wide with no
  horizontal scroll, light and dark mode via `prefers-color-scheme`.
- Motion: subtle fade + 16–24px rise on scroll, 0.6–0.8s,
  `cubic-bezier(0.28, 0.11, 0.32, 1)`; animate only opacity/transform; respect
  `prefers-reduced-motion`.
- Define colors, type and spacing as CSS variables on `:root` first, components second.

## Final checklist

- [ ] The one job is obvious within 5 seconds
- [ ] One dominant element per page/slide/screen; clear first-second-third reading order
- [ ] One font family, ≤ 5 sizes, tight confident headlines
- [ ] Neutral palette + one accent (brand color if there is one)
- [ ] Generous, consistent spacing; strong alignment
- [ ] Text contrast passes (≥ 4.5:1 body)
- [ ] Charts highlight one thing; no clutter
- [ ] Nothing decorative that doesn't help the reader
- [ ] Rendered and visually checked before delivering
- [ ] No Apple logos, product imagery, font files or copied copy
