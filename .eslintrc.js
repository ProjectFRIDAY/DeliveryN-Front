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
  plugins: ['react', 'react-hooks', 'react-native', 'prettier'],
  extends: [
    '@react-native-community',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:react-native/all',
  ],
  rules: {
    semi: [2, 'always'],
    quotes: [2, 'single', {avoidEscape: true}],
    'prettier/prettier': 2,
    'no-console': 1,
    'import/named': 0,
    'react/prop-types': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': ['.js', 'jsx'],
  },
};
