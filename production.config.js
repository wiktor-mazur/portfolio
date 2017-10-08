const baseConfig = require('./base.config.js');

const merge = require('webpack-merge');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(baseConfig, {
	module: {
		rules: [
			{
				test: /\.scss$/,
				exclude: [/node_modules/,/dist/,/config/],
				loader: ExtractTextPlugin.extract('css-loader!postcss-loader!sass-loader')
			},
			{
				test: /\.(jpe?g|png|gif|svg|ico)$/,

				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]?v=[hash]',
							outputPath: 'img/',
						}
					},
					{
						loader: 'image-webpack-loader',
						options: {
							gifsicle: {
								interlaced: false,
							},
							optipng: {
								optimizationLevel: 7,
							},
							pngquant: {
								quality: '75-90',
								speed: 4
							},
							mozjpeg: {
								progressive: true,
								quality: 75
							}
						}
					}
				]
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('bundle.css', {
			allChunks: true
		}),
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /bundle.css/,
			cssProcessor: require('cssnano'),
			cssProcessorOptions: { discardComments: {removeAll: true} },
			cssPrint: true
		}),
		new UglifyJsPlugin({
			sourceMap: false,
			compress: true
		}),
	]
});
