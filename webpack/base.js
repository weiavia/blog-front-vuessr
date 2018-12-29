const { absoluteDir } = require('./tool')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports =  {
  output: {
    path: absoluteDir('../public'),
    filename: '[name]-[hash].js',
    publicPath: 'http://127.0.0.1:3333/public/'
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
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: 'images/[name]-[hash].[ext]'
            }
          }
        },
        {
          test: /\.(woff|woff2|svg|eot|ttf)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: 'fonts/[name]-[hash].[ext]'
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