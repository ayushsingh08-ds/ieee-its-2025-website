# 🚀 IEEE Information Theory Society Student Chapter 2025

> **Status: ✅ RENDER-READY** - Production optimized and deployment ready

A modern, interactive website for the IEEE Information Theory Society (ITSoc) Student Chapter featuring cutting-edge 3D visualization, comprehensive research content, and academic excellence built with React + TypeScript + Vite.

## 🔬 Information Theory Focus

### Research Areas Covered:

- **Shannon Theory & Fundamental Limits** - Mathematical foundations of information and communication
- **Coding & Source Compression** - Error-correcting codes, data compression, encoding methods
- **Estimation, Detection & Inference** - Signal processing and statistical inference
- **Communication Networks & Multi-User Systems** - Network information theory and protocols
- **Cryptography & Information Security** - Secure communication and data protection
- **Applications in Machine Learning, Biology, and Data Science** - Cross-disciplinary applications

### Historical Milestones:

- **1951**: First meeting as IRE Professional Group on Information Theory
- **1963**: Renamed to IEEE Professional Technical Group on Information Theory
- **1964**: Became IEEE Information Theory Group
- **1989**: Formal establishment of IEEE Information Theory Society

### Membership Benefits:

- Access to IEEE Transactions on Information Theory
- Participation in workshops, tutorials, and conferences
- Networking with researchers, faculty, and professionals
- Travel grants, awards, and student competitions
- Digital archives, resources, and lecture materials

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
