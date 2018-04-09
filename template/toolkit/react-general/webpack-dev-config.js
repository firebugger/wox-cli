import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import DashboardPlugin from 'webpack-dashboard/plugin';
const path = require('path');

const config = {
  devtool: 'cheap-module-eval-source-map',
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
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin('styles.css'),
    new DashboardPlugin()
  ],
  resolve: {
    extensions: ['.web.js', '.js', '.jsx', '.json', '.less']
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
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  autoprefixer,
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
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  autoprefixer,
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
                modules: true,
                importLoaders: 2,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  autoprefixer,
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
            limit: 10000000,
          }
        },
      },
      {
        test: /\.(gif|jpe?g|png|ico)$/,
        use: {
          loader: 'url',
          options: {
            limit: 10000000,
          }
        },
      },
    ],
  },
};

export default config;
