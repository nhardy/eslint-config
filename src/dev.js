// @flow

import base from './index';


export default {
  ...base,
  env: {
    node: true,
  },
  rules: {
    ...base.rules,
    // Allow requiring of devDependencies
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
