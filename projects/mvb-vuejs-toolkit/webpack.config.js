// webpack.config.js
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "index.js",
    library: "VuePanel",
    libraryTarget: "umd"
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
          test: /\.scss$/,
          loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};
