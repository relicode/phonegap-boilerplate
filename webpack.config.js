module.exports = {
};

const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'www/js'),
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['stage-0']
        }
      }
    ],
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'}
    ]
  }
};

