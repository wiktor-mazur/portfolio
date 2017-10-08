const webpack = require('webpack');
const merge = require('webpack-merge');
const LiveReloadPlugin = require('webpack-livereload-plugin');

const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.scss$/,
				exclude: [/node_modules/,/dist/,/config/],
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader', options: { sourceMap: true } },
					{ loader: 'postcss-loader' },
					{ loader:'sass-loader', options: { sourceMap: true } },
				]
			},
			{
				test: /\.(jpe?g|png|gif|svg|ico)$/,
				exclude: [/node_modules/,/dist/,/config/],
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]?v=[hash]',
							outputPath: 'img/',
						}
					}
				]
			}
		]
	},
	plugins: [
		new LiveReloadPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('dev')
			}
		})
	]
});
