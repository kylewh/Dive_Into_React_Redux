const path = require('path')
const webpack = require('webpack')
const Uglify = require('uglifyjs-webpack-plugin')

module.exports = {
  context: __dirname,
  entry: './app/app.js',
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  stats: {
    color: true,
    reasons: true,
    chunks: true
  },
  plugins: [
    new Uglify()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}