var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');

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
          presets: ['react', 'latest', 'flow'],
        },
      },
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loader: 'eslint-loader',
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src'),
        loader: ExtractTextPlugin.extract('style-loader', ['css-loader','autoprefixer-loader', 'resolve-url-loader', 'sass-loader?sourceMap']),
      },
      { 
        test: /\.(png|jpg)$/,
        include: path.join(__dirname, 'src'),
        loader: 'url-loader?limit=25000&name=img/[hash].[ext]'
      },
    ],
  },
  output: {
    path: __dirname + '/src/build',
    filename: 'client.min.js',
  },
  plugins: debug ? [
    new ExtractTextPlugin("styles.css"),
    new webpack.NoErrorsPlugin(),
    new FlowStatusWebpackPlugin({failOnError: true}),
    ] : [
    new ExtractTextPlugin("styles.css"),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
  ],
  eslint: {
    configFile: './.eslintrc',
  },
  devServer: {
    historyApiFallback: true,
  },
};
