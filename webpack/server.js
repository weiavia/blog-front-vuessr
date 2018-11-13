const { absoluteDir } = require('./tool')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueServerPlugin = require('vue-server-renderer/server-plugin')
const webpackMerge = require('webpack-merge')
const webpack = require('webpack')
const base = require('./base')

module.exports = webpackMerge(base, {
  target: 'node',
  devtool: 'source-map',
  entry: absoluteDir('../src/server-entry.js'),
  output: {
    libraryTarget: 'commonjs2',
    filename: 'server-entry.js'
  },
  externals: Object.keys(require('../package.json').dependencies),
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style/[name]-[hash].css',
    }),
    new VueServerPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    })
  ],
})