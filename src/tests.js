// @flow

import base from './index';
import { tests as globals } from './lib/globals';


export default {
  ...base,
  env: {
    ...base.env,
    mocha: true,
  },
  plugins: [
    ...base.plugins,
    'mocha',
  ],
  rules: {
    ...base.rules,
    /**
     * `chai` asserts on property access
     *  @see https://github.com/eslint/eslint/issues/2102
     */
    'no-unused-expressions': 'off',
    // Padded blocks make tests clearer
    'padded-blocks': 'off',
    // Allow requiring of devDependencies
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-nested-tests': 'error',
    'mocha/no-skipped-tests': 'warn',
    'mocha/no-pending-tests': 'warn',
    'mocha/handle-done-callback': 'error',
    'mocha/no-global-tests': 'error',
  },
  globals,
};
