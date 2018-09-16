const base = require('.');

module.exports = Object.assign({}, base, {
  extends: require.resolve('eslint-config-airbnb'),
  rules: {
    // This rule causes issues with asynchronous code
    'react/destructuring-assignment': 'off',
  },
});
