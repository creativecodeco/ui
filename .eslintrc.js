module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "plugins": ["@typescript-eslint", "unused-imports", "prettier"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "legacyDecorators": true,
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "ignorePatterns": [
    '/**/node_modules/*',
    'jest.config.js',
    '__tests__/**/*.test.tsx',
    '**.d.ts',
    '**.config.js',
    '**.config.ts'
  ],
  "rules": {
    "semi": "off",
    "@typescript-eslint/semi": "off",
    'react-hooks/exhaustive-deps': 'off',
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  "settings": {
    "react": {
      "version": 'detect'
    }
  },
  "env": {
    "node": true,
    "jest": true
  },
}
