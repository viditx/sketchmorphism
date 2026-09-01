# Sketchmorphism Design System Specification

## The Philosophy
Sketchmorphism is an organic, hand-drawn UI design system and physical component architecture. It directly rejects sterile flat defaults, Gaussian-blurred shadows, and purple AI-slop glow meshes.

Instead, Sketchmorphism simulates physical drafting paper, 0.5mm ballpoint pen ink friction, and mechanical notebook drafting using **zero heavy Canvas runtimes and zero WebGL bundles** — strictly native SVG displacement shaders and semantic HTML/CSS.

---

## 1. The Disciplined Physical Drafting Palette
Digital pure black (`#000000`) and sterile white (`#FFFFFF`) are strictly forbidden. The system runs on high-contrast physical ink tokens:

| Token | Hex | Role |
|---|---|---|
| **Warm Paper Canvas** | `#f4efe3` | Default page background |
| **Wood / Desk Surface** | `#d7cfbc` | Viewport container / desk border |
| **Paper Lift** | `#fbf7ec` | Elevated card / button background |
| **Charcoal Ballpoint Ink** | `#2b2823` | Primary typography, borders, double-pass contours |
| **Graphite Gray** | `#5c564d` | Secondary text, input placeholders, subtle lines |
| **Draft Blueprint Blue** | `#47658c` | Informational accents, focus rings, technical badges |
| **Revision Red** | `#c2402a` | Active states, primary keycap borders, checkmarks |
| **Highlighter Yellow** | `#fef08a` | Text callouts (`mix-blend-mode: multiply`) |
| **Highlighter Pink** | `#fbcfe8` | Warning callouts (`mix-blend-mode: multiply`) |

---

## 2. The Core Mathematical Rules

### Rule 1: Strokes Over Mathematical Borders
Digital 1px straight borders are banned. Outlines must possess natural hand tremor through native SVG turbulence filter pipelines:

```xml
<filter id="sketch-wobble" x="-10%" y="-10%" width="120%" height="120%">
  <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
  <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
</filter>
```

### Rule 2: 45° Architectural Cross-Hatching Over Gaussian Blur
Standard CSS `box-shadow` with Gaussian blur is replaced with **45-degree architectural pencil cross-hatching**. Elements cast tactile physical line shadows instead of synthetic digital fog.

### Rule 3: Mechanical Keycap Depression
On `:active` or click, interactive keycaps translate physically diagonally:
```css
.sketch-btn:active .sketch-btn__label {
  transform: translate(3px, 4px);
}
```
The element physically sinks into the hatch shadow underneath, simulating tactile mechanical button depression.

### Rule 4: Asymmetrical Organic Contour
Hand-cut paper contours replace uniform mathematical corner radii:
```css
border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
```

---

## 3. Component Architecture
- `@sketchmorphism/core`: SVG shader definitions and physical design tokens.
- `@sketchmorphism/react`: Type-safe React component wrappers (`<SketchButton>`, `<SketchCard>`, `<SketchInput>`, `<SketchCheckbox>`).
