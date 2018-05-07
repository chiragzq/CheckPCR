const path = require('path');

module.exports = {
  entry: {
    app: './src/client.ts',
    welcome: './src/welcome.ts'
  },
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'build')
  }
};