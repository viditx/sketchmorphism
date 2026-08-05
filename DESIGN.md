# Sketchmorphism Design System

## The Philosophy
Sketchmorphism is designed to feel organic, hand-crafted, and imperfect. Unlike flat design or neumorphism, there are no straight lines, perfect circles, or solid drop shadows. Everything looks like it was drawn on paper with a marker or pencil.

## Core Visual Rules

### 1. Borders (The "Strokes Over Borders" Rule)
- No straight lines.
- Borders MUST be drawn using SVG paths with a roughened filter (e.g., `<feTurbulence>` + `<feDisplacementMap>`).
- If a standard CSS border is used, it must be paired with `border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;` (CSS organic shapes) or `clip-path` to avoid perfect rectangles.

### 2. Colors & Textures
- **Backgrounds**: Should mimic paper, canvas, or chalkboard textures. Use off-whites (`#fdfbf7`), creams, or deep slate/charcoals (`#212529`) for dark mode.
- **Strokes**: Use pencil-like colors (`#1a1a1a`, `#2c3e50`). Avoid pure black (`#000000`) as it feels too digital.
- **Fills**: Use cross-hatching SVG patterns or slightly transparent, uneven solid colors.

### 3. Typography
- Use handwriting or marker-style fonts. (e.g., `Comic Neue`, `Caveat`, `Architects Daughter`, `Virgil`).
- Text should never be perfectly aligned; a slight rotation (`transform: rotate(-1deg)`) can add life to headings.

### 4. Shadows & Depth
- Do NOT use standard smooth CSS `box-shadow`.
- Shadows should be solid, rough-edged shapes drawn behind the element, mimicking a marker scribble or a harsh, unblended pencil shadow.

## The SVG Filter Engine
All UI components (Buttons, Inputs, Cards) are wrapped in or utilize a core set of SVG filters to generate the wobble effect dynamically without relying on static raster images.

### Standard Wobble Filter
```xml
<filter id="sketch-wobble">
  <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
  <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
</filter>
```
