// webpack.config.js

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './js',
	output: {
		path: 'build',
		filename: 'bundle.js',
	},
	module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        include: __dirname + '/src',
      },
      {
        test: /\.css/,
        loaders: ['style', 'css'],
        include: __dirname + '/src'
      },
      {
        test: /\.scss$/,
        loader: "css-loader!sass-loader"
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ]
};