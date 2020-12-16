const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
  entry: {
    index: './pages/index/index.js',
    test: './pages/test/index.js',
  },
  output: {
    filename: 'scripts/[name].js',
    path: __dirname + '/dist',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            cssSourceMap: true,
            transformToRequire: {
              video: ['pages', 'common'],
              source: ['pages', 'common'],
              img: ['pages', 'common'],
              image: 'xlink:href'
            }
          },
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          esModule: false,
          name: 'static/img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/fonts/[name].[hash:7].[ext]'
        }
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  devServer: {
    hot: true,
    host: 'localhost',
    open: 'Google Chrome',
    contentBase: path.join(__dirname, 'dist/pages'),
    compress: true,
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'pages/index.html',
      title: 'index',
      //增加指定的chunks
      chunks: ['main', 'index'],
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'pages/test.html',
      title: 'test',
      //增加指定的chunks
      chunks: ['main', 'test'],
    }),
    new VueLoaderPlugin(),
    // new ExtractTextPlugin('style.css'),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'styles/[name].css',
      chunkFilename: '[id].css',
    })
  ],
}
