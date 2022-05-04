module.exports = {
  extends: ['stylelint-config-standard'],
  customSyntax: 'postcss-scss',
  rules: {
    indentation: 4,
    'no-descending-specificity': null,
  },
  ignoreFiles: [
    '.eslintignore',
    '.prettierignore',
    '.stylelintrc.js',
    '.vscode/*',
    'package-lock.json',
    'package.json',
    'yarn.lock',
  ],
};
