const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry : './src/main.js',
  output : {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module : {
    rules: [{ test: /\.js$/, use: 'babel-loader' },
    {
      test: /\.css$/,
      use: [
        { loader: MiniCssExtractPlugin.loader },
        { loader: 'css-loader', options: { import: true }},
      ],
    },],
  },
  devServer: {
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }), 
    new MiniCssExtractPlugin()
  ],
}
