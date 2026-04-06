import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

const eslintConfig = defineConfig([
  // Базовые конфиги Next.js
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'node_modules/**',
    '.history/**',
  ]),
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      import: importPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // Сортировка импортов
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // 1. Внешние библиотеки (самые важные первыми)
            ['^react', '^next', '^@?\\w'], // react, next, zustand, lodash и любые другие пакеты

            // 2. Относительные импорты (совпадает с fsd/ordered-imports: non-FSD перед слоями)
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],

            // 3. Слои FSD в правильном порядке (от верхних к нижним)
            ['^@/app'],
            ['^@/entities'],
            ['^@/features'],
            ['^@/store'],
            ['^@/i18n'],
            ['^@/ui'],

            // 4. Стили (scss, css и т.д.)
            ['^.+\\.s?css$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',

      // Правила импортов
      'import/first': 'error',
      'import/newline-after-import': ['error', { count: 1 }],
      'import/no-duplicates': 'error',

      // Запрет дефолтных экспортов (глобально)
      'import/no-default-export': 'error',

      'prettier/prettier': 'error',

      semi: 'off',
      'arrow-body-style': ['error', 'as-needed'],
      'react/self-closing-comp': 'error',
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'no-empty': 'error',
    },
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
    },
  },

  // Исключения для Next.js App Router
  {
    files: ['src/app/**/*.{ts,tsx}'],
    rules: {
      'import/no-default-export': 'off',
      'import/prefer-default-export': 'error',
    },
  },
  {
    files: ['src/**/*.slice.{ts,js,mjs}'],
    rules: {
      'import/no-default-export': 'off',
    },
  },

  // Исключения для конфигов в корне (next.config.ts, eslint.config.mjs и т.д.)
  {
    files: ['*.{js,mjs,ts}'],
    rules: {
      'import/no-default-export': 'off',
    },
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      'import/no-default-export': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },

  prettierConfig,
]);

export default eslintConfig;
