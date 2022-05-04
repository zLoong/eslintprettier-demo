module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    '@tencent/eslint-config-tencent',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  parser: '@typescript-eslint/parser',
  rules: {
    indent: ['warn', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'max-lines-per-function': ['error', 80],
    'max-len': ['error', 120],
    'max-lines': ['error', 800],
    'prettier/prettier': 'error',
  },
};
