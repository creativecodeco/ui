import React from 'react';

import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';

import { CreativeCodeUIProvider } from '../lib';

import '../lib/theme/main.css';

const preview: Preview = {
  parameters: {
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
  ],

  tags: ['autodocs', 'autodocs']
};

export default preview;
