const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './src/pages/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '',
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
}


/*
mesto@0.0.1 /Users/nikitasavchuk/Documents/JS HTML CSS/mesto
├── @babel/core@7.18.6
├── @babel/preset-env@7.18.6
├── autoprefixer@10.4.7
├── babel-loader@8.2.5
├── core-js@3.23.3
├── css-loader@6.7.1
├── cssnano@5.1.12
├── html-webpack-plugin@5.5.0
├── mini-css-extract-plugin@2.6.1
├── postcss-loader@7.0.0
├── webpack-cli@4.10.0
├── webpack-dev-server@4.9.3
└── webpack@5.73.0
*/