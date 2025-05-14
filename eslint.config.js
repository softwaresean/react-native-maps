import {FlatCompat} from '@eslint/eslintrc';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {},
  allConfig: {},
});

export default [
  ...compat.config({
    root: true,
    extends: '@react-native',
    settings: {
      react: {
        version: '19.1.0',
      },
    },
    rules: {
      'react-native/no-inline-styles': 'off',
    },
  }),

  {
    plugins: {
      // If other plugins need compatibility patching, add them here
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          // jsx: true,
        },
      },
    },
  },

  {
    ignores: [
      'dist/**',
      'plugin/build/**',
      'example/**',
      'babel.config.js',
      '.detoxrc.js',
      '**/*.config.js', // Exclude all config.js files (they're typically CommonJS)
      'node_modules/**',
    ],
  },
];
