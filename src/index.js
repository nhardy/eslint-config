import globals from './lib/globals';


export default {
  extends: require.resolve('eslint-config-airbnb'),
  parser: require.resolve('babel-eslint'),
  env: {
    'browser': true,
    'node': true,
  },
  plugins: [],
  rules: {
    'arrow-body-style': 0,
    'max-len': [2, 150, 2, { ignoreTrailingComments: true }],
    'no-param-reassign': [2, { props: false }],
    'no-warning-comments': [1, { terms: ['todo', 'fixme', 'xxx', 'kludge'], location: 'anywhere' }],
    'react/jsx-closing-bracket-location': [2, 'after-props'],
  },
  globals,
};
