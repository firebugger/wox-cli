const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: path.resolve(__dirname, 'src/index'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
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
    new ExtractTextPlugin('styles.css')
  ],
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.web.js', '.js', '.json', '.jsx', '.less']
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

module.exports = config;
