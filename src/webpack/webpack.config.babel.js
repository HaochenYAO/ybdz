import path from 'path';
import webpack from 'webpack';
import config from '../server/config';

const assets = config('assets') || 'dev';

const BUILD_DIR = path.resolve(__dirname, '../../');

const APP_DIR = path.resolve(__dirname, '../client');

const webpackConfig = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    react: [
      `${APP_DIR}/index.jsx`,
    ],
    vendor: [
      'react',
      'react-dom',
      'react-router-dom',
    ].concat(assets === 'dev' ? [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3001',
      'webpack/hot/only-dev-server',
    ] : []),
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/build/',
    path: `${BUILD_DIR}/build/`,
    // files in service webpack-dev-server base on path publicPath
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', minChunks: Infinity }),
  ].concat(assets === 'dev' ? [
    new webpack.HotModuleReplacementPlugin(),
  ] : [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('prod'),
      },
    }),
  ]),
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
    port: 3001,
    contentBase: path.resolve(BUILD_DIR, 'build')
  }
};

export default webpackConfig;
