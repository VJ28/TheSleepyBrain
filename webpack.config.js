const TerserJSPlugin = require("terser-webpack-plugin");
const Style9Plugin = require("style9/webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: {
    app: ["./client/index.js"],
  },
  devServer: {
    historyApiFallback: true,
  },
  output: {
    path: path.resolve(__dirname, "dist/public/"),
    publicPath: "/",
    chunkFilename: "[name].js",
    filename: "[name].js",
  },
  devtool: "eval-source-map",
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          enforce: true,
          chunks: "all",
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HTMLWebpackPlugin({
      template: "template.html",
    }),
    // new webpack.DefinePlugin({
    //   //<--key to reduce React's size
    //   "process.env": {
    //     NODE_ENV: JSON.stringify("production"),
    //   },
    // }),
    // new webpack.optimize.AggressiveMergingPlugin(),
  ],
};

module.exports = config;
