const withTM = require('next-transpile-modules');

// module.exports = {
//   target: "serverless",
//   transpileModules: [
//     "../common/button",
//   ]
// };

module.exports = withTM({
  transpileModules: ['shared']
});