// const tsParser = require('@typescript-eslint/parser');

module.exports = {
  root: true,
  env: { browser: true, es2022: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    // 'plugin:@typescript-eslint/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: {
      ts: '@typescript-eslint/parser',
    },
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['vue'],
  rules: {
    'no-unused-vars': 'off',
  },
};
