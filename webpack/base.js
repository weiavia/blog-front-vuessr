const { absoluteDir } = require('./tool')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports =  {
  output: {
    path: absoluteDir('../public'),
    filename: '[name]-[hash].js'
  },
  module: {
    rules: [
        {
          test: /\.vue$/, 
          loader: 'vue-loader',
        },
        {
          test: /\.js$/,
          exclude: /node_modules/, 
          include: absoluteDir('../src'),
          loader: "babel-loader"
        },
        {
          test: /\.(gif|png|jpg)$/,
          use: {
            loader: 'file-loader',
            options: {
              limit: 8192,
              name: 'images/[name]-[hash].[ext]',
              publicPath: 'http://127.0.0.1:9000'
            }
          }
        },
        {
          test: /\.(woff|woff2|svg|eot|ttf)$/,
          use: {
            loader: 'file-loader',
            options: {
              limit: 1024,
              name: 'fonts/[name]-[hash].[ext]',
              publicPath: 'http://127.0.0.1:9000'
            }
          }
        }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: absoluteDir('../index.html')
    })
  ],
  resolve: {
    extensions: ['.js', '.vue', '.sass', '.json'],
    alias: {
      '@': absoluteDir('../src'),
      'pages': absoluteDir('../src/pages'),
      'components': absoluteDir('../src/components'),
      'common': absoluteDir('../src/common')
    }
  }
}