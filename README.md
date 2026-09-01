# Sketchmorphism

An organic, hand-drawn UI design system and physical component architecture exploring **imperfect physical materiality**. 

Sketchmorphism replaces sterile 1px digital rectangles, Gaussian blurred shadows, and purple gradient meshes with **hardware-accelerated SVG turbulence shaders, 45-degree architectural cross-hatch elevation, and tactile keycap mechanics**.

**Zero heavy Canvas runtimes. Zero WebGL overhead.** Built purely on standard semantic DOM elements and native SVG filter pipelines running at 60fps on the GPU compositor.

[**→ Open Live Interactive Showcase**](https://viditx.github.io/sketchmorphism/prototypes/full-website-demo.html) · [**Design Tokens (DESIGN.md)**](./DESIGN.md) · [**Use Cases (USE_CASES.md)**](./USE_CASES.md)

---

## The Physical Engineering Laws

### 1. Strokes Over Mathematical Borders
Digital 1px borders are mathematically sterile. Sketchmorphism passes outlines through dynamic `<feTurbulence>` and `<feDisplacementMap>` matrix calculations to simulate 0.5mm ballpoint pen friction on textured paper.

```xml
<!-- The Native SVG Turbulence Shading Engine -->
<svg class="sketch-filter-engine" style="display: none;" aria-hidden="true">
  <defs>
    <filter id="sketch-wobble" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
    </filter>
  </defs>
</svg>
```

### 2. 45-Degree Architectural Cross-Hatch Depth
Standard CSS `box-shadow` produces synthetic digital fog. Sketchmorphism replaces all elevation with **45-degree architectural pencil cross-hatching**.

When clicked, the interactive keycap physically translates `(3px, 4px)` diagonally into the hatch pattern below, simulating mechanical depression:

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
.sketch-btn:active .sketch-btn__label {
  transform: translate(3px, 4px);
}
```

### 3. The Disciplined Physical Palette
A high-contrast physical ink palette with zero digital black (`#000000`) or sterile white (`#FFFFFF`):

- **Warm Paper Canvas**: `#f4efe3` (Default background)
- **Wood / Desk Surface**: `#d7cfbc`
- **Paper Lift**: `#fbf7ec` (Elevated component fill)
- **Charcoal Ballpoint Ink**: `#2b2823` (Text, borders, double-pass contours)
- **Graphite Gray**: `#5c564d` (Secondary typography & borders)
- **Draft Blueprint Blue**: `#47658c` (Informational accents & focus rings)
- **Revision Red**: `#c2402a` (Primary keycaps, warnings, callouts)
- **Highlighter Yellow / Pink**: `#fef08a` / `#fbcfe8` (`mix-blend-mode: multiply`)

---

## Live Interactive Demos

Experience the component mechanics live in your browser:
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
import { 
  SketchButton, 
  SketchCard, 
  SketchInput, 
  SketchCheckbox 
} from '@sketchmorphism/react';

export default function Showcase() {
  return (
    <SketchCard highlighted className="max-w-md p-8">
      <h3 className="font-mono text-2xl font-bold uppercase text-[#2b2823]">
        Architectural Drafting UI
      </h3>
      <p className="mt-4 text-sm text-[#5c564d] leading-relaxed">
        Engineered with native SVG displacement matrices and 45-degree cross-hatch depth.
      </p>

      <div className="mt-6 flex flex-col gap-4">
        <SketchInput label="Drafting Note" placeholder="Enter specifications..." />
        <SketchCheckbox label="Enable 60fps GPU displacement" defaultChecked />
        <SketchButton variant="primary" className="mt-2">
          Press Mechanical Keycap
        </SketchButton>
      </div>
    </SketchCard>
  );
}
```

---

## Monorepo Architecture

```
sketchmorphism/
├── packages/
│   ├── core/         # SVG filter shaders, CSS variables, and design tokens
│   ├── react/        # Accessible React 19 component wrappers with keycap physics
│   └── icons/        # Hand-drawn animated vector icon set
├── apps/
│   └── docs/         # Documentation site and live prototype playground
└── prototypes/       # Zero-dependency vanilla HTML/CSS reference builds
```

---

## Author

**Vidit Patil** ([@viditx](https://github.com/viditx))

- **GitHub:** [github.com/viditx](https://github.com/viditx)
- **Instagram:** [@vyditpvt](https://instagram.com/vyditpvt)
- **Telegram:** [@VYDITPVT](https://t.me/VYDITPVT)

---

## License

MIT © [Vidit Patil](https://github.com/viditx)
