module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', '@tencent/eslint-config-tencent', 'standard'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    // indent: ['error', 4],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'max-lines-per-function': ['error', 80],
    'max-len': ['error', 120],
    'max-lines': ['error', 800]
  }
};
