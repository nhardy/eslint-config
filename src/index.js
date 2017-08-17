// @flow

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
    'generator-star-spacing': ['error', {
      before: false,
      after: true,
    }],
    'max-len': ['warn', 150, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'no-mixed-operators': ['error', {
      groups: [
        ['+', '-', '*', '/', '%', '**'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof'],
      ],
      allowSamePrecedence: true,
    }],
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'acc', // for reduce accumulators
        'e', // for e.returnvalue
        'ctx', // for Koa routing
        'req', // for Express requests
        'request', // for Express requests
        'res', // for Express responses
        'response', // for Express responses
        '$scope', // for Angular 1 scopes
        'error',
        'err',
      ]
    }],
    'no-return-assign': ['error', 'except-parens'],
    'no-underscore-dangle': 'off',
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true,
    }],
    'no-warning-comments': ['warn', {
      terms: ['todo', 'fixme', 'xxx', 'kludge'],
      location: 'anywhere',
    }],
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': ['error', { js: 'never' }],
    'import/imports-first': 'error',
    'import/order': ['error', {
      groups: [['builtin', 'external'], ['internal', 'parent', 'sibling', 'index']],
      // TODO: Change when released
      'newlines-between': 'always', // 'always-and-inside-groups',
    }],
    'import/named': 'error',
    'import/newline-after-import': ['error', {
      count: 2,
    }],
    'import/no-amd': 'error',
    // TODO: Enable when released
    // 'import/no-anonymous-default-export': 'error',
    'import/no-commonjs': 'error',
    'import/no-deprecated': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-as-default': 'error',
    'import/no-restricted-paths': ['error', {
      zones: [
        { target: './src/server', from: './src/client' },
        { target: './src/client', from: './src/server' },
        { target: './src/app', from: './src/client' },
        { target: './src/app', from: './src/server' },
      ],
    }],
    'import/no-unresolved': ['error', { commonjs: true }],
    'import/no-webpack-loader-syntax': 'error',
    'import/prefer-default-export': 'error',
    'react/jsx-filename-extension': 'off',
    // @see https://github.com/yannickcr/eslint-plugin-react/issues/1157
    'react/no-unused-prop-types': 'off',
    'jsx-a11y/anchor-has-content': ['error', { components: ['Link'] }],
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
