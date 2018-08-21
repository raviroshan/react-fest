const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function webpackConfig() {
  return {
    devtool: 'source-map',
    entry: {
      vendor: ['react', 'react-dom', 'redux'],
      appMain: './src/react-app/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      chunkFilename: '[name]-lazy-chunk.js'
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
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        // filename: "vendor.js"
        // (Give the chunk a different name)

        minChunks: Infinity
        // (with more entries, this ensures that no other module
        //  goes into the vendor chunk)
      }),
      new ExtractTextPlugin('styles.css'),
      new HtmlWebpackPlugin({
        // Also generate a test.html
        filename: 'index.html',
        template: 'src/index.template.html'
      }),
      new CopyWebpackPlugin([{ from: 'src/assets/images', to: 'assets/images' }]),
      new Visualizer({
        filename: './statistics.html'
      }),
      new BundleAnalyzerPlugin()
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        components: path.resolve(__dirname, 'src/react-app/components')
      }
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      historyApiFallback: true,
      compress: true,
      port: 9000
    }
  };
};
