const base = require('./typescript');

module.exports = Object.assign({}, base, {
  extends: require.resolve('eslint-config-airbnb'),
  rules: Object.assign({}, base.rules, {
    'react/jsx-file-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
  }),
});
