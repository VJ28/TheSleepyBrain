const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const LoadablePlugin = require("@loadable/webpack-plugin").default;
const stylemugCompiler = require("stylemug/compiler");
const CompressionPlugin = require("compression-webpack-plugin");
const BrotliCompressionPlugin = require("brotli-webpack-plugin");

const config = {
  entry: {
    app: "./client/index.js",
  },
  /* for development */
  devServer: {
    contentBase: path.join(__dirname, "dist/public"),
    compress: false,
    port: 8081,
    historyApiFallback: true,
  },
  devtool: "cheap-source-map",
  output: {
    path: path.resolve(__dirname, "dist/public/"),
    publicPath: "/",
    chunkFilename: "[name].js",
    filename: "[name].js",
  },
  optimization: {
    minimize: false, // true for production
    minimizer: [new TerserPlugin({ extractComments: false })],
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              stylemugCompiler.babel,
              "@babel/plugin-syntax-dynamic-import",
              "@loadable/babel-plugin",
            ],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      Styles: path.resolve(__dirname, "./client/styles.js"),
    },
  },
  plugins: [
    new stylemugCompiler.webpack({
      name: "bundle.css",
    }),
    new MiniCssExtractPlugin(),
    new LoadablePlugin(),
    new BrotliCompressionPlugin({
      test: /\.js$|\.css$/,
      asset: "[path].br[query]",
      minRatio: 0.8,
    }),
    new CompressionPlugin({
      algorithm: "gzip",
      test: /\.js$|\.css$/,
      minRatio: 0.8,
    }),
  ],
};

module.exports = config;
