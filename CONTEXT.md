# Project Context: @creativecodeco/ui (v2.5.1)

## Purpose

`@creativecodeco/ui` is the official React 19 UI component library & Design System for **CreativeCode.com.co**, built with TypeScript, Tailwind CSS v4, and DaisyUI v5. It provides a set of reusable, accessible, and highly customizable UI and form components built with modern web technologies.

## Technical Stack

- **Framework**: [React 19](https://react.dev/) (v19.3.1)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (v4.3.3, CSS-first configuration with PostCSS CLI 12)
- **UI Base**: [DaisyUI v5](https://daisyui.com/) (v5.7.50)
- **Documentation**: [Storybook 10](https://storybook.js.org/) (v10.6.2)
- **Compilers**: [Babel 8](https://babeljs.io/) (v8.0.7) & [TypeScript 6](https://www.typescriptlang.org/) (v6.0.3)
- **Testing**: [Jest 30](https://jestjs.io/) (v30.5.2) & [React Testing Library 16](https://testing-library.com/docs/react-testing-library/intro/) (v16.3.3)
- **Visual QA**: [Chromatic](https://www.chromatic.com/) (v18.13.0)

## Architecture & Structure

The project follows an organized, modular structure designed for scalability and ease of maintenance:

### Directory Overview

- **`src/ui/components/`**: Atomic UI components organized by domain:
  - **Display**: `Accordion`, `Aura`, `Avatar`, `AvatarGroup`, `Badge`, `Button`, `Card`, `Carousel`, `ChatBubble`, `Hover3D`, `HoverGallery`, `Indicator`, `Kbd`, `List`, `Mask`, `Rating`, `Stat`, `Status`, `Swap`, `Table`, `TextRotate`, `Timeline`.
  - **Feedback**: `Alert`, `Countdown`, `Diff`, `Modal`, `Progress`, `RadialProgress`, `Skeleton`, `Spinner`, `Toast`, `Tooltip`.
  - **Layout**: `Collapse`, `Divider`, `Footer`, `Hero`, `Join`, `Mockup`, `Stack`.
  - **Navigation**: `ActionDropdown`, `Breadcrumb`, `Dock`, `Drawer`, `Fab`, `Link`, `MegaMenu`, `Menu`, `Navbar`, `Pagination`, `Steps`, `Tabs`.
- **`src/ui/forms/`**: Specialized components for form handling: `Calendar`, `Checkbox`, `Dropdown`, `Fieldset`, `FileInput`, `Filter`, `Label`, `Otp`, `Radio`, `RadioList`, `Range`, `Select`, `TextArea`, `TextBox`, `Toggle`, `Validator`.
- **`src/ui/provider/`**: Contains the `CreativeCodeUIProvider`, which manages the application's theme (via `data-theme`) and provides necessary context for components.
- **`src/theme/`**: The heart of the design system's styling. It uses Tailwind CSS v4's CSS-first approach. `main.css` is the entry point that imports component-specific styles and Tailwind/DaisyUI plugins.
- **`src/hooks/`**: Custom React hooks shared across the library and available to consumers.
- **`src/helpers/` & `src/utils/`**: Utility functions for internal logic (e.g., class merging, URL validation).
- **`src/types/`**: Global TypeScript definitions.

### Component Pattern

Each component resides in its own directory (`src/ui/components/<category>/<name>/` or `src/ui/forms/<name>/`) with:

- `[name].component.tsx`: The component implementation.
- `[name].types.ts`: The TypeScript props interface (`<ComponentName>Type`).
- `[name].stories.tsx`: Storybook definitions for documentation and visual testing.
- `[name].test.tsx`: Unit tests with Jest and React Testing Library.
- `index.ts`: Public export for that component and its types.

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
