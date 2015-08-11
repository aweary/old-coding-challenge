var resolve = require('path').resolve
var HtmlWebpackPlugin = require('html-webpack-plugin')
var root = resolve(__dirname)
var source = resolve(root, 'src/js')

module.exports = {

  entry: {
    app: resolve(source, 'app'),
    common: ['react']
  },
  resolve: {
    alias: {
      'userData.js': resolve(root, 'userData.js'),
      'main.css': resolve(root, 'src/styles/main.css')
    }
  },
  output: {
    path: resolve(root, 'dist'),
    filename: '[name].js',
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel'},
      { test: /\.css$/, loader: 'style!css'}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html'
    })
  ],
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  }
}
