import path from 'path'

const config = {
  module: {
    rules: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /(node_modules|\.min\.js)/},
      {test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  }
}

const paths = ['login', 'profile'].map((dir) => path.resolve(__dirname, 'src', dir))

module.exports = paths.map((path) => Object.assign({}, config, {
  entry: path,
  output: {path: path, filename: 'index.min.js'}
}))
