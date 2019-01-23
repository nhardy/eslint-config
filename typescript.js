const base = require('.');

module.exports = Object.assign({}, base, {
  parser: require.resolve('@typescript-eslint/parser'),
  plugins: [].concat(
    base.plugins,
    '@typescript-eslint',
  ),
  rules: Object.assign({}, base.rules, {
    // Handled by the TypeScript compiler instead
    // @see https://github.com/eslint/typescript-eslint-parser/issues/414
    'no-restricted-globals': 'off',
    // Handled by the TypeScript compiler instead
    'no-undef': 'off',
    // Handled by '@typescript-eslint/no-unused-vars'
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    // Handled by '@typescript-eslint/no-use-before-define'
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, typedefs: false }],
    // @see https://github.com/nzakas/eslint-plugin-typescript/issues/101
    'no-useless-constructor': 'off',
    // Allow TypeScipt '/// <reference />' comments
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
    // @see https://github.com/eslint/eslint/issues/5211
    // @see https://github.com/eslint/typescript-eslint-parser/issues/449
    // @see https://github.com/nzakas/eslint-plugin-typescript/issues/85
    'space-infix-ops': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/class-name-casing': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/interface-name-prefix': ['error', 'always'],
    '@typescript-eslint/member-delimiter-style': ['error', { delimiter: 'semi', requireLast: true }],
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/no-angle-bracket-type-assertion': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-namespace': ['error', { allowDefinitionFiles: true }],
    '@typescript-eslint/type-annotation-spacing': 'error',
  }),
  settings: {
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      'typescript-eslint-parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
});
