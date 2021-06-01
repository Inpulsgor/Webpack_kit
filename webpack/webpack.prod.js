const WebpackBar = require('webpackbar');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('./path');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map', // or - false

  output: {
	  path: path.build,
	  filename: 'js/[name].[contenthash].bundle.js'
  },

  module: {
	rules: [
		{
			test: /\.(scss|css)$/i,
			use: [
			//   'style-loader',
				MiniCssExtractPlugin.loader,
				'css-loader',
				'postcss-loader',
				'sass-loader',
			],
		},
		{
			test: /\.tsx?$/,
			use: 'ts-loader',
			exclude: /node_modules/,
		},
	]
  },

  plugins: [
	new CleanWebpackPlugin(), // removes dist folder - before build
	new WebpackBar(), // show status bar while building
	new HtmlWebpackPlugin({
		  template: path.resolve(__dirname, 'src', 'index.html'),
	}),
	new MiniCssExtractPlugin({
		filename: 'styles.css',
	}),
    // new BundleAnalyzerPlugin(),
  ],
});