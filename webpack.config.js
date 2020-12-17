// const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const fs = require('fs')
const _ = require('lodash')

const pages = fs.readdirSync('./pages')
const entries = {}
const htmls = []
_.each(pages, page => {
  entries[page] = `./pages/${page}/index.js`
  htmls.push(
      new HtmlWebpackPlugin({
        template: `./pages/${page}/index.html`,
        filename: `pages/${page}.html`,
        //增加指定的chunks
        chunks: ['main', 'index'],
      })
  )
})

module.exports = {
  entry: entries,
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
      ...htmls,
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
      chunkFilename: '[id].css',
    })
  ],
}
