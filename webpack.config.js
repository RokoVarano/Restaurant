const HtmlWebpackPlugin = require('html-webpack-plugin');
var ImageminPlugin = require('imagemin-webpack-plugin').default
const path = require('path');
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index'),
  watch: true,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: "index.js",
    chunkFilename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
        hash: true,
        filename: './index.html', //relative to root of the application
        template: './src/index.html'
    }),
    new ImageminPlugin({
      disable: process.env.NODE_ENV !== 'production', // Disable during development
      pngquant: {
        quality: '95-100'
      }
    })
  ],
  module: {
    rules: [{
      test: /.jsx?$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      loader: 'babel-loader',
    },
    {
      test: /\.(png|jp(e*)g|svg)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8000,
            name: 'pictures/[hash]-[name].[ext]',
            publicPath: '/',
          }
        }
      ]
    },      
    {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
      ],
    },
    {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
            publicPath: '/'
          }
        }
      ]
    }
  ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, '/dist/'),
    inline: true,
    host: 'localhost',
    port: 8080,
  }
};