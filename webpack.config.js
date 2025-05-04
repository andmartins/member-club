const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  target: "web",
  mode: "development",

  entry: path.resolve(__dirname, "src", "main.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Limpa a pasta dist antes de cada build
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist")
    },
    port: "3000",
    open: true,
    liveReload: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html")
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets"),
          to: path.resolve(__dirname, "dist", "assets") // Agora vai para dist/assets
        }
      ]
    })
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/[name][hash][ext]" // Opcional: organiza com hash para cache
        }
      }
    ]
  }
};