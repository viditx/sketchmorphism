# Sketchmorphism

Every modern web interface has converged on the same sterile defaults: flat shadcn cards, blurred box-shadows, and purple glow meshes. 

**Sketchmorphism** is an organic design system and component architecture exploring **imperfect physical materiality** — replacing digital straight lines with hardware-accelerated SVG turbulence shaders, cross-hatch elevation, and natural paper physics.

Zero heavy Canvas runtimes. Zero 3D engine overhead. Built on standard semantic DOM elements and SVG filter math.

[**→ Open Live Interactive Showcase**](https://viditx.github.io/sketchmorphism/prototypes/full-website-demo.html) · [**Design Tokens (DESIGN.md)**](./DESIGN.md) · [**Use Cases (USE_CASES.md)**](./USE_CASES.md)

---

## The Core Physical Rules

### 1. Strokes Over Mathematical Borders
Digital 1px borders are mathematically sterile. Sketchmorphism passes standard CSS strokes through dynamic `<feTurbulence>` and `<feDisplacementMap>` matrix calculations to simulate 0.5mm ballpoint pen friction on textured paper.

```xml
<!-- The Native SVG Turbulence Shading Engine -->
<svg class="sketch-filter-engine" style="display: none;">
  <defs>
    <filter id="sketch-wobble" x="-10%" y="-10%" width="120%" height="120%">
      <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
    </filter>
  </defs>
</svg>
```

### 2. Physical Cross-Hatching Over Blurred CSS Shadows
Standard CSS `box-shadow` uses Gaussian blur. Sketchmorphism replaces all elevation with **45-degree architectural pencil cross-hatching**. 

When a user clicks a button, the element physically translates `(3px, 4px)` diagonally into the hatch pattern below, simulating tactile mechanical button depression.

```css
/* Asymmetrical organic card contour */
.sketch-card {
  border: 2.5px solid #2b2823;
  border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
  background-color: #f4efe3;
  background-image: repeating-linear-gradient(
    -45deg,
    transparent 0px,
    transparent 6px,
    rgba(43, 40, 35, 0.08) 6px,
    rgba(43, 40, 35, 0.08) 7px
  );
}

/* Mechanical keycap sink on click */
.sketch-btn:active {
  transform: translate(3px, 4px);
  box-shadow: none;
}
```

### 3. The 3-Pencil Palette
A disciplined, high-contrast physical ink palette:
- **Warm Desk:** `#d7cfbc`
- **Cotton Paper:** `#f4efe3`
- **Charcoal Ink:** `#2b2823`
- **Draft Blueprint:** `#47658c`
- **Revision Red:** `#c2402a`

---

## Live Interactive Demos

Explore the component mechanics live in your browser:
* [**Full Interactive Website Demo**](https://viditx.github.io/sketchmorphism/prototypes/full-website-demo.html)
* [**Tactile Button Mechanics**](https://viditx.github.io/sketchmorphism/prototypes/button.html)
* [**Hatched Checkboxes & Toggles**](https://viditx.github.io/sketchmorphism/prototypes/checkbox.html)
* [**Hand-Drawn Spline Graph**](https://viditx.github.io/sketchmorphism/prototypes/graph.html)
* [**Pencil Input & Forms**](https://viditx.github.io/sketchmorphism/prototypes/input.html)

---

## Quickstart

### 1. Install via npm

```bash
npm install @sketchmorphism/react @sketchmorphism/core
```

### 2. React Component Usage

```tsx
import React from 'react';
import { SketchButton, SketchCard } from '@sketchmorphism/react';

export default function Showcase() {
  return (
    <SketchCard highlighted className="max-w-md p-8">
      <h3 className="font-mono text-2xl font-bold uppercase text-[#2b2823]">
        Handcrafted UI
      </h3>
      <p className="mt-4 font-sans text-sm text-[#4a4740] leading-relaxed">
        Engineered with native SVG displacement matrices and 45-degree cross-hatch depth.
      </p>
      <SketchButton variant="primary" className="mt-6">
        Press Physical Keycap
      </SketchButton>
    </SketchCard>
  );
}
```

---

## Monorepo Architecture

```
sketchmorphism/
├── packages/
│   ├── core/         # SVG filter matrices, CSS variables, and design tokens
│   ├── react/        # Accessible React 19 component wrappers with spring physics
│   └── icons/        # Hand-drawn animated vector icon set
├── apps/
│   └── docs/         # Documentation site and live prototype playground
└── prototypes/       # Zero-dependency vanilla HTML/CSS reference builds
```

---

## Author & Craft

Engineered by **Vidit Patil** ([@viditx](https://github.com/viditx)) — Design Engineer & Systems Builder.

- **GitHub:** [github.com/viditx](https://github.com/viditx)
- **Instagram:** [@vyditpvt](https://instagram.com/vyditpvt)
- **Telegram:** [@VYDITPVT](https://t.me/VYDITPVT)

---

## License

MIT © [Vidit Patil](https://github.com/viditx)
