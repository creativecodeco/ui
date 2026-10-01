<!-- markdownlint-configure-file { "MD024": false } -->

# Changelog

## v2.4.2 - Fix Storybook Form Category Hierarchy

### 👾 Fix

- Unify `Range` component Storybook story title under `@creativecodeco-ui/Form/Range` to eliminate duplicate `Form` / `Forms` categories.

## v2.4.1 - Fix Chromatic CI Workflow

### 👾 Fix

- Add `fetch-depth: 0` to `actions/checkout` in Chromatic workflow (`.github/workflows/chromatic.yml`) to ensure full Git history is fetched for Chromatic baseline commit detection.

## v2.6.1 - Fix Storybook Hierarchy

### 👾 Fix

- Align Storybook story titles for all new components under `@creativecodeco-ui/Components` and `@creativecodeco-ui/Form`

## v2.6.0 - New Structure & Data Display Components (Block 3)

### 👾 Feature

- Add `Drawer` / `Sidebar` sliding panel component (left/right sides, backdrop, title)
- Add `Navbar` header navigation component (brand, start, center, end sections)
- Add `Table` data grid component (columns, zebra, compact, hover, custom cell renderers)
- Add `Stat` KPI card component (titles, values, descriptions, icons & color accents)
- Add `FileInput` form upload component (sizes, colors, borders, error states)
- Add `Divider` visual separator component (horizontal/vertical layout, custom labels, start/center/end positions)

## v2.5.0 - New Advanced Forms & Navigation Components (Block 2)

### 👾 Feature

- Add `Toggle` / `Switch` form component (sizes, colors, labels, error states)
- Add `TextArea` multiline form component (rows, sizes, colors, error states)
- Add `Breadcrumb` navigation component (icons, links, active state)
- Add `Pagination` control component (join layout, active page, prev/next buttons)
- Add `Steps` wizard component (horizontal/vertical layout, step states)
- Add `Tooltip` floating info component (positions & color themes)

## v2.4.0 - New Core Components (Block 1)

### 👾 Feature

- Add `Modal` component (dialogs, backdrops, sizes, custom actions)
- Add `Alert` component (info, success, warning, error variants with dismiss & icon support)
- Add `Toast` component (configurable positions & alert color themes)
- Add `Card` component (images, titles, subtitles, actions, compact & glass variants)
- Add `Tabs` component (bordered, lifted, boxed variants with disabled states)
- Add `Skeleton` component (text, circular, rectangular shimmer loading states)
- Add `Spinner` component (spinner, dots, ring, ball, bars, infinity loading variants)

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
