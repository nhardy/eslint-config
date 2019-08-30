const base = require('./typescript');
const rules = require('./rules/react');

// eslint-disable-next-line prefer-object-spread
module.exports = Object.assign({}, base, {
  extends: require.resolve('eslint-config-airbnb'),
  plugins: [].concat(
    base.plugins,
    'react-hooks',
  ),
  // eslint-disable-next-line prefer-object-spread
  rules: Object.assign({}, base.rules, rules, {
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    // With TypeScript, we can have more guarantees about what props are being passed down
    'react/jsx-props-no-spreading': 'off',
    // Conflicts with typescript/member-ordering
    'react/sort-comp': 'off',
  }),
});
