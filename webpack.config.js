var CopyWebpackPlugin = require('copy-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry: "./src/scripts/main.jsx",

  output: {
    path: __dirname + '/assets',
    filename: 'bundle.js'
  },

  devtool: 'inline-source-map',

  watch: true,

  module: {
    loaders: [
      {
        test: /^(?!.*(bower_components|node_modules))+.+\.jsx$/,
        loader: 'traceur?experimental&runtime'
      },
      {
        test: /^(?!.*(bower_components|node_modules))+.+\.styl$/,
        loader: ExtractTextPlugin.extract('style', 'css!stylus?resolve url')
      }
    ]
  },

  plugins: [
    new CopyWebpackPlugin([
      { from: './src/templates', to: './templates' }
    ]),
    new ExtractTextPlugin("styles.css", {disable: process.env.NODE_ENV == 'development'})
  ]

};
