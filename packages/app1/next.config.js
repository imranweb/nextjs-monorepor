const withTM = require('next-transpile-modules');

// module.exports = {
//   webpack(config, options) {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       'shared': require.resolve('shared'),
//     };
  
//     return config;
//   },
// };

module.exports = withTM({
  transpileModules: ['shared']
});