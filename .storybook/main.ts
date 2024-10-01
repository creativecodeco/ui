import path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-webpack5-compiler-swc',
    '@chromatic-com/storybook'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {}
    }
  },
  webpackFinal: async (config, _options) => {
    config.devtool = false;

    config.performance = {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    };

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
    docsMode: true
  },
  typescript: {
    check: true,
    reactDocgen: 'react-docgen'
  }
};
export default config;
