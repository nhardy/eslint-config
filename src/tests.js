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
    'no-unused-expressions': 0,
    // Padded blocks make tests clearer
    'padded-blocks': 0,
    'mocha/no-exclusive-tests': 2,
    'mocha/no-skipped-tests': 1,
    'mocha/no-pending-tests': 1,
    'mocha/handle-done-callback': 2,
    'mocha/no-global-tests': 2,
  },
  globals,
};
