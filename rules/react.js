module.exports = {
  // This rule causes issues with asynchronous code
  'react/destructuring-assignment': 'off',
  // Override eslint-config-airbnb default of requiring both nesting and id
  'jsx-a11y/label-has-associated-control': [
    'error',
    { assert: 'either' },
  ],
  'jsx-a11y/label-has-for': ['error', {
    components: [],
    required: {
      some: ['nesting', 'id'],
    },
    allowChildren: false,
  }],
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'warn',
};
