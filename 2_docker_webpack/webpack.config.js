const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
		index: './src/index.js',
		test: './src/index.js',
	},
	mode: "development",
	devtool: "source-map",
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: '[name].js'
	},
	devServer: {
		contentBase: ['./dist', './src'],
		port: 3000,  // avoid conflict with static node when running at the same time
		host: '0.0.0.0',
		// stats: 'errors-only' // only errors in console for live reload
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			// additional home part ( https://webpack.js.org/loaders )
			{
				test: /\.pug$/, // use only for files like this
				exclude: /(node_modules)/, // ignore files from npm
				use: {
					loader: 'pug-loader',
					options: {
						pretty: true   // set indents and line breaks for new html
					}
				}
			},
			{
				test: /\.handlebars$/,
				loader: 'handlebars-loader',
				
			},
			// and home part
			{
				test: /\.scss$/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader", // translates CSS into CommonJS
					options: { 
						importLoaders: 1 
					}
				}, {
					loader: 'postcss-loader',
					options: {
						ident: 'postcss',
						plugins: [
							require('autoprefixer')({
								browsers:['last 1 version', '>1%', 'IE >= 10' ]
							}),
						]
					}
				}, {
					loader: "sass-loader" // compiles Sass to CSS
				}]
			}
		]
	},
	resolve: {
		extensions: ['*', '.js']
	},
	node: {
		fs: "empty"
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			title: 'Webpack Example',
			template: './src/index.html',
			filename: 'index.html',
			chunks: ['index']
		}),
		new HtmlWebpackPlugin({
			title: 'Webpack Example (copy)',
			template: './src/index.html',
			filename: 'test.html',
			chunks: ['test']
		}),
		// new webpack.ProvidePlugin({   //use module, when it necessary
		//     $: 'jquery',
		//     jQuery: 'jquery'
		// })
	]
};
