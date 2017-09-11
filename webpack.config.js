const path = require("path");
const PluginHtml = require("html-webpack-plugin");

module.exports = {
  devtool: "cheap-module-source-map",
  entry: "./src/index.js",
  output: {
    pathinfo: true,
    path: path.resolve("dist"),
    publicPath: "/",
    chunkFilename: "[name].chunk.js",
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(?:png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "file-loader",
          }
        ]
      },
      {
        include: path.resolve("src"),
        test: /\.jsx?/,
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: false,
              presets: ["react-app"]
            }
          }
        ]
      }
    ]
  },
  plugins: [new PluginHtml()]
};
