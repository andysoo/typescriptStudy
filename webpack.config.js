const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',

  entry: path.resolve(__dirname, './src/index.ts'),

  output: {
    path: path.resolve(__dirname, './dist'),

    filename: 'index.js'
  },

  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader'
    }]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  }



}