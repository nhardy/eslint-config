// @flow

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: 'commonjs',
        loose: true,
        targets: {
          node: '8.0.0',
        },
      },
    ],
    [
      '@babel/preset-stage-0',
      {
        decoratorsLegacy: true,
      },
    ],
    '@babel/preset-flow',
  ],
  plugins: [
    'babel-plugin-add-module-exports',
  ],
};
