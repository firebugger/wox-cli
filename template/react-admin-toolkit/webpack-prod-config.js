const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pxtorem = require('postcss-pxtorem');
const find = require('find');
const path = require('path');

const files = find.fileSync('./src/js/');
const entrys = {};
const entrysArr = [];
const re = /[\w\W]*src\/([\w\W]+)\.js$/;

for (let i = 0; i < files.length; i++) {
  if (/\.entry\.js$/.test(files[i])) {
    const filei = files[i].replace(re, '$1');
    entrys[filei] = `./${files[i]}`;
    entrysArr.push(filei);
  }
}

const config = {
  entry: entrys,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '//static.quimg.com/gtour/dist/',
    filename: '[name].js',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __DEV__: false,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'js/common/common.js',
      chunks: entrysArr,
      minChunks: Math.ceil(entrysArr.length * 2 / 3),
    }),
    new ExtractTextPlugin('[name].css')
  ],
  resolve: {
    modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
    extensions: ['', '.web.js', '.js', '.json', '.jsx', '.less'],
    alias: {
      app: path.resolve(__dirname, 'src/js'),
      style: path.resolve(__dirname, 'src/styles'),
    },
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: /node_modules/,
      },
      {
        test: /\.(less|css)$/,
        exclude: /\.mod\.(less|css)/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss?parser=postcss-less')
      },
      {
        test: /\.mod\.(less|css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss?parser=postcss-less')
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
        loader: 'url?limit=10000',
      },
      {
        test: /\.(gif|jpe?g|png|ico)$/,
        loader: 'url?limit=10000',
      },
    ],
  },
  postcss() {
    return [
      require('precss'),
      require('autoprefixer'),
    ];
  },
};

for (let j = 0; j < entrysArr.length; j++) {
  const pathname = path.basename(entrysArr[j]).split('.')[0];
  const conf = {
    filename: `${pathname}.html`,
    template: './src/template.html',
    inject: 'body',
    favicon: './src/favicon.ico',
    title: pathname,
    hash: false,
    minify: {
      removeComments: true,
      collapseWhitespace: false,
    },
    chunks: ['common', entrysArr[j]],
  };
  config.plugins.push(new HtmlWebpackPlugin(conf));
}

module.exports = config;
