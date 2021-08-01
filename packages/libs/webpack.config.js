const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.js',
  output: {
    clean: true,
  },
  devtool: 'inline-source-map',
  mode: 'development',
  cache: false,

  plugins: [
    new ModuleFederationPlugin({
      name: 'libs',
      filename: 'remoteEntry.js',
      exposes: {
        './react': './src/react.js',
        './react-dom': './src/react-dom.js',
      },
    }),
  ],
};
