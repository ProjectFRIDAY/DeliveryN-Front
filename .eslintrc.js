module.exports = {
  root: true,
  env: {
    node: true,
    'react-native/react-native': true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks', 'react-native', 'prettier', 'simple-import-sort', 'import'],
  extends: [
    '@react-native-community',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:react-native/all',
  ],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/named': 0,
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'react-native/no-unused-styles': 0,
    'react-native/no-inline-styles': 0,
    semi: [2, 'always'],
    quotes: [2, 'single', {avoidEscape: true}],
    'prettier/prettier': 2,
    'no-console': 1,
    'react/prop-types': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': ['.js', 'jsx'],
  },
};
