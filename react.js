const base = require('.');
const rules = require('./rules/react');

module.exports = Object.assign({}, base, {
  extends: require.resolve('eslint-config-airbnb'),
  plugins: [].concat(base.rules, 'react-hooks'),
  rules: Object.assign(base.rules, rules),
});
