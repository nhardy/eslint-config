import globals from './lib/globals';


export default {
  extends: require.resolve('eslint-config-airbnb'),
  parser: require.resolve('babel-eslint'),
  env: {
    browser: true,
    node: true,
  },
  plugins: [
    'babel',
  ],
  rules: {
    'arrow-body-style': 0,
    'max-len': [1, 150, 2, { ignoreTrailingComments: true }],
    'no-param-reassign': [2, { props: false }],
    'no-underscore-dangle': 0,
    'no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }],
    'no-warning-comments': [1, { terms: ['todo', 'fixme', 'xxx', 'kludge'], location: 'anywhere' }],
    'import/default': 2,
    'import/export': 2,
    'import/extensions': [2, { js: 'never' }],
    'import/imports-first': 2,
    'import/order': [2, { groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']], 'newlines-between': 'always' }],
    'import/named': 2,
    'import/newline-after-import': 2,
    'import/no-amd': 2,
    'import/no-commonjs': 2,
    'import/no-deprecated': 2,
    'import/no-extraneous-dependencies': 2,
    'import/no-mutable-exports': 2,
    'import/no-named-as-default-member': 2,
    'import/no-restricted-paths': [2, {
      zones: [
        { target: './src/server', from: './src/client' },
        { target: './src/client', from: './src/server' },
        { target: './src/app', from: './src/client' },
        { target: './src/app', from: './src/server' },
      ],
    }],
    'import/no-unresolved': [2, { commonjs: true }],
    'import/prefer-default-export': 2,
    'react/jsx-closing-bracket-location': [2, 'after-props'],
    'react/jsx-filename-extension': 0,
    // TODO: Make this a warning when the rule is fixed
    'react/no-unused-prop-types': 0,
    'jsx-a11y/anchor-has-content': 0,
    // TODO: Remove when this is fixed
    // @see https://github.com/airbnb/javascript/issues/948
    'generator-star-spacing': 0,
    'babel/generator-star-spacing': [2, { before: false, after: true }],
  },
  settings: {
    'import/extensions': ['.js', '.jsx'],
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src', 'test'],
      },
    },
  },
  globals,
};
