const path = require('path');
const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const env = process.env.NODE_ENV;

const config = {
  entry: './app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist',
    filename: 'app.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new DashboardPlugin()
  ],
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx', '.json', '.less'],
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
        loader: 'style!css!postcss?parser=postcss-less'
      },
      {
        test: /\.mod\.(less|css)$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss?parser=postcss-less'
      },
      {
        test: /\.(gif|jpe?g|png|ico)$/,
        loader: 'url?limit=1024&name=[name]-[sha512:hash:base64:7].[ext]&outputPath=/images/'
      }
    ]
  }
};

module.exports = config;
