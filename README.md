# ✏️ Sketchmorphism

Organic, hand-drawn UI component library for React and Vanilla.

**Sketchmorphism** brings the warmth, imperfection, and raw energy of hand-drawn sketches to the digital world. Perfect for wireframing tools, ed-tech platforms, interactive journalism, portfolios, and anything that needs to feel crafted rather than computed.

## 🌟 Philosophy

We believe in the power of the "human touch."
*   **Imperfect by Design:** No straight lines, no perfect circles. Everything wiggles, wobbles, and feels alive.
*   **Performance First:** Built with lightweight SVG filters (`feTurbulence`, `feDisplacementMap`) rather than heavy canvas animations or heavy asset loads.
*   **Accessible:** Despite the sketchy look, components remain fully accessible and standard-compliant.

*(Read more about our design rules in [DESIGN.md](./DESIGN.md) and market fit in [USE_CASES.md](./USE_CASES.md))*

## 📦 Architecture

This is a Monorepo managed with npm workspaces.

*   **`packages/core`**: The engine. Contains pure JS/TS logic, SVG filter generation (wobble, squiggly), and base styles. Framework agnostic.
*   **`packages/react`**: React bindings and components (Buttons, Inputs, etc.) that consume the core filters.
*   **`packages/icons`**: A dedicated suite of sketch-style SVG icons.
*   **`prototypes/`**: HTML/CSS prototypes of components to reference the raw SVG and CSS structure.

## 🚀 Getting Started

*(Docs and setup instructions coming soon as we finalize the Vite development environment!)*

## 🛠️ Built With

*   TypeScript
*   React
*   SVG Filters (`feTurbulence`)
*   tsup (Bundling)

---

## 👨‍💻 Credits & Support

**Made with ☕ by [viditx](https://github.com/viditx)**

If you like Sketchmorphism and want to support the development of organic, non-corporate UI tools:
- ⭐ **Star this repository** to show your support!
- 🐛 **Report bugs** or request features in the Issues tab.
- 🛠️ **Contribute** to the code if you have ideas to make it even more squiggly.

