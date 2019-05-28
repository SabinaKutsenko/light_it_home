const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

module.exports = {
	mode: "development",
	devtool: "devtool: 'source-map'",
	entry: ["babel-polyfill", "./src/index.tsx"],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
		alias: {
			src: path.resolve(__dirname, '../src')
		}
	},
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: [/node_modules/, /\.(spec|e2e)\.ts(x?)$/],
				use: [
					'babel-loader',
					'ts-loader',
				]
			},
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
					loader: "style-loader" // to inject the result into the DOM as a style block
				},
				{
					loader: "css-loader", // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
					options: {
						modules: true,
						camelCase: 'only',
						importLoaders: 2,
						localIdentName: '[local]--[hash:base64:5]'
					}
				}, {
					loader: "sass-loader" // to convert SASS to CSS
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
			minify: {
				html5: true,
				collapseWhitespace: true,
				minifyCSS: true,
				minifyJS: true,
				minifyURLs: false,
				removeAttributeQuotes: true,
				removeComments: true,
				removeEmptyAttributes: true,
				removeOptionalTags: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributese: true,
				useShortDoctype: true
			}
		}),
		new ErrorOverlayPlugin()
	]
};
