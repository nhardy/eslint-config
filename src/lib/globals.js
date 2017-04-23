// @flow

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

function keysToObject<T>(keys: string[], value: T): { [key: string]: T } {
  return keys.reduce((acc, key) => {
    acc[key] = value;
    return acc;
  }, {});
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
