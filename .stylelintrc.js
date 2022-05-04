module.exports = {
  extends: ['stylelint-config-standard'],
  customSyntax: 'postcss-scss',
  rules: {
    indentation: 4,
    'no-descending-specificity': null,
  },
  ignoreFiles: ['.eslintignore', '.prettierignore', '.*.js', '.vscode/*', '*.json', '*.lock', 'src/*.js', 'src/*.ts'],
};
