const base = require('./typescript');

module.exports = Object.assign({}, base, {
  extends: require.resolve('eslint-config-airbnb'),
});
