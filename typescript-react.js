const base = require('.');

module.exports = Object.assign({}, base, {
  extends: require.resolve('eslint-config-airbnb'),
});
