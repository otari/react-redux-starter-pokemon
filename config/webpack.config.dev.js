const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server', // reload page on HRM fail on your own
    'babel-polyfill',
    path.resolve(__dirname, '../src/index.js'),
  ],
  output: {
    path: path.resolve(__dirname, '/dist'),
    pathinfo: true,
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true, // faster builds
        },
      },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=1&modules&localIdentName=[name]_[local]_[hash:base64:5]',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devServer: {
    contentBase: '/',
    historyApiFallback: true,
  },
};
