const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const mode = process.env.ENV || 'development';

module.exports = {
  mode,
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env','@babel/preset-react'],
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'sass-loader'],
      },
      {
        test: /\.(svg|png|jpg)$/,
        type: 'asset/resource'
      },
      { test: /\.svg/,
        type: 'asset/inline'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(
        {
          favicon: false,
          showErrors: true,
          cache: true,
          template: './src/index.html'
        },
    ),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new ESLintPlugin()
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
    open: true,
  },

  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
};
