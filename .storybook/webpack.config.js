const path = require("path");

module.exports = ({ config }) => {
  //config
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("ts-loader")
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
