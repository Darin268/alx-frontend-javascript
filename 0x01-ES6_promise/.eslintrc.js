// .eslintrc.js

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    // You can add custom rules here
    'no-unused-vars': 'warn',
    'no-console': 'off',
  },
};
