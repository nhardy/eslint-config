const base = require('./typescript');

module.exports = Object.assign({}, base, {
  extends: require.resolve('eslint-config-airbnb'),
  rules: Object.assign({}, base.rules, {
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    // Conflicts with typescript/member-ordering
    'react/sort-comp': 'off',
  }),
});
