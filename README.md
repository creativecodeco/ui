# @creativecodeco/ui

![CreativeCode.com.co](https://www.creativecode.com.co/wp-content/uploads/2024/01/CreativeCode.png)

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
npm install --save-dev tailwindcss postcss postcss-import autoprefixer usehooks-ts cssnano

or

yarn add -D tailwindcss postcss postcss-import autoprefixer usehooks-ts cssnano
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
  ],
};

export default themeConfig;
```

#### Custom theme

```js
/** @type {import('tailwindcss').Config} */
import { creativeCodeTheme } from '@creativecodeco/ui';

const themeConfig = {
  ...creativeCodeTheme,
  content: [
    ...creativeCodeTheme.content,
    './src/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
  ],
  daisyui: {
    ...creativeCodeTheme.daisyui,
    themes: [
      {
        customTheme: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#08448c',
          secondary: '#427AA1',
          neutral: '#EBF2FA',
          accent: '#679436',
          other: '#A5BE00',
        },
      },
    ],
  },
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
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
};
```

### Setting Provider

Add on layout `layout.tsx`

```tsx
import { CreativeCodeUIProvider } from '@creativecodeco/ui';

import '@creativecodeco/ui/lib/theme/css/main.css';

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

Web [CreativeCode.com.co](https://creativecode.com.co)
