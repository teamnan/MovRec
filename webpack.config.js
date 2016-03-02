var path = require('path');

module.exports = {
  entry: [
    './src/client/main'
  ],
  ouput: {
    path: path.join(__dirname,'dist'),
    filename: 'bundle.js',
    publicPath: 'static'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
};
