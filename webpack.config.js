/**
* @description
* All JS and SCSS in the src folders will be transpiled, minified and outputted in the build folder
*
*/
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const pathConfig = require('./pathConfig.js');

/**
* @description
* The entry scss file is imported in the entry js file (see /src/js/index.js). ExtractTextPlugin will make
* sure the import is removed in the compiled js and the scss is compiled to css.
*/
const extractPlugin = new ExtractTextPlugin({
  filename: '[name].min.css'
});

module.exports = {
  entry: `${pathConfig.JS_DIR}/index.js`,
  output: {
    path: pathConfig.BUILD_DIR,
    filename: 'bundle.min.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', { 'modules': false }]
          ]
        }
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: [{ loader: 'css-loader', options: { minimize: true } }, 'sass-loader']
        })
      },
    ]
  },
  plugins: [
    extractPlugin,
    new UglifyJSPlugin()
  ]
};
