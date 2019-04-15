const base = require('./typescript');
const rules = require('./rules/react');

module.exports = Object.assign({}, base, {
  extends: require.resolve('eslint-config-airbnb'),
  plugins: [].concat(base.rules, 'react-hooks'),
  rules: Object.assign({}, base.rules, rules, {
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    // Conflicts with typescript/member-ordering
    'react/sort-comp': 'off',
  }),
});
