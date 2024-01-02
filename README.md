# @creativecodeco/ui

<img src="https://www.creativecode.com.co/wp-content/uploads/2020/01/CreativeCode.png" alt="CreativeCode.com.co" width="120" />

> System Design CreativeCode.com.co

![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Tailwindcss](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Daisyui](https://img.shields.io/badge/daisyUI-1ad1a5?style=for-the-badge&logo=daisyui&logoColor=white) ![Postcss](https://img.shields.io/badge/postcss-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white) ![Storybook](https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)

## Chromatic

[View Components](https://master--658273f7c6c3c10a909dea3b.chromatic.com/)

## Configuration

### Install

```bash
npm install @creativecodeco/ui

or

yarn add @creativecodeco/ui
```

### Dependencies

```bash
npm install --save-dev tailwindcss postcss postcss-import autoprefixer usehooks-ts

or

yarn add -D tailwindcss postcss postcss-import autoprefixer usehooks-ts
```

### Setting Tailwind

Create file `tailwind.config.js` and add

```js
/** @type {import('tailwindcss').Config} */
import { creativeCodeTheme } from '@creativecodeco/ui';

const themeConfig = {
  ...creativeCodeTheme,
  content: [
    ...creativeCodeTheme.content,
    './src/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './node_modules/@creativecodeco/ui/lib/**/*.{js,jsx,ts,tsx}',
  ],
};

export default themeConfig;
```

### Setting Postcss

Create file `postcss.config.js` and add

```js
module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### Setting Provider

Add on layout `layout.tsx`

```tsx
import { CreativeCodeUIProvider } from '@creativecodeco/ui';

import '@creativecodeco/ui/lib/theme/main.css';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <CreativeCodeUIProvider>
          {children}
        </CreativeCodeUIProvider>
      </body>
    </html>
  );
}
```

## License

MIT © [CreativeCode.com.co](https://github.com/creativecodeco)
