var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/build');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

module.exports = {
 	entry: APP_DIR + '/index.jsx',
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
			    		presets: ['react']
					}
				}
			}
		]
	},
	output: {
		filename: 'bundle.js',
		path: BUILD_DIR
	},
	plugins: [
	   new webpack.HotModuleReplacementPlugin()
	]
};