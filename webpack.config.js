const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function webpackConfig(env) {
  return {
    entry: './src/react-app/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        // {
        //   enforce: 'pre',
        //   test: /\.(js|jsx)$/,
        //   exclude: /node_modules/,
        //   loader: 'eslint-loader'
        // },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // {
        //   test: /\.scss$/,
        //   exclude: /node_modules/,
        //   use: [
        //     'style-loader', // creates style nodes from JS strings
        //     'css-loader', // translates CSS into CommonJS
        //     'sass-loader' // compiles Sass to CSS, using Node Sass by default
        //   ]
        // }
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            // resolve-url-loader may be chained before sass-loader if necessary
            use: ['css-loader', 'sass-loader']
          })
        },
        // CSS File [Not using SASS Loader]
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader']
          })
        },
        {
          test: /\.(svg|eot|woff|woff2|ttf)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/fonts/'
          }
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('styles.css'),
      new HtmlWebpackPlugin({
        // Also generate a test.html
        filename: 'index.html',
        template: 'src/index.template.html'
      })
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        components: path.resolve(__dirname, 'src/react-app/components')
      }
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000
    }
  };
};
