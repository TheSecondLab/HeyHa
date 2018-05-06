const merge = require('webpack-merge');
const webpack = require('webpack');

const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '../dist',
    hot: true
  },
  plugins: [
    // new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})