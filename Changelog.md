<!-- markdownlint-configure-file { "MD024": false } -->

# Changelog

## v2.7.0 - Full DaisyUI v5 Specification Alignment, Combinations, Stories & Unit Tests

### 👾 Feature & DaisyUI v5 Alignment

- **Global Types (`SizeType` & `ColorType`)**: Add `'xl'` size (`'xs' | 'sm' | 'md' | 'lg' | 'xl'`) and `'neutral'` semantic color across base types (`src/types/ui/base/constants.types.ts`) and custom theme CSS files (`avatar.css`, `badge.css`, `button.css`, `checkbox.css`, `radio.css`, `textbox.css`).
- **Display Components**:
  - `Button`: Add DaisyUI v5 `variant` (`'outline' | 'dash' | 'soft' | 'ghost' | 'link'`), `shape` (`'square' | 'circle'`), `wide`, `block`, `active`, `size='xl'`, and automatic `<Badge />` rendering when `withBadge` and `badge` are provided.
  - `Badge`: Add `variant` (`'outline' | 'dash' | 'soft' | 'ghost'`), `ColorButtonType` (`neutral`, `ghost`), and `size='xl'`.
  - `Card`: Migrate legacy v4 classes (`card-bordered` -> `card-border`, `card-compact` -> `card-sm`) and add `size` (`xs`–`xl`), `dash` (`card-dash`), `side` (`card-side`), and `imageFull` (`image-full`).
  - `Table`: Migrate to DaisyUI v5 `table-xs` and `row-hover` on `<tr>`, and add `size` (`xs`–`xl`), `pinRows` (`table-pin-rows`), and `pinCols` (`table-pin-cols`).
  - `Carousel`, `Stat`, `Swap`, `Timeline`, `AvatarGroup`: Add `snap='start'` and `carousel-horizontal` in `Carousel`, `actions` (`.stat-actions`) in `Stat`, `indeterminateContent` (`.swap-indeterminate`) in `Swap`, `snapIcon` (`timeline-snap-icon`) in `Timeline`, and `xl` size in `AvatarGroup`.
- **Feedback & Layout Components**:
  - `Alert`: Add DaisyUI v5 style variants (`'soft' | 'outline' | 'dash'`) and `vertical` (`alert-vertical` / `alert-horizontal`) layout.
  - `Modal`, `Toast`, `Tooltip`, `Skeleton`, `Spinner`, `Collapse`: Add `position` (`'top' | 'middle' | 'bottom' | 'start' | 'end'`) and `size='xl'` in `Modal`, `middle-*` (`toast-middle`) positions in `Toast`, `'start' | 'center' | 'end'` positions and `.tooltip-content` rich JSX support in `Tooltip`, `skeleton-text` in `Skeleton`, `loading-xl` in `Spinner`, and `close` (`collapse-close`) in `Collapse`.
- **Navigation Components**:
  - `Tabs`: Migrate to DaisyUI v5 `tabs-border`, `tabs-lift`, `tabs-box` (preserving backward compatibility with `bordered`, `lifted`, `boxed`), add `position` (`'top' | 'bottom'`), and support `tabs-xl`.
  - `Menu`, `ActionDropdown`, `Steps`, `Fab`, `Drawer`, `Pagination`: Migrate to `menu-active`, `menu-disabled`, and `menu-focus`, wrap step icons in `<span className='step-icon'>`, add `mainAction` (`.fab-main-action`) in `Fab`, add `.drawer-content` in `Drawer`, and support `btn-xl` in `Pagination`.
- **Form Controls**:
  - `TextBox`, `TextArea`, `FileInput`, `Range`, `Toggle`: Add `ghost` modifier (`input-ghost`, `textarea-ghost`, `file-input-ghost`), `vertical` (`range-vertical`) in `Range`, and full `xl` size / `neutral` color support.
- **Tailwind CSS v4 Safelisting**: Expand `@source inline(...)` in `src/theme/main.css` to guarantee all dynamic DaisyUI v5 modifiers, variants, sizes, and component classes are emitted in `lib/theme/main.css`.
- **Storybook & Unit Tests**: Update 34 Storybook files (`*.stories.tsx`) with new `argTypes` and interactive stories, and expand unit tests (`*.test.tsx`) to 245 passing tests across 70 test suites.

## v2.6.0 - Component Standardization, A11y, Security Hardening & Dependency Upgrades

### 👾 Component Standardization & Design Polish

- Unify `className?: string` prop support and `classnames` (`cls`) merging across all 67 UI and Form components (`Accordion`, `Avatar`, `Badge`, `Button`, `Alert`, `Modal`, `Toast`, `Tooltip`, `Breadcrumb`, `Pagination`, `Steps`, `Tabs`, `Checkbox`, `Dropdown`, `Radio`, `RadioList`, `TextBox`, `Toggle`).
- Standardize form validation error contracts by extending `ErrorType` (`isError?: boolean; error?: string`) across `Select`, `TextArea`, `Toggle`, `FileInput`, `Range`, and `Otp`, and prevent `isError` from leaking onto native DOM elements.
- Add dedicated `radio-list.types.ts` (`RadioListType`) and standardized exports in `src/ui/forms/radio-list/`.
- Expand React Hook Form `Controller` (`ControllerType`) to support all form controls (`TextBox`, `Dropdown`, `Select`, `TextArea`, `Checkbox`, `Radio`, `RadioList`, `Toggle`, `Range`, `FileInput`, `Otp`).
- Add `autodocs` tags to all remaining Storybook stories and `readOnly` fallback handling for static `Swap`, `Range`, `Collapse`, and `Toggle` states.
- Enhance accessibility (WAI-ARIA) and responsive mobile-first design across form, feedback, display, layout, and navigation components (`aria-invalid` and `role="alert"` on form controls, `htmlFor`/`id` label association in `TextArea`, `FileInput`, and `Toggle`, `role="radiogroup"` and `aria-label` in `Rating`, `role="status"` and `aria-live="polite"` in `Toast`, `role="tabpanel"` in `Tabs`, `aria-current` in `Steps` and `Breadcrumb`, `aria-haspopup`/`aria-expanded` in `ActionDropdown` and `MegaMenu`, and responsive viewport sizing in `Modal`, `Drawer`, `Calendar`, `Pagination`, `Tabs`, `Steps`, `Progress`, and `MegaMenu`).
- Standardize theme color tokens across all components by replacing hardcoded colors (`text-red-500` -> `text-error` in `Checkbox`, `Radio`, `RadioList`, and `TextBox`; `bg-black` -> `bg-neutral/60` in `Hero`; default `color = 'primary'` in `Rating`; `text-secondary` in `Timeline`) and adding `@source inline(...)` in `src/theme/main.css` so all DaisyUI semantic color classes are generated in the compiled stylesheet.
- Harden components against OWASP frontend security risks: restrict `isValidUrl` to `http:`/`https:`, add `sanitizeUrl` in `src/utils/string.utils.ts` to block `javascript:`/`vbscript:`/`data:` XSS schemes across `Link`, `Breadcrumb`, `Footer`, `Menu`, `MegaMenu`, `Hero`, `Card`, `Carousel`, `ChatBubble`, `HoverGallery`, `Mask`, and `AvatarGroup`, enforce `noopener noreferrer` on `target="_blank"` links, prevent CSS `url(...)` breakout in `Hero`, and set `autoComplete="one-time-code"` in `Otp`.
- Add `forwardRef` support across `Select`, `TextArea`, `Toggle`, `FileInput`, `Range`, and `Otp`, plus keyboard navigation (`Escape` to close `Modal` and `Drawer`, `ArrowRight`/`ArrowLeft`/`Home`/`End` in `Tabs`).
- Add `exports` map, `types`, `sideEffects`, `typecheck` script, `engines` (`node >=24.22.1`, `npm >=12.2.1`), and `packageManager` (`npm@12.2.1`) in `package.json`, update `.nvmrc` to `v24.22.1` (Node 24 LTS Krypton), and harden GitHub Actions workflows (`npm-build.yml`, `publish.yml`, `chromatic.yml`) with least-privilege `permissions`, `npm audit`, `npm run typecheck`, NPM `--provenance`, and latest SHA-pinned stable actions (`actions/checkout@v7.0.1`, `actions/setup-node@v7.1.0`, `chromaui/action@v18.13.3`, and `MishaKav/jest-coverage-comment@v1.0.38`).
- Add custom easing tokens (`--ease-out`, `--ease-in-out`, `--ease-drawer`) and tactile button active feedback (`scale(0.97)` with `prefers-reduced-motion` support) in `src/theme/`.

### ☝🏻 Upgrade

- Upgrade `eslint` to `v10.13.0` and `@eslint/js` to `v10.0.1` (resolving `eslint@9.x` end-of-life deprecation)
- Upgrade `storybook`, `@storybook/addon-docs`, `@storybook/addon-links`, `@storybook/react-webpack5`, and `eslint-plugin-storybook` to `v10.6.4`
- Upgrade `@chromatic-com/storybook` to `v5.6.0` and `chromatic` to `v18.13.3`
- Upgrade `react-hook-form` to `v7.91.0` and `postcss` to `v8.5.32`
- Align `peerDependencies` versions in `package.json` with current `dependencies` (`react@19.3.1`, `react-hook-form@7.91.0`, `postcss@8.5.32`, `tailwindcss@4.3.3`, `@tailwindcss/postcss@4.3.3`)
- Upgrade `@babel/core` to `v8.0.9`, `typescript-eslint` to `v8.72.1`, and `tsc-alias` to `v1.9.9`

### 🧹 Maintenance & Security Audit

- Add `overrides` in `package.json` for `flat-cache` (`^4.0.1`), `glob` (`^13.0.6`), `jsdom` (`^29.1.1`), and `eslint-plugin-react > eslint` (`$eslint`) to eliminate all transitive deprecated packages (`rimraf@3.0.2`, `glob@7.2.3`, `glob@10.5.0`, `inflight@1.0.6`, and `whatwg-encoding@3.1.1`) while maintaining `0 vulnerabilities` in `npm audit`.
- Replace deprecated `jsxBracketSameLine` option with `bracketSameLine` in `.prettierrc`.

## v2.5.1 - Repository Metadata, Documentation & MIT License

### 📝 Documentation & Metadata

- Update package `description`, `keywords`, `repository`, and `bugs` metadata in `package.json`.
- Enhance `README.md` and `CONTEXT.md` project descriptions and live preview links.
- Add root `LICENSE` (MIT) file for GitHub repository license detection.

## v2.5.0 - Complete DaisyUI v5 Component Catalog, Dependency Upgrades & Security Audit Fixes

### 👾 Feature

- **Display Components**: Add `Aura`, `Hover3D`, `HoverGallery`, `List`, `Status`, and `TextRotate`.
- **Feedback Components**: Add `RadialProgress`.
- **Layout Components**: Add `Footer`, `Mockup` (`code`, `browser`, `window`, `phone`), and `Stack`.
- **Navigation Components**: Add `ActionDropdown`, `Fab` (Floating Action Button / Speed Dial), `Link`, and `MegaMenu`.
- **Form Controls**: Add `Calendar`, `Fieldset`, `Filter`, `Label` (with `floating-label` support), `Otp`, `Select`, and `Validator`.

### ☝🏻 Upgrade

- Upgrade `react` and `react-dom` to `v19.3.1`
- Upgrade `react-hook-form` to `v7.90.0`
- Upgrade `postcss` to `v8.5.31`
- Upgrade `daisyui` to `v5.7.50`
- Upgrade `storybook`, `@storybook/addon-docs`, `@storybook/addon-links`, `@storybook/react-webpack5`, and `eslint-plugin-storybook` to `v10.6.2`
- Upgrade `@chromatic-com/storybook` to `v5.5.1` and `chromatic` to `v18.13.0`
- Upgrade `@babel/core`, `@babel/preset-env`, and `@babel/preset-typescript` to `v8.0.7`
- Upgrade `typescript-eslint` to `v8.72.0`, `ts-jest` to `v29.4.15`, `tsc-alias` to `v1.9.8`, `prettier` to `v3.9.10`, `@types/node` to `v26.6.5`, `@testing-library/user-event` to `v14.6.8`, and `eslint-plugin-prettier` to `v5.5.7`

### 🔒 Security

- Add `overrides` in `package.json` for `js-yaml` (`^4.1.1`), `tsc-alias > chokidar` (`^4.0.3`), and `braces` (`npm:brace-expansion@^2.1.7`) to resolve all 29 `npm audit` vulnerabilities (GHSA-hp3w-g68c-fv3c and GHSA-vfj7-8cjw-p6xm).

## v2.4.2 - Extended UI Components & Storybook Domain Hierarchy

### 👾 Feature

- Add Display components: `AvatarGroup`, `Carousel`, `ChatBubble`, `Indicator`, `Kbd`, `Mask`, `Rating`, `Swap`, `Timeline`
- Add Feedback components: `Countdown`, `Diff`, `Progress`
- Add Layout components: `Collapse`, `Hero`, `Join`
- Add Navigation components: `Dock`, `Menu`
- Add Form control: `Range`

### 👾 Fix

- Restructure components into domain directories (`display`, `feedback`, `layout`, `navigation`, `forms`) and unify `Range` Storybook story title under `@creativecodeco-ui/Form/Range`.

## v2.4.1 - Fix Chromatic CI Workflow

### 👾 Fix

- Add `fetch-depth: 0` to `actions/checkout` in Chromatic workflow (`.github/workflows/chromatic.yml`) to ensure full Git history is fetched for Chromatic baseline commit detection.

## v2.4.0 - Core, Navigation, Data Display & Form Components

### 👾 Feature

- Add Core & Feedback components: `Modal`, `Alert`, `Toast`, `Card`, `Skeleton`, `Spinner`, `Tooltip`
- Add Navigation components: `Tabs`, `Breadcrumb`, `Pagination`, `Steps`, `Drawer`, `Navbar`
- Add Data Display & Layout components: `Table`, `Stat`, `Divider`
- Add Form components: `Toggle`, `TextArea`, `FileInput`
- Align Storybook story titles and enhance component accessibility with semantic HTML and ARIA attributes.

## v2.3.0 - Update Major & Minor Dependencies

### ☝🏻 Upgrade

- Upgrade Babel packages (@babel/core, @babel/preset-env, @babel/preset-react, @babel/preset-typescript) to v8.0.x
- Upgrade PostCSS CLI to v12.0.0
- Upgrade Storybook to v10.6.1
- Upgrade daisyUI to v5.7.47
- Upgrade React Hook Form to v7.89.0
- Upgrade Chromatic to v18.10.1
- Upgrade React & React-DOM types to v19.3.0
- Upgrade Tailwind CSS / PostCSS to v4.3.3
- Add package override for `webpack-dev-middleware` (^7.4.5) to fix security vulnerability GHSA-g84c-rxfj-3j2c

## v2.2.0 - Update Dependencies & Storybook

### ☝🏻 Upgrade

- Upgrade Storybook to v10.5.10
- Upgrade daisyUI to v5.7.22
- Upgrade React Hook Form to v7.86.0
- Upgrade Chromatic to v18.6.1
- Upgrade Testing Library packages (@testing-library/react v16.3.3, @testing-library/jest-dom v7.0.1, @testing-library/user-event v14.6.6)
- Upgrade PostCSS to v8.5.26 and typescript-eslint to v8.68.0

## v2.1.1 - SonarQube Refactoring

### 👾 Fix

- Fix multiple code smells and bugs reported by SonarQube
- Improve Dropdown keyboard accessibility and semantic HTML
- Order CSS imports and fix duplicate type imports
- Parametrize string utility tests

## v2.1.0 - Update Libraries

### ☝🏻 Upgrade

- Upgrade Jest to v30
- Upgrade @testing-library/jest-dom to v7
- Upgrade Chromatic to v18

## v2.0.0 - Update Dependencies

### ☝🏻 Upgrade

- Upgrade react to v19

## v1.0.4 - Update Libraries

### 👾 Feature

- Eslint

### ☝🏻 Upgrade

- Upgrade libs

## v1.0.3 - Update Libraries

### ☝🏻 Upgrade

- Upgrade libs

## v1.0.0 - Update Libraries

### ☝🏻 Upgrade

- Upgrade libs
- Adjust Tailwindcss

## v0.64 - Fix chromatic

### 👾 Fix

- Fix chromatic

## v0.6.3 - Upgrade libs

### ☝🏻 Upgrade

- Upgrade libs

### 👾 Feature

- HtmlFor labels

## v0.6.2 - Upgrade storybook

### ☝🏻 Upgrade

- Upgrade storybook

## v0.6.1 - Upgrade lib versions

### ☝🏻 Upgrade

- Upgrade lib versions

## v0.6.0 - Badge

### 👾 Feature

- Badge

### 📶 Changes

- Update changelog
- Button Outline Color
- Button Badge

## v0.5.0 - Accordion

### 👾 Feature

- Accordion

## v0.4.2 - Text Box (Jan 22 - 2024)

### 📶 Changes

- Text Box semantic Html
- Text Box colors

## v0.4.2 - Button (Jan 22 - 2024)

### 📶 Changes

- Button loading

## v0.4.0 - Button (Jan 22 - 2024)

### 👾 Feature

- Button

### 📶 Changes

- Storybook table info
- Fix chromatic show controls

## v0.3.0 - Radio (Jan 10 - 2024)

### 👾 Feature

- Radio

### 🐛 Bugs

- Checkbox update

## v0.2.0 - Checkbox (Jan 10 - 2024)

### 👾 Feature

- Checkbox

### 🐛 Bugs

- Fix name Dropdown
- Fix build chromatic
- New util isValidUrl

## v0.1.0 - Avatar (Jan 3 - 2024)

### 👾 Feature

- Avatar

## v0.0.5 - Dropdown (Jan 2 - 2024)

### 🐛 Bugs

- Dropdown - Label default value
- Storybook config
- Changelog - Version in Storybook

## v0.0.4 - Dropdown (Jan 2 - 2021)

### 🐛 Bugs

- PerDependencies
- Update Readme.md
- Types Controller React Hook Form

## v0.0.3 - Dropdown (Dec 21 - 2023)

### 👾 Feature

- Dropdown

### 🐛 Bugs

- TextBox fixes icon

## v0.0.2 - TextBox (Dec 21 - 2023)

### 👾 Feature

- Husky
- Chromatic
- Actions
- TextBox
- TextBox With Icons
- Controller React Hook Form

## v0.0.1 - Initial Code (Dec 20 2023)

### 👾 Feature

- Base code
- StoryBook
- Publish NPM
- Build
