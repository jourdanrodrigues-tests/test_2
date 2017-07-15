import path from 'path'

const appPath = path.resolve(__dirname, 'app')

module.exports = {
  entry: {
    login: path.resolve(appPath, 'login')
  },
  output: {
    path: appPath,
    filename: '[name].js'
  },
  module: {
    rules: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  }
}
