const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude:  /node_modules/,
      use: 'babel-loader'
    }, {
      test: /\.scss$/,
      exclude:  /node_modules/,
      use: [
        "style-loader", 
        {
          loader: "css-loader", 
          options: {
            module: true, // 模块
            localIdentName: '[name]__[local]--[hash:5]' // class命名规则
          }
        },
        "sass-loader"
      ]
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8000
          }
        }
      ],
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['../dist']),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../view/index.html')
    })
  ]
}