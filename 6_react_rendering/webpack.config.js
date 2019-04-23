const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

module.exports = {
	devtool: "devtool: 'source-map'",
	entry: ["babel-polyfill", "./src/index.js"],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|mjs)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ['@babel/react', '@babel/env']
					}
				}
			},

			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							options: {
								modules: true,
								camelCase: 'only',
								importLoaders: 2,
								localIdentName: '[local]'
							},
						}
					}
				]
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true,
							camelCase: 'only',
							importLoaders: 2,
							localIdentName: '[local]--[hash:base64:5]'
						},
					},
					'less-loader',
				]
			},
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
			},
			{
				test: /\.(jpg|jpeg|gif|png|woff|woff2|eot|ttf|otf|svg)$/,
				exclude: /node_modules/,
				use: {
					loader: "url-loader",
					options: {
						limit: 25000,
					}
				}
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
							context: path.resolve(__dirname, "src/"),
							outputPath: 'dist/',
							publicPath: '../',
							useRelativePaths: true
						}
					}
				]
			},
		]
	},
	devServer: {
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html',
			minify   : {
				html5                          : true,
				collapseWhitespace             : true,
				minifyCSS                      : true,
				minifyJS                       : true,
				minifyURLs                     : false,
				removeAttributeQuotes          : true,
				removeComments                 : true,
				removeEmptyAttributes          : true,
				removeOptionalTags             : true,
				removeRedundantAttributes      : true,
				removeScriptTypeAttributes     : true,
				removeStyleLinkTypeAttributese : true,
				useShortDoctype                : true
			}
		}),
		new ErrorOverlayPlugin()
	]
};
