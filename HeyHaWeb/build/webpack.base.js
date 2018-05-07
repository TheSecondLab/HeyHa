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
    }, {
      test: /\.less$/,
      exclude: /node_modules/,
      use: [
        'style-loader',
        // Using source maps breaks urls in the CSS loader
        // https://github.com/webpack/css-loader/issues/232
        // This comment solves it, but breaks testing from a local network
        // https://github.com/webpack/css-loader/issues/232#issuecomment-240449998
        // 'css-loader?sourceMap',
        { loader: 'css-loader' },
        { loader: 'less-loader' }
      ],
  },{
    test: /\.css/,
    loader: [
      'style-loader',
      { loader: 'css-loader'},
    ]
}]
  },
  plugins: [
    new CleanWebpackPlugin(['../dist']),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../view/index.html')
    })
  ]
}