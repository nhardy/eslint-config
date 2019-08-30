module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
  ].map(require.resolve),
  env: {
    browser: true,
    node: true,
  },
  plugins: [],
  rules: {
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'max-len': ['error', { code: 120, tabWidth: 2, ignoreUrls: true }],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 1 }],
    // Override airbnb rule to allow mixing standard operations
    // @see https://eslint.org/docs/rules/no-mixed-operators.html
    'no-mixed-operators': [
      'error',
      {
        groups: [
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: true,
      },
    ],
    'no-return-assign': ['error', 'except-parens'],
    'no-underscore-dangle': 'off',
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'no-warning-comments': [
      'warn',
      {
        terms: ['todo', 'fixme', 'xxx', 'kludge'],
        location: 'anywhere',
      },
    ],
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
    'require-jsdoc': 'error',
    'import/no-cycle': 'off',
    'import/order': ['error', { groups: [['builtin', 'external'], ['internal']], 'newlines-between': 'never' }],
  },
};
