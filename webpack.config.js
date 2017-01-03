let debug = process.env.NODE_ENV !== 'production';
let webpack = require('webpack');
let path = require('path');

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
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'client.min.js',
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
  ],
  eslint: {
    configFile: './.eslintrc',
  },
};
