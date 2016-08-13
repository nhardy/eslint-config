import zipObject from 'lodash/zipObject';


const baseNames = [
  '__CLIENT__',
  '__DEVELOPMENT__',
  '__SERVER__',
];

const testsNames = [
  'expect',
  'proxyquire',
  'sinon',
];

function keysToObject(keys, value) {
  return zipObject(keys, keys.map(() => value));
}

export default {
  // These cannot be modified in the application
  ...keysToObject(baseNames, false),
};

export const tests = {
  // These can be modified for tests only
  ...keysToObject(baseNames, true),
  // These cannot be modified
  ...keysToObject(testsNames, false),
};
