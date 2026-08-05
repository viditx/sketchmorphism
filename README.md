# ✏️ Sketchmorphism

Organic, hand-drawn UI component library for React and Vanilla.

Yo! Welcome to **Sketchmorphism**. This isn't just another corporate, pixel-perfect UI library. This is about bringing the warmth, imperfection, and raw energy of hand-drawn sketches back to the web. 

Perfect for wireframing tools, ed-tech platforms, interactive journalism, portfolios, or honestly, any project that needs to feel crafted by a human rather than computed by a machine.

## 🌟 The Vibe & Philosophy

I built this because I believe in the power of the "human touch."
*   **Imperfect by Design:** No straight lines, no perfect circles. Everything wiggles, wobbles, and feels alive.
*   **Performance First:** Built with lightweight SVG filters (`feTurbulence`, `feDisplacementMap`). No heavy canvas animations or massive image assets.
*   **Accessible:** Despite the sketchy, chaotic look, components remain fully accessible and standard-compliant.

*(Wanna dive deeper into the design rules? Check out [DESIGN.md](./DESIGN.md) and our market fit in [USE_CASES.md](./USE_CASES.md))*

## 📦 Architecture

This is a Monorepo managed with npm workspaces, kept clean and modular:

*   **`packages/core`**: The engine. Contains pure JS/TS logic, SVG filter generation (wobble, squiggly), and base styles. Framework agnostic.
*   **`packages/react`**: React bindings and components (Buttons, Inputs, etc.) that consume the core filters.
*   **`packages/icons`**: A dedicated suite of sketch-style SVG icons.
*   **`prototypes/`**: HTML/CSS prototypes of components to reference the raw SVG and CSS structure.

## 🚀 How to use this in your project

Sketchmorphism is designed to be ridiculously easy to drop into your React or Vanilla JS apps.

### 1. Installation

Install the core filters and React components via npm:

```bash
npm install @sketchmorphism/core @sketchmorphism/react
```

### 2. Basic React Usage

Just import the components and start building. The raw, sketchy filters are applied automatically!

```tsx
import { Button } from '@sketchmorphism/react';
import '@sketchmorphism/core/dist/index.css'; // Coming soon: base styles

function App() {
  return (
    <Button>Click Me Fast!</Button>
  );
}
```

## 👀 See the Demos (Prototypes)

Want to see what Sketchmorphism looks like right now? Check out these live prototypes generated during our design phase:
- 🚀 [**Full Website Demo**](https://viditx.github.io/sketchmorphism/prototypes/full-website-demo.html)
- 🔵 [**Button Prototype**](https://viditx.github.io/sketchmorphism/prototypes/button.html)
- ☑️ [**Checkbox Prototype**](https://viditx.github.io/sketchmorphism/prototypes/checkbox.html)
- 📊 [**Graph Prototype**](https://viditx.github.io/sketchmorphism/prototypes/graph.html)
- ⌨️ [**Input Prototype**](https://viditx.github.io/sketchmorphism/prototypes/input.html)


## 🛠️ Built With

*   TypeScript (because sanity matters)
*   React
*   SVG Filters (`feTurbulence`)
*   tsup (Bundling)

---

## 👨‍💻 Meet the Maker & Support

Hey, I'm **Vidit** ([@viditx](https://github.com/viditx))! I'm 15, super passionate about AI, automation, and building stuff that actually feels different.

If you are a developer, designer, or just someone who stumbled upon this and found it cool—I'd love to connect!
- ✈️ **Telegram:** [@VYDITPVT](https://t.me/VYDITPVT)
- 🌐 **Portfolio:** Coming soon!

**Want to support Sketchmorphism?**
- ⭐ **Star this repository** (it genuinely makes my day).
- 🐛 **Report bugs** or request features in the Issues tab.
- 🛠️ **Contribute!** Got ideas to make it even more squiggly? PRs are always welcome. Let's build something awesome together.

