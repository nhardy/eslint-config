const base = require('./typescript');
const react = require('./react');

module.exports = Object.assign({}, base, {
  extends: require.resolve('eslint-config-airbnb'),
  rules: Object.assign({}, base.rules, react.rules, {
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    // Conflicts with typescript/member-ordering
    'react/sort-comp': 'off',
  }),
});
