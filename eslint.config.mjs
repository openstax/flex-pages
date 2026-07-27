/* spell-checker: ignore tseslint */
import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import-x';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['node_modules', 'dist', 'coverage'] },
  js.configs.recommended,
  {
    plugins: {
      'import-x': importPlugin,
    },
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      quotes: ['warn', 'single'],
      'quote-props': ['warn', 'as-needed'],
      'import-x/order': [
        'warn',
        { 'newlines-between': 'never', alphabetize: { order: 'asc' } },
      ],
      'sort-imports': [
        'warn',
        { ignoreDeclarationSort: true, ignoreCase: true },
      ],
    },
  },
  {
    files: ['**/*.ts?(x)'],
    extends: [
      ...tseslint.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['script/*.ts'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-inferrable-types': [
        'warn',
        { ignoreParameters: true },
      ],
      semi: ['warn'],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'none',
          caughtErrors: 'none',
          ignoreRestSiblings: true,
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    files: ['script/**/*.ts'],
    languageOptions: {
      globals: globals.node,
    },
  },
);
