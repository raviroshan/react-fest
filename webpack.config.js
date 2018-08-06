const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function webpackConfig(env) {
  console.log('env: ', env);
  return {
    entry: './src/file1.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'eslint-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            'style-loader', // creates style nodes from JS strings
            'css-loader', // translates CSS into CommonJS
            'sass-loader' // compiles Sass to CSS, using Node Sass by default
          ]
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        // Also generate a test.html
        filename: 'index.html',
        template: 'src/index.template.html'
      })
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000
    }
  };
};
