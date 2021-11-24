module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/no-unstable-nested-components': 'off',
    'react/no-namespace': 'off',
    'react/prefer-exact-props': 'off',
    'react/no-arrow-function-lifecycle': 'off',
    'react/no-invalid-html-attribute': 'off',
    'react/no-unused-class-component-methods': 'off',
    'import/no-import-module-exports': 'off',
    'import/no-relative-packages': 'off',
  },
};
