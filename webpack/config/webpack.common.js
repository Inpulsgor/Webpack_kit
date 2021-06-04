const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackBar = require('webpackbar');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const paths = require('../utils/paths');
const alias = require('../utils/alias')(__dirname);

module.exports = {
  entry: [paths.SRC + '/index.ts'],
  output: {
	path: paths.BUILD,
    filename: '[name].bundle.js',
    publicPath: '/',
	clean: true
  },

  module: {
    rules: [
	  {
		test: /\.m?js$/,
		exclude: /node_modules/,
		use: 'babel-loader',
	  },
	  {
        test: /\.(tsx|ts)?$/,
        exclude: /node_modules/,
        use: {
			loader: 'ts-loader',
			options: {
				transpileOnly: true,
			}
		},
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },

  plugins: [
	new CleanWebpackPlugin(), // removes dist folder - before build
    new WebpackBar(), // show status bar while building
	new CopyWebpackPlugin({
		patterns: [
		  {
			from: paths.PUBLIC,
			to: 'assets',
			globOptions: {
			  ignore: ['*.DS_Store'],
			},
			noErrorOnMissing: true,
		  },
		],
	  }),
	new HtmlWebpackPlugin({
		template: paths.SRC + '/index.html',
		filename: 'index.html',
	}),
	new ForkTsCheckerWebpackPlugin()
  ],

  resolve: {
	alias,
    modules: [paths.SRC, 'node_modules'],
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
  },
};