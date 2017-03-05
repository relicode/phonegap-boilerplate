const path = require('path')


module.exports = {
  entry: path.resolve(__dirname, './src/js/index.js'),
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'www/js'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, use: 'babel-loader'
      }
    ]
  }
}

