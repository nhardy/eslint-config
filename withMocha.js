const base = require('.');
const rules = require('./rules/mocha');

module.exports = {
  env: Object.assign({}, base.env, {
    mocha: true,
  }),
  plugins: [
    'mocha',
  ],
  rules: Object.assign({}, {
    // Chai asserts on property access
    'no-unused-expressions': 'off',
  }, rules),
};
