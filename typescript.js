const base = require('.');

// eslint-disable-next-line prefer-object-spread
module.exports = Object.assign({}, base, {
  parser: require.resolve('@typescript-eslint/parser'),
  plugins: [].concat(
    base.plugins,
    '@typescript-eslint',
  ),
  // eslint-disable-next-line prefer-object-spread
  rules: Object.assign({}, base.rules, {
    // Handled by the TypeScript compiler instead
    // @see https://github.com/eslint/typescript-eslint-parser/issues/443
    'no-redeclare': 'off',
    // Handled by the TypeScript compiler instead
    // @see https://github.com/eslint/typescript-eslint-parser/issues/414
    'no-restricted-globals': 'off',
    // Handled by the TypeScript compiler instead
    'no-undef': 'off',
    // Handled by @typescript-eslint/no-unused-expressions
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    // Handled by '@typescript-eslint/no-unused-vars'
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    // Handled by '@typescript-eslint/no-use-before-define'
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, typedefs: false }],
    // Handled by '@typescript-eslint/no-useless-constructor'
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    // Allow TypeScipt '/// <reference />' comments
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
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
    // Handled by the TypeScript compiler instead
    // @see https://github.com/benmosher/eslint-plugin-import/issues/1120
    'import/named': 'off',
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: {
          constructors: 'no-public',
          parameterProperties: 'off',
        },
      },
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: { delimiter: 'semi', requireLast: true },
        singleline: { delimiter: 'semi', requireLast: false },
      },
    ],
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'class',
        format: ['PascalCase'],
      },
      {
        selector: 'interface',
        prefix: 'I',
        format: ['PascalCase'],
      },
    ],
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow' },
    ],
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-namespace': ['error', { allowDefinitionFiles: true }],
    '@typescript-eslint/type-annotation-spacing': 'error',
  }),
  settings: {
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
});
