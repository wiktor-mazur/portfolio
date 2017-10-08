const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: __dirname+'/src/scripts/index.js',
	output: {
		path: __dirname+'/dist/',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test:/\.js$/,
				exclude: [/node_modules/,/dist/,/config/],
				loader: ['babel-loader','eslint-loader']
			},
			{
				test:/\.html$/,
				exclude: [/node_modules/,/dist/,/config/],
				use: ['html-loader?interpolate']
			},
			{
			  test: /\.woff(2)?(\?[a-z0-9]+)?$/,
			  loader: "file-loader?limit=10000&mimetype=application/font-woff",
			  options: {
			  	outputPath: 'fonts/'
			  }
			},
			{
			  test: /\.(ttf|eot|svg)(\?[a-z0-9]+)?$/,
			  loader: "file-loader",
			  options: {
			  	outputPath: 'fonts/'
			  }
			}
		],
	},
	plugins: [
		new CopyWebpackPlugin([
        	{ context: 'src/', from: 'img/favicons/**', to: './' },
        ]),
		new HtmlWebpackPlugin({
			template: 'src/index.php',
			filename: 'index.php',
			hash: true
		}),
		new CleanWebpackPlugin(['dist']),

	]
};