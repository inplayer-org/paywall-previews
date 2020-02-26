const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/app.js"),
  output: {
    filename: "paywall-previews.min.js"
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    open: true,
    quiet: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(css)$/,
        include: [/stylesheets/, /node_modules/],
        use: ["css-loader"]
      },
      {
        test: /\.css$/,
        exclude: [/stylesheets/, /node_modules/],
        use: [
          "css-loader?sourceMap&modules,localIdentName=[local]-[hash:base64]"
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", "jsx", ".json"],
    alias: {
      assets: path.resolve(__dirname, "./src/assets"),
      previews: path.resolve(__dirname, "./src/previews"),
      components: path.resolve(__dirname, "./src/components")
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Create HTML file that includes references to bundled CSS and JS.
      template: path.resolve(__dirname, "./public/index.html"),
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      inject: true
    })
  ]
};
