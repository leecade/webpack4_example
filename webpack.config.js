const HtmlWebpackPlugin = require('html-webpack-plugin') //installed via npm
const webpack = require('webpack') //to access built-in plugins
const path = require('path')

module.exports = {
  watch: true,
  mode: 'development',
  devtool: 'source-map',
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './index.js',
    vendor: ['react']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: 'file-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html'),
      inject: 'body'
    })
  ],
  devServer: {
    noInfo: true,
    port: 9000
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}
