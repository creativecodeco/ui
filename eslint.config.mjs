import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginUnusedImports from 'eslint-plugin-unused-imports';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      '**/node_modules/*',
      'jest.config.js',
      '__tests__/**/*.test.tsx',
      '**.d.ts',
      '**.config.js',
      '**.config.ts',
      'lib/**',
      'coverage/**'
    ]
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      react: pluginReact,
      'unused-imports': pluginUnusedImports,
      prettier: pluginPrettier
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      ...configPrettier.rules,
      'prettier/prettier': 'error',
      semi: 'off',
      '@typescript-eslint/semi': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'react/display-name': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ]
    }
  }
];
