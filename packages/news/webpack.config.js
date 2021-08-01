const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    clean: true,
  },
  devtool: 'inline-source-map',
  mode: 'development',
  cache: false,
  resolve: {
    extensions: ['.js'],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './template/index.html',
      filename: 'index.html',
    }),
    new ModuleFederationPlugin({
      filename: 'remoteEntry.js',
      remotes: {
        libs: 'libs@http://localhost:3000/remoteEntry.js',
        currentNew: 'currentNew@http://localhost:3001/remoteEntry.js',
      },
    }),
  ],
};
