const webpack = require("webpack");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const pkg = require("./package.json");

module.exports = {
  target: "web",
  entry: path.resolve(__dirname, "./src/index.ts"),
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "paywall-previews.min.js",
    library: pkg.name,
    libraryTarget: "commonjs2",
    publicPath: "/",
    umdNamedDefine: true
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
        test: /\.(jpe?g|png|gif|ico|svg)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
          }
        ]
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
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom"
    },
    "styled-components": {
      commonjs: "styled-components",
      commonjs2: "styled-components",
      amd: "styled-components"
    }
  }
};
