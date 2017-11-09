const webpack = require("webpack");

module.exports = {
  entry: './src/ja.js',
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/lib`,
    // 出力ファイル名
    filename: 'ja.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', {'modules': false}]
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};

