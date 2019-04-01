const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'main.js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}