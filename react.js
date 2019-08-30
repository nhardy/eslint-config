const base = require('.');
const rules = require('./rules/react');

// eslint-disable-next-line prefer-object-spread
module.exports = Object.assign({}, base, {
  extends: require.resolve('eslint-config-airbnb'),
  plugins: [].concat(
    base.plugins,
    'react-hooks',
  ),
  rules: Object.assign(base.rules, rules),
});
