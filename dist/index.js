'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  extends: require.resolve('eslint-config-airbnb'),
  parser: require.resolve('babel-eslint'),
  rules: {
    'arrow-body-style': 0,
    'max-len': [2, 150, 2, { ignoreTrailingComments: true }],
    'no-param-reassign': [2, { props: false }],
    'react/jsx-closing-bracket-location': [2, 'after-props']
  },
  globals: {
    __CLIENT__: false,
    __DEV__: false,
    __DEVELOPMENT__: false,
    __SERVER__: false
  }
};
module.exports = exports['default'];
