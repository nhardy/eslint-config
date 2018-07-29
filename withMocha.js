const base = require('.');

module.exports = {
  env: Object.assign({}, base.env, {
    mocha: true,
  }),
  plugins: [
    'mocha',
  ],
  rules: {
    // Chai asserts on property access
    'no-unused-expressions': 'off',
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-nested-tests': 'error',
    'mocha/no-skipped-tests': 'warn',
    'mocha/no-pending-tests': 'warn',
    'mocha/handle-done-callback': 'error',
    'mocha/no-global-tests': 'error',
  },
};
