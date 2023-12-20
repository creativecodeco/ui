const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    'storybook-addon-themes'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true
      }
    }
  },
  webpackFinal: async (config, options) => {
    config.resolve?.plugins?.push(new TsconfigPathsPlugin());
    return config;
  },
  docs: {
    autodocs: true,
    docsMode: true
  }
};
export default config;
