const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/main/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
    filename: 'main-bundle-[hash].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'scss', 'svg', 'jpg', 'png'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ExtractTextPlugin('css/styles.css'),
  ]
}
