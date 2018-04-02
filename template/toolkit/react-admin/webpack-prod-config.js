const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const find = require('find');
const path = require('path');

const files = find.fileSync('./src/js/');
const entrys = {};
const entrysArr = [];
const isWindows = /^win/.test(process.platform);
const currentDir = __dirname.substr(__dirname.lastIndexOf(isWindows ? '\\' : '/') + 1);
const regSlash = isWindows ? '\\\\' : '\/';
const re = new RegExp('[\\w\\W]*src' + regSlash + '([\\w\\W]+)\\.js$');
for(var i=0;i<files.length;i++){
  if(/\.entry\.js$/.test(files[i])){
    let filei = files[i].replace(re,'$1');

    if (isWindows) {
      filei = filei.replace(/\\/g, '/');
    }
    entrys[filei] = `./${files[i]}`;
    entrysArr.push(filei);
  }
}

const config = {
  entry: entrys,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: `//static.quimg.com/${currentDir}/dist/`,
    filename: '[name].js',
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
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'js/common/common.js',
      chunks: entrysArr,
      minChunks: Math.ceil(entrysArr.length * 2 / 3),
    }),
    new ExtractTextPlugin('[name].css')
  ],
  resolve: {
    extensions: ['.web.js', '.js', '.json', '.jsx', '.less'],
    alias: {
      app: path.resolve(__dirname, 'src/js'),
      style: path.resolve(__dirname, 'src/styles'),
    },
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
        test: /\.(less|css)$/,
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

for (let j = 0; j < entrysArr.length; j++) {
  const pathname = path.basename(entrysArr[j]).split('.')[0];
  const conf = {
    filename: `${pathname}.html`,
    template: './src/template.html',
    favicon: './src/favicon.ico',
    inject: 'body',
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
