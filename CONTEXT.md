# Project Context: @creativecodeco/ui

## Purpose
`@creativecodeco/ui` is the official Design System for **CreativeCode.com.co**. It provides a set of reusable, accessible, and highly customizable UI components built with modern web technologies.

## Technical Stack
- **Framework**: [React 18](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first configuration)
- **UI Base**: [DaisyUI v5](https://daisyui.com/)
- **Documentation**: [Storybook 10](https://storybook.js.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Testing**: [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- **Visual QA**: [Chromatic](https://www.chromatic.com/)

## Architecture & Structure

The project follows an organized, modular structure designed for scalability and ease of maintenance:

### Directory Overview
- **`src/ui/components/`**: Atomic UI components like `Button`, `Avatar`, `Badge`, and `Accordion`. These are designed to be "dumb" components focused on presentation.
- **`src/ui/forms/`**: specialized components for form handling, such as `Textbox`, `Checkbox`, `Radio`, and `Dropdown`.
- **`src/ui/provider/`**: Contains the `CreativeCodeUIProvider`, which manages the application's theme (via `data-theme`) and provides necessary context for components.
- **`src/theme/`**: The heart of the design system's styling. It uses Tailwind CSS v4's CSS-first approach. `main.css` is the entry point that imports component-specific styles and Tailwind/DaisyUI plugins.
- **`src/hooks/`**: Custom React hooks shared across the library and available to consumers.
- **`src/helpers/` & `src/utils/`**: Utility functions for internal logic (e.g., class merging, URL validation).
- **`src/types/`**: Global TypeScript definitions.

### Component Pattern
Each component typically resides in its own directory with:
- `[Component].tsx`: The implementation.
- `[Component].stories.tsx`: Storybook definitions for documentation and testing.
- `[Component].spec.tsx`: Unit tests (if applicable).
- `index.ts`: Public export for that component.

## Styling System
The project has migrated to **Tailwind CSS v4**.
- **CSS-first**: Configuration is handled in `.css` files using `@theme` and `@plugin`.
- **DaisyUI Integration**: Base styles and themes are derived from DaisyUI and extended with CreativeCode's brand identity.
- **Theme Switching**: Controlled via the `CreativeCodeUIProvider` which applies `data-theme="creativecode"` to the `html` element.

## Development Workflow
1. **Component Creation**: Develop one component at a time using Storybook (`npm run dev`).
2. **Visual Verification**: Every PR triggers a Chromatic build to ensure no visual regressions occur.
3. **Building**: The library is built into the `lib/` directory using TypeScript (`npm run build`), producing ESM-compatible code.
4. **Publishing**: Managed via `npm version` and `npm publish`.

## Design Principles
- **Accessibility (A11y)**: Components should use semantic HTML and support ARIA attributes.
- **Responsiveness**: Use Tailwind's utility classes for a mobile-first approach.
- **Consistency**: All components must adhere to the defined theme tokens (colors, spacing, typography).
