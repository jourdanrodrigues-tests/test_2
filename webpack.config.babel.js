import path from 'path'
import webpack from 'webpack'
import {config as dotenvConfig} from 'dotenv'

dotenvConfig({silent: true})

const config = {
  module: {
    rules: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /(node_modules|\.min\.js)/},
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.(png|woff2?|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'}
    ]
  }
}

const paths = ['login', 'profile'].map((dir) => path.resolve(__dirname, 'src', dir))
let entries = []

if (!+process.env.PRODUCTION) {
  entries.concat(['webpack-hot-middleware/client', 'webpack/hot/dev-server'])
  config.plugins = [
    new webpack.optimize.OccurrenceOrderPlugin(), // Needed for webpack 1.x only
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}

module.exports = paths.map((path) => Object.assign({}, config, {
  entry: entries.concat(path),
  output: {path: path, filename: 'index.min.js'}
}))
