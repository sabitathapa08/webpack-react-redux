const path = require("path");
const fs = require('fs');
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', './index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react-webpack.bundle.js'
  },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
            test: /\.html$/,
            use: {
              loader: "html-loader"
            }
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          }
      ]
    },
    resolve: {
      extensions: [".js", ".jsx", ".react.js", ".json"],
      mainFields: ["browser", "jsnext:main", "main"]
    },
    devServer: {
      contentBase: path.join(__dirname, "public/"),
      hot: true
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.NamedChunksPlugin(),
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify("development")
      }),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebPackPlugin ({
            template: "./index.html",
            filename: "index.html",
            inject: true
      })
    ]
  };