module.exports = {
  root: true,
  plugins: ['react', 'react-hooks', 'prettier'],
  extends: [
    '@react-native-community',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    semi: [2, 'always'],
    quotes: [2, 'single', {avoidEscape: true}],
    'prettier/prettier': 2,
  },
  settings: {},
};
