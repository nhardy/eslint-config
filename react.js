const base = require('.');

module.exports = Object.assign({}, base, {
  extends: require.resolve('eslint-config-airbnb'),
  rules: {
    // This rule causes issues with asynchronous code
    'react/destructuring-assignment': 'off',
    // Override eslint-config-airbnb default of requiring both nesting and id
    'jsx-a11y/label-has-for': ['error', {
      components: [],
      required: {
        some: ['nesting', 'id'],
      },
      allowChildren: false,
    }],
  },
});
