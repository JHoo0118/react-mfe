const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:7770/',
  },
  devServer: {
    port: 7770,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        navbar: 'navbar@http://localhost:7771/remoteEntry.js',
      },
      // shared: {
      //   ...packageJson.dependencies,
      //   react: {
      //     singleton: true,
      //     eager: true,
      //     requiredVersion: packageJson.dependencies.react,
      //   },
      //   'react-dom': {
      //     singleton: true,
      //     eager: true,
      //     requiredVersion: packageJson.dependencies['react-dom'],
      //   },
      // },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
