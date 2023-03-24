module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:vitest/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'vitest'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'jsx-a11y/click-events-have-key-events': 0,
  },
};
