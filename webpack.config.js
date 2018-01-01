var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/index.tsx'
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: [
        'react-hot-loader/webpack', 'babel-loader', 'awesome-typescript-loader'
      ],
      exclude: /node_modules/
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    hot: true
  }
};