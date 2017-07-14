import path from 'path'

const appPath = path.resolve(__dirname, 'app')

module.exports = {
  entry: {
    login: path.resolve(appPath, 'login')
  },
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {loader: 'style-loader'}, // creates style nodes from JS strings
          {loader: 'css-loader'}, // translates CSS into CommonJS
          {loader: 'sass-loader'} // compiles Sass to CSS
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
