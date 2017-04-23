// @flow

export default {
  extends: [
    'plugin:flowtype/recommended',
  ],
  plugins: [
    'flowtype',
  ],
  rules: {
    'no-duplicate-imports': 'off',
    'import/no-duplicates': 'error',
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
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: false,
    },
  },
};
