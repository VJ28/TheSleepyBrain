const path = require("path");
const stylemugCompiler = require("stylemug/compiler");
const nodeExternals = require("webpack-node-externals");
const LoadablePlugin = require("@loadable/webpack-plugin").default;

module.exports = {
  entry: "./backend/index.js",
  target: "node",
  externals: [nodeExternals()],

  output: {
    path: path.resolve("./dist"),
    filename: "index.js",
  },
  devtool: "cheap-eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [stylemugCompiler.babel, "@loadable/babel-plugin"],
          },
        },
      },
    ],
  },
  plugins: [new LoadablePlugin()],
};
