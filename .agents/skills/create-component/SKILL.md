---
name: create-component
description: >-
  Standardized workflow and checklist for creating new UI or Form components in @creativecodeco/ui.
  Use when creating a new component, form control, or interactive element.
---

# Create Component Workflow for @creativecodeco/ui

Follow this standardized workflow and best-practices checklist whenever creating or updating a UI component or Form control in `@creativecodeco/ui`.

---

## Step 1: Define Props Interface

Create the props interface co-located in `src/ui/components/<category>/<component-name>/<component-name>.types.ts` (where `<category>` is `display`, `feedback`, `layout`, or `navigation`) or `src/ui/forms/<component-name>/<component-name>.types.ts` for form controls.

**Rules:**

- Name the interface `<ComponentName>Type` (e.g. `CardType`, `StepsType`, `SelectType`).
- **Always include `className?: string`** on every component interface so consumers can compose layout utilities cleanly.
- **For Form controls (`src/ui/forms/*`)**: Always extend `ErrorType` (`import type { ErrorType } from '@/types'`) so the control supports both `isError?: boolean` and `error?: string`, plus `id?: string`, `name?: string`, `label?: string`, and `disabled?: boolean`.
- Mark all non-mandatory props as optional with `?` to prevent friction in unit tests, Storybook, and React Hook Form `Controller`.
- Use specific types (`React.ReactNode`, `React.Key`, `ColorType`, `SizeType`, etc.) — **zero `any` or implicit types**.
- Re-export the types from the component's `index.ts` (`export type * from './<component-name>.types';`), which automatically flows through `src/types/index.ts`.

### UI Component Interface Example

```ts
import type { ColorType, SizeType } from '@/types';

export interface ComponentNameType {
  children?: React.ReactNode;
  color?: ColorType;
  size?: SizeType;
  disabled?: boolean;
  className?: string;
}
```

### Form Control Interface Example

```ts
import type { ColorType, ErrorType, SizeType } from '@/types';

export interface FormControlNameType extends ErrorType {
  id?: string;
  name?: string;
  label?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  color?: ColorType;
  size?: SizeType;
  disabled?: boolean;
  className?: string;
}
```

---

## Step 2: Implement Component Logic, A11y & Responsive Design

Create `src/ui/components/<category>/<component-name>/<component-name>.component.tsx` (or `src/ui/forms/<component-name>/<component-name>.component.tsx`).

### 2.1 Core Implementation Rules

- Use `classnames` imported as `import cls from 'classnames'`.
- Import types from `@/types`.
- **Safe `className` Merging**: Always destructure `className` and merge it via `cls('base-class', className, { ... })` **after** or separately from `{...restProps}` so spreading HTML attributes never overwrites internal DaisyUI classes.
- **Prevent Custom Prop Leakage to DOM**: Always destructure custom library props (`isError`, `error`, `label`, `color`, `size`, `bordered`) before spreading `{...restProps}` onto native DOM elements (`<input>`, `<textarea>`, `<button>`, `<select>`).
- **Use `forwardRef` on Form Controls**: All form controls (`src/ui/forms/*`) must use `React.forwardRef` and assign `displayName` so `react-hook-form` (`Controller` / `register`) and consumers can attach DOM refs for focus management.
- **Semantic Theme Colors Only**: Always use DaisyUI theme tokens (`primary`, `secondary`, `accent`, `neutral`, `base-100`, `base-200`, `base-300`, `base-content`, `info`, `success`, `warning`, `error`). Never hardcode raw Tailwind palette colors (e.g., `text-red-500`, `bg-black`, `bg-blue-500`). When a component defines a default `color` prop, default to `'primary'` (or `'info'` for status alerts).
- **OWASP Security Hardening**:
  - **URL Sanitization (Anti-XSS)**: Always pass dynamic `href` and `src` props through `sanitizeUrl` from `@/utils` (`href={sanitizeUrl(href)}` for links, `src={sanitizeUrl(src, '')}` for images) and validate external URLs with `isValidUrl` (which enforces `http:` / `https:`) to block `javascript:`, `vbscript:`, and `data:` XSS payloads.
  - **CSS `url(...)` Injection Prevention**: Never interpolate raw strings directly into inline `backgroundImage: url(...)`; sanitize with `sanitizeUrl(image, '').replace(/["'()\\]/g, '')`.
  - **Reverse Tabnabbing Protection**: Whenever rendering `<a target='_blank'>`, always enforce `noopener` and `noreferrer` in `rel` even when a custom `rel` prop is passed.
  - **Forbidden Sinks**: Never use `dangerouslySetInnerHTML`, `innerHTML`, `outerHTML`, `eval`, or `new Function`.
- **Controlled Input Safety (`readOnly` Fallback)**: For checkable or range inputs (`checked` or `value` prop), add `readOnly={checked !== undefined && !onChange}` (or `value !== undefined && !onChange`) so rendering static states in Storybook or tests never triggers React controlled-input console warnings.
- **Strict React `key` Handling**: When iterating arrays, `key` must strictly evaluate to `React.Key` (`string | number | bigint`). Never assign a `React.ReactNode` directly to `key` without narrowing its type (`typeof item.label === 'string' || typeof item.label === 'number' ? item.label : index`).
- Export as `export default ComponentName`.

### 2.2 Accessibility (WAI-ARIA / A11y) Checklist

Every component MUST satisfy these accessibility standards:

- **Form Controls (`src/ui/forms/*`)**:
  - Link `<label className='label' htmlFor={id}>` with the control's `id={id}`.
  - Set `aria-invalid={Boolean(isError || error) || undefined}` on the native form control (`<input>`, `<select>`, `<textarea>`).
  - Render error messages with `role='alert'` (`{error && <span role='alert' className='text-xs text-error mt-1'>{error}</span>}`) so screen readers announce validation errors immediately.
  - Provide fallback `aria-label` when a visual label is optional or when rendering composite controls (e.g., `Otp`, `Rating`, `Swap`, `Collapse`).
- **Interactive & Display Elements**:
  - Use [`useSafeButtonProps`](file:///Users/joaltoroc/Code/creativecodeco/ui/src/hooks/use-safe-button-props.hook.ts) or explicit `type='button'` on non-submit `<button>` elements, plus `aria-disabled` when disabled.
  - Add descriptive `aria-label` on icon-only buttons, close buttons (`aria-label='Close'`), pagination buttons (`aria-label={'Page X'}`), and hidden/mask inputs (`Rating` radio items, `Swap` checkbox, `Collapse` checkbox).
  - Group related radio/action controls with `role='radiogroup'` or `role='group'` and `aria-label`.
- **Feedback & Overlays**:
  - `Alert`: `role='alert'`.
  - `Toast` & `Status` & `Countdown`: `role='status'` (or `role='timer'`) with `aria-live='polite'`.
  - `Modal`: `<dialog open aria-modal='true' aria-label={typeof title === 'string' ? title : 'Modal dialog'}>`.
  - `Progress` & `RadialProgress` & `Loading`: Include `aria-label` (`'Progress'`, `'Loading'`) and `role='progressbar'` / `aria-valuenow` where applicable.
- **Navigation**:
  - Wrap navigation landmarks in `<nav aria-label='...'>`.
  - Mark active items with `aria-current='page'` (`Breadcrumb`, `Pagination`, `Dock`) or `aria-current='step'` (`Steps`).
  - Complete WAI-ARIA tab pattern with `role='tablist'`, `role='tab'` + `aria-selected`, and `role='tabpanel'`.
  - Include `aria-haspopup='true'` and `aria-expanded={open}` on dropdown/megamenu triggers.

### 2.3 Responsive (Mobile-First) & Motion Polish Checklist

- **Prevent Mobile Viewport Overflow**:
  - Overlays and panels with fixed desktop widths must include fluid mobile constraints:
    - `Modal`: `modal-box w-11/12` alongside `max-w-xs` / `max-w-sm` / `max-w-lg` / `max-w-3xl`.
    - `Drawer`: `w-80 max-w-[85vw]`.
    - `Calendar`: `w-72 max-w-full`.
    - `MegaMenu`: `w-screen max-w-md sm:max-w-2xl md:min-w-max` and responsive grid (`grid-cols-1 sm:grid-cols-2 md:grid-cols-3`).
- **Scroll & Wrap Protection**:
  - Wrap data tables in `<div className='overflow-x-auto'>`.
  - Add `overflow-x-auto` to horizontal `Steps` and `flex-wrap` to `Pagination` (`join flex-wrap`) and `Tabs` (`tabs flex-wrap`).
  - Default form controls (`TextBox`, `Select`, `TextArea`, `FileInput`, `Progress`) to `w-full` inside their container.
- **Animations & Tactile Feedback**:
  - Use custom CSS easing tokens defined in `src/theme/main.css` (`--ease-out`, `--ease-in-out`, `--ease-drawer`) rather than `linear` or default `ease`.
  - Animate only compositor-friendly properties (`transform`, `opacity`).
  - Always honor `@media (prefers-reduced-motion: reduce)` when adding custom CSS transitions or keyframe animations in `src/theme/*.css`.

### Form Control Implementation Example

```tsx
import cls from 'classnames';

import type { FormControlNameType } from '@/types';

const FormControlName = ({
  id,
  name,
  label,
  value,
  onChange,
  color,
  size = 'md',
  disabled = false,
  isError,
  error,
  className,
  ...restProps
}: FormControlNameType) => {
  const hasError = Boolean(isError || error);

  return (
    <div className='form-control w-full'>
      {label && (
        <label className='label' htmlFor={id}>
          <span className='label-text'>{label}</span>
        </label>
      )}
      <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        readOnly={value !== undefined && !onChange}
        disabled={disabled}
        aria-invalid={hasError || undefined}
        {...restProps}
        className={cls('input w-full', className, {
          [`input-${color}`]: Boolean(color),
          [`input-${size}`]: Boolean(size),
          'input-error': hasError
        })}
      />
      {error && (
        <span role='alert' className='text-xs text-error mt-1'>
          {error}
        </span>
      )}
    </div>
  );
};

export default FormControlName;
```

---

## Step 3: Configure Module Exports & RHF Controller (If Form Control)

1. Create `src/ui/components/<category>/<component-name>/index.ts` (or `src/ui/forms/<component-name>/index.ts`):
   ```ts
   import ComponentName from './<component-name>.component';

   export { ComponentName };
   export type * from './<component-name>.types';
   export default ComponentName;
   ```
2. Re-export the directory in `src/ui/components/<category>/index.ts` (or `src/ui/forms/index.ts`).
3. **If creating a Form control (`src/ui/forms/*`)**: Register the new control in:
   - `src/types/helpers/controller.types.ts` (`ControllerType` discriminated union).
   - `src/helpers/react-hook-form/controller.component.tsx` (`Controller` switch/branch rendering with `isError={Boolean(error)}` and `error={error?.message}`).

---

## Step 4: Write Unit Tests

Create `src/ui/components/<category>/<component-name>/<component-name>.test.tsx` (or `src/ui/forms/<component-name>/<component-name>.test.tsx`).

**Rules:**

- Test default render and text/children content.
- Test `className` prop merging, variant/size/color classes, and `disabled` / `isError` / `error` states.
- Test accessibility queries (`getByRole`, `getByLabelText`, `aria-invalid`, `role='alert'`).
- Test user interactions (clicks, input changes) and ensure **zero `console.error` or `console.warn` outputs** during test execution.

```tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ComponentName from './<component-name>.component';

describe('<ComponentName />', () => {
  it('renders correctly with children and custom className', () => {
    render(
      <ComponentName className='custom-class'>Test Content</ComponentName>
    );
    expect(screen.getByText('Test Content')).toHaveClass('custom-class');
  });
});
```

---

## Step 5: Write Storybook Stories

Create `src/ui/components/<category>/<component-name>/<component-name>.stories.tsx` (or `src/ui/forms/<component-name>/<component-name>.stories.tsx`).

**Rules:**

- Set `title: '@creativecodeco-ui/<Category>/<ComponentName>'` (where `<Category>` is `Display`, `Feedback`, `Layout`, `Navigation`, or `Form`).
- **Always include `tags: ['autodocs']`** in the default meta export.
- Provide `Default` and key variant stories (`Colors`, `Sizes`, `WithError`, `Disabled`, etc.).

---

## Step 6: Execute Full Validation Suite

After creating or modifying a component, ALWAYS run the full validation suite to guarantee code quality, proper formatting, type safety, test passing, and successful build integrity:

```bash
npm run lint
npm run format:check
npx tsc --noEmit
npm run test
npm run build
```

If any step fails, fix the issue immediately before declaring completion.
