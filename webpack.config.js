module.exports = {
  entry: './index.js',
  output: {
    path: './src',
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {loader: "style-loader"}, // creates style nodes from JS strings
          {loader: "css-loader"}, // translates CSS into CommonJS
          {loader: "sass-loader"} // compiles Sass to CSS
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
