const webpack = require('webpack'),
     ExtractTextPlugin = require('extract-text-webpack-plugin'),
     CleanWebpackPlugin = require('clean-webpack-plugin'),
     TimestampWebpackPlugin = require('timestamp-webpack-plugin'),
     UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
    watchOptions: {
      ignored: "**/*.json"
  },
  entry: {
      bundle: './_assets',
  },
  output: {
    path: __dirname + '/assets',
    filename: '[name].min.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                sourceMap: true,
                minimize: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      },
      {
        test: /\.scss$/,
        exclude: /(bootstrap|font-awesome|toc)\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                sourceMap: true,
                //minimize: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                  sourceMap: true
              }
            }
          ]
        }),
      },
      {
        test: /(bootstrap|font-awesome|toc).scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                sourceMap: true,
                minimize: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        }),
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      { 
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },
      {
        test: /\.(png|gif|svg|jpe?g)$/,
        loader: 'file-loader'
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(['assets']),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
    }),
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new ExtractTextPlugin('[name].min.css'),
    new TimestampWebpackPlugin({
      path: __dirname,
      filename: '_timestamp.json'
    })
  ]
};
