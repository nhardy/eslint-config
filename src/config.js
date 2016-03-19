export default {
  extends: require.resolve('eslint-config-airbnb'),
  parser: require.resolve('babel-eslint'),
  rules: {
    'arrow-body-style': 0,
    'no-param-reassign': [2, { props: false }],
  },
  globals: {
    __CLIENT__: false,
    __DEV__: false,
    __DEVELOPMENT__: false,
    __SERVER__: false,
  },
};
