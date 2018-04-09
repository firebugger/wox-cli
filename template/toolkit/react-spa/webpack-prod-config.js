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
    extensions: ['.web.js', '.js', '.json', '.jsx', '.less']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' }
        ],
      },
      {
        test: /\.less$/,
        exclude: /\.mod\.(less|css)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  require('autoprefixer'),
                ]
              }
            },
            {
              loader: 'less-loader',
              options: {
                javascriptEnabled: true,
                // modifyVars: {
                //   "primary-color": "#24292e",
                // }
              }
            },
          ]
        }),
      },
      {
        test: /\.css$/,
        exclude: /\.mod\.(less|css)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  require('autoprefixer'),
                ]
              }
            },
          ]
        }),
      },
      {
        test: /\.mod\.(less|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                modules: true,
                importLoaders: 2,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  require('autoprefixer'),
                ]
              }
            },
            {
              loader: 'less-loader',
              options: {
                javascriptEnabled: true,
                // modifyVars: {
                //   "primary-color": "#24292e",
                // }
              }
            },
          ]
        }),
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
        use: {
          loader: 'url',
          options: {
            limit: 1024,
          }
        },
      },
      {
        test: /\.(gif|jpe?g|png|ico)$/,
        use: {
          loader: 'url',
          options: {
            limit: 1024,
          }
        },
      },
    ],
  },
};

module.exports = config;
