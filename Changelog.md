<!-- markdownlint-configure-file { "MD024": false } -->

# Changelog

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
