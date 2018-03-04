const path = require('path');
const webpack = require('webpack');

// const BUILD_DIR = path.resolve(__dirname, '../client/build');

const APP_DIR = path.resolve(__dirname, '../client');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    `${APP_DIR}/index.jsx`,
  ],
  output: {
    filename: 'index.bundle.js',
    path: `${__dirname}/build`,
    publicPath: '/build/'
    // files in service webpack-dev-server base on path publicPath
  },
  plugins: [
    // start HMR
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader?cacheDirectory',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    hot: true,
    host: 'localhost',
    port: 3000,
    contentBase: path.resolve(__dirname, 'build')
  }
};
