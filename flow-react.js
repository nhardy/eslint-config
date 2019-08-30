const base = require('./react');

// eslint-disable-next-line prefer-object-spread
module.exports = Object.assign({}, base, {
  extends: [
    require.resolve('eslint-config-airbnb'),
    'plugin:flowtype/recommended',
  ],
  plugins: [].concat(
    base.plugins,
    'flowtype',
    'react-hooks',
  ),
  // eslint-disable-next-line prefer-object-spread
  rules: Object.assign({}, base.rules, {
    'no-duplicate-imports': 'off',
    'import/no-duplicates': 'error',
    // @see https://github.com/eslint/eslint/issues/5211
    // @see https://github.com/babel/babel-eslint/issues/366
    'space-infix-ops': 'off',
    'react/sort-comp': ['error', {
      order: [
        'type-annotations',
        'static-methods',
        'lifecycle',
        '/^on.+$/',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'everything-else',
        '/^render.+$/',
        'render',
      ],
    }],
    'flowtype/delimiter-dangle': ['error', 'always-multiline'],
    'flowtype/no-weak-types': ['error', { any: false }],
    'flowtype/require-valid-file-annotation': ['error', 'never', { annotationStyle: 'line' }],
    'flowtype/semi': ['error', 'always'],
    'flowtype/generic-spacing': ['error', 'never'],
  }),
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: false,
    },
  },
});
