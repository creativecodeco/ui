---
name: create-component
description: >-
  Standardized workflow and checklist for creating new UI or Form components in @creativecodeco/ui.
  Use when creating a new component, form control, or interactive element.
---

# Create Component Workflow for @creativecodeco/ui

Follow this standardized 6-step workflow whenever creating a new component or form control in `@creativecodeco/ui`.

---

## Step 1: Define Props Interface

Create the props interface co-located in `src/ui/components/<category>/<component-name>/<component-name>.types.ts` (where `<category>` is `display`, `feedback`, `layout`, or `navigation`) or `src/ui/forms/<component-name>/<component-name>.types.ts` for form controls.

**Rules:**

- Name the interface `<ComponentName>Type` (e.g. `CardType`, `StepsType`).
- Mark all optional props with `?`.
- Use specific types (`React.ReactNode`, `React.Key`, `ColorType`, `SizeType`, etc.).
- Re-export the types from the component's `index.ts` (`export type * from './<component-name>.types';`), which automatically flows through `src/types/index.ts`.

```ts
import type { ColorType } from '@/types';

export interface ComponentNameType {
  children?: React.ReactNode;
  variant?: ColorType;
  disabled?: boolean;
  className?: string;
}
```

---

## Step 2: Implement Component Logic & Layout

Create `src/ui/components/<category>/<component-name>/<component-name>.component.tsx` (or `src/ui/forms/<component-name>/<component-name>.component.tsx`).

**Rules:**

- Use `classnames` imported as `import cls from 'classnames'`.
- Import types from `@/types`.
- Use default parameters for optional props.
- Ensure strict React key handling when mapping arrays: `key={item.id || index}`.
- Export as `export default ComponentName`.

```tsx
import cls from 'classnames';
import type { ComponentNameType } from '@/types';

const ComponentName = ({
  children,
  variant = 'primary',
  disabled = false,
  className
}: ComponentNameType) => {
  return (
    <div
      className={cls('component-base', className, {
        'component-primary': variant === 'primary',
        'component-disabled': disabled
      })}
    >
      {children}
    </div>
  );
};

export default ComponentName;
```

---

## Step 3: Configure Module Exports

1. Create `src/ui/components/<category>/<component-name>/index.ts` (or `src/ui/forms/<component-name>/index.ts`):
   ```ts
   import ComponentName from './<component-name>.component';

   export { ComponentName };
   export type * from './<component-name>.types';
   export default ComponentName;
   ```
2. Re-export the directory in `src/ui/components/<category>/index.ts` (or `src/ui/forms/index.ts`).

---

## Step 4: Write Unit Tests

Create `src/ui/components/<category>/<component-name>/<component-name>.test.tsx` (or `src/ui/forms/<component-name>/<component-name>.test.tsx`).

**Rules:**

- Test default render and text content.
- Test active/disabled states and class assignments.
- Test user interactions (clicks, input changes).

```tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ComponentName from './<component-name>.component';

describe('<ComponentName />', () => {
  it('renders correctly with children', () => {
    render(<ComponentName>Test Content</ComponentName>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
```

---

## Step 5: Write Storybook Stories

Create `src/ui/components/<category>/<component-name>/<component-name>.stories.tsx` (or `src/ui/forms/<component-name>/<component-name>.stories.tsx`).

**Rules:**

- Set `title: '@creativecodeco-ui/<Category>/<ComponentName>'` (where `<Category>` is `Display`, `Feedback`, `Layout`, `Navigation`, or `Form`).
- Include `tags: ['autodocs']`.
- Provide `Default` and variant stories (`Disabled`, `WithIcons`, etc.).

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
