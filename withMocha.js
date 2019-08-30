const base = require('.');
const rules = require('./rules/mocha');

module.exports = {
  // eslint-disable-next-line prefer-object-spread
  env: Object.assign({}, base.env, {
    mocha: true,
  }),
  plugins: [
    'mocha',
  ],
  // eslint-disable-next-line prefer-object-spread
  rules: Object.assign({}, {
    // Chai asserts on property access
    'no-unused-expressions': 'off',
  }, rules),
};
