import base from './index';


export default {
  ...base,
  env: {
    node: true,
  },
  rules: {
    ...base.rules,
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
  },
};
