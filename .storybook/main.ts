import path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
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
  webpackFinal: async (config, _options) => {
    if (!config.resolve) {
      return config;
    }

    config.resolve.plugins?.push(
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
        configFile: '../tsconfig.json'
      })
    );

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src')
    };

    return config;
  },
  docs: {
    autodocs: true,
    docsMode: true
  }
};
export default config;
