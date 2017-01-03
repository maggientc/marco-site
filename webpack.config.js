let debug = process.env.NODE_ENV !== 'production';
let webpack = require('webpack');
let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: debug ? 'inline-source-map' : null,
  entry: './js/client.js',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'latest'],
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint-loader',
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src'),
        loader: ExtractTextPlugin.extract('style', ['css','autoprefixer','sass']),
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'client.min.js',
  },
  plugins: debug ? [
    new ExtractTextPlugin("styles.css"),
    ] : [
    new ExtractTextPlugin("styles.css"),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
  ],
  eslint: {
    configFile: './.eslintrc',
  },
};
