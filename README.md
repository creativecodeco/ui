# @creativecodeco/ui

![CreativeCode.com.co](https://www.creativecode.com.co/wp-content/uploads/2024/01/CreativeCode.png)

> React 19 UI component library & Design System built with TypeScript, Tailwind CSS v4, and DaisyUI v5 by CreativeCode.

![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Tailwindcss](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Daisyui](https://img.shields.io/badge/daisyUI-16D1A5?style=for-the-badge&logo=daisyui&logoColor=white) ![Storybook](https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)

## Links & Live Preview

- **Storybook / Chromatic**: [View Interactive Components](https://master--658273f7c6c3c10a909dea3b.chromatic.com/)
- **NPM Package**: [@creativecodeco/ui](https://www.npmjs.com/package/@creativecodeco/ui)
- **Website**: [CreativeCode.com.co](https://creativecode.com.co)

---

## Configuration

> [!NOTE]
> This library is designed for **React 19** and uses **Tailwind CSS v4** and **DaisyUI v5**. The configuration is primarily CSS-first.

### Install

```bash
npm install @creativecodeco/ui
# or
yarn add @creativecodeco/ui
```

### Dependencies

Ensure you have the required dependencies for Tailwind v4 and PostCSS:

```bash
npm install --save-dev tailwindcss @tailwindcss/postcss postcss
# or
yarn add -D tailwindcss @tailwindcss/postcss postcss
```

### Setting PostCSS

Create or update your `postcss.config.js`:

```js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}
  }
};
```

### Setting Tailwind CSS

In your main CSS entry point (e.g., `globals.css` or `main.css`), import Tailwind and DaisyUI:

```css
@import 'tailwindcss';
@plugin "daisyui";

/* Optional: Custom Theme Configuration */
@theme {
  --color-primary: #08448c;
  --color-secondary: #427aa1;
  --color-accent: #679436;
  --color-neutral: #ebf2fa;
}
```

#### Backwards Compatibility (Optional)

If you prefer using a `tailwind.config.js` file, you can import it in your CSS:

```css
@import 'tailwindcss';
@config "../tailwind.config.js";
@plugin "daisyui";
```

### Setting Provider

Wrap your application with the `CreativeCodeUIProvider` to automatically apply the design system's theme and styles.

Add on layout `layout.tsx` (for Next.js) or your root component:

```tsx
import { CreativeCodeUIProvider } from '@creativecodeco/ui';

// Import the design system CSS
import '@creativecodeco/ui/lib/theme/css/main.css';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <CreativeCodeUIProvider>{children}</CreativeCodeUIProvider>
      </body>
    </html>
  );
}
```

## Features

- **Display Components**: Accordion, Aura, Avatar, AvatarGroup, Badge, Button, Card, Carousel, ChatBubble, Hover3D, HoverGallery, Indicator, Kbd, List, Mask, Rating, Stat, Status, Swap, Table, TextRotate, Timeline.
- **Feedback Components**: Alert, Countdown, Diff, Modal, Progress, RadialProgress, Skeleton, Spinner, Toast, Tooltip.
- **Layout Components**: Collapse, Divider, Footer, Hero, Join, Mockup, Stack.
- **Navigation Components**: ActionDropdown, Breadcrumb, Dock, Drawer, Fab, Link, MegaMenu, Menu, Navbar, Pagination, Steps, Tabs.
- **Form Controls**: Calendar, Checkbox, Dropdown, Fieldset, FileInput, Filter, Label, Otp, Radio, RadioList, Range, Select, TextArea, TextBox, Toggle, Validator.
- **Theme Support**: Built on DaisyUI with custom CreativeCode branding.
- **Visual Testing**: Integrated with Storybook and Chromatic.

## Development

- `npm run dev`: Start Storybook for component development.
- `npm run build`: Build the library for production.
- `npm test`: Run unit tests with Jest.

## License

MIT © [CreativeCode.com.co](https://github.com/creativecodeco)
Web [CreativeCode.com.co](https://creativecode.com.co)
