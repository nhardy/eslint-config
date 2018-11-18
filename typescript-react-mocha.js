const rules = require('./rules/mocha');

module.exports = {
  extends: require.resolve('./typescript-react'),
  plugins: [
    'mocha',
  ],
  rules: Object.assign({}, rules),
};
