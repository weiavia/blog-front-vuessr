const optimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueClientPlugin = require('vue-server-renderer/client-plugin')
const { absoluteDir } = require('./tool')
var webpackMerge = require('webpack-merge')
var base = require('./base')

module.exports = webpackMerge(base, {
  mode: 'production',
  entry: absoluteDir('../src/client-entry.js'),
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style/[name]-[hash].css',
    }),
    new optimizeCssPlugin(),
    new CleanWebpackPlugin(['public'],{root: absoluteDir('../')}),
    new VueClientPlugin()
  ],
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
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 20000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true
    }
  }
})