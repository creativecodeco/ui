import React from 'react';

import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';

import '../dist/theme/main.css';
import { CreativeCodeUIProvider } from '../lib';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    docs: {
      theme: themes.light
    }
  },
  decorators: [
    (Story) => (
      <CreativeCodeUIProvider>
        <Story />
      </CreativeCodeUIProvider>
    )
  ]
};

export default preview;
