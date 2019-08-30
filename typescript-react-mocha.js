const rules = require('./rules/mocha');

module.exports = {
  extends: require.resolve('./typescript-react'),
  plugins: [
    'mocha',
  ],
  // eslint-disable-next-line prefer-object-spread
  rules: Object.assign({}, rules),
};
