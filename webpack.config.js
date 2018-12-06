var path = require('path')
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  entry: './app.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  plugins: [
    // new UglifyJsPlugin()
  ]
};