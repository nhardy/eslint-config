const base = require('.');
const rules = require('./rules/react');

module.exports = Object.assign({}, base, {
  extends: require.resolve('eslint-config-airbnb'),
  rules: Object.assign(base.rules, rules),
});
