const { absoluteDir } = require('./tool')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const base = require('./base')
const VueClientPlugin = require('vue-server-renderer/client-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = webpackMerge(base, {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: absoluteDir('../src/client-entry.js'),
  output: {
    path: absoluteDir('../public'),
    filename: '[name]-[hash].js',
    publicPath: 'http://127.0.0.1:9000'
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,"css-loader"]
      },
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 9000,
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style/[name]-[hash].css',
    }),
    new VueClientPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})