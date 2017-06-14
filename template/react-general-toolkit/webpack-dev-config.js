import webpack from 'webpack';
import precss from 'precss';
import autoprefixer from 'autoprefixer';
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

const config = {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: true,
  entry: {
    'index': [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?reload=true',
      `${__dirname}/src/index.js`
    ]
  },
  target: 'web',
  output: {
    path: `${__dirname}/src`,
    publicPath: '/dist',
    filename: '[name].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      __DEV__: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('styles.css')
  ],
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.web.js', '.js', '.jsx', '.json', '.less']
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
        include: path.resolve(__dirname, './src'),
        loader: ExtractTextPlugin.extract('style', 'css!postcss?parser=postcss-less')
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
  postcss: () => [precss, autoprefixer],
};

export default config;
