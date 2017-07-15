import path from 'path'

const config = {
  module: {
    rules: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  }
}

const loginPath = path.resolve(__dirname, 'src', 'login')
const loginConfig = Object.assign(config, {
  entry: loginPath,
  output: {path: loginPath, filename: 'index.min.js'}
})

module.exports = [
  loginConfig
]
