const path = require("path");

const resolve = dir => path.resolve(__dirname, dir);

module.exports = function(config, env) {
  config.resolve.alias = Object.assign(config.resolve.alias, {
    "@config": resolve("src/config"),
    "@view": resolve("src/view"),
    "@util": resolve("src/util"),
  });

  return config;
};