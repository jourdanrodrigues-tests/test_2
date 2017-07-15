import path from 'path'

const config = {
  module: {
    rules: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  }
}

const srcPath = path.resolve(__dirname, 'src')
const loginPath = path.resolve(srcPath, 'login')
const profilePath = path.resolve(srcPath, 'profile')

const loginConfig = Object.assign({}, config, {
  entry: loginPath,
  output: {path: loginPath, filename: 'index.min.js'}
})
const profileConfig = Object.assign({}, config, {
  entry: profilePath,
  output: {path: profilePath, filename: 'index.min.js'}
})

module.exports = [profileConfig, loginConfig]
