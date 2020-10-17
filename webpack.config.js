const path = require('path');

const webpackRules = [];
const webpackOption = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'bundle.js',
    publicPath: 'public/js/',
  },
  module: {
    rules: webpackRules,
  },
};
const babelLoader = {
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
    },
  },
};
webpackRules.push(babelLoader);
module.exports = webpackOption;
