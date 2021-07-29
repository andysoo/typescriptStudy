const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
  mode: "development",

  entry: path.resolve(__dirname, "./src/index.ts"),

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index.js",
    //webpack自动生成的代码中不使用箭头函数，老旧浏览器不识别
    environment: {
      arrowFunction: false,
    },
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      chrome: "88",
                    },
                    //模似js浏览器运行环境，支持老旧浏览器支持新语法
                    corejs: "3",
                    useBuiltIns: "usage",
                  },
                ],
              ],
            },
          },
          "ts-loader",
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],

  //解析模块
  resolve: {
    extensions: [".ts", ".js"],
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
}
