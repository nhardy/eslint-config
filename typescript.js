const base = require('.');

module.exports = {
  ...base,
  parser: require.resolve('typescript-eslint-parser'),
  plugins: [
    ...base.plugins,
    'typescript',
  ],
  rules: {
    ...base.rules,
    // Handled by the TypeScript compiler instead
    // @see https://github.com/eslint/typescript-eslint-parser/issues/414
    'no-restricted-globals': 'off',
    // Handled by the TypeScript compiler instead
    'no-undef': 'off',
    // Handled by 'typescript/no-unused-vars'
    'no-unused-vars': 'off',
    'typescript/no-unused-vars': 'error',
    // Handled by 'typescript/no-use-before-define'
    'no-use-before-define': 'off',
    'typescript/no-use-before-define': ['error', { functions: false, typedefs: false }],
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
    'typescript/adjacent-overload-signatures': 'error',
    'typescript/class-name-casing': 'error',
    'typescript/explicit-member-accessibility': 'error',
    'typescript/interface-name-prefix': 'error',
    'typescript/member-delimiter-style': ['error', { delimiter: 'semi', requireLast: true, ignoreSingleLine: true }],
    'typescript/member-ordering': 'error',
    'typescript/no-angle-bracket-type-assertion': 'error',
    'typescript/no-empty-interface': 'error',
    'typescript/no-explicit-any': 'warn',
    'typescript/no-namespace': ['error', { allowDefinitionFiles: true }],
    'typescript/type-annotation-spacing': 'error',
  },
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
};
