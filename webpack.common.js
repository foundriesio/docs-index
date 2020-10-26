module.exports = {
  entry: {
    'scripts': [
      'whatwg-fetch',
      './src/site/_process/scripts/index.js',
      './src/site/_process/styles/index.scss',
    ],
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader' },
      {
        test: /\.svg$/i,
        loader: 'svg-url-loader',
        options: {
          limit: 8192,
          outputPath: '/fonts',
        },
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
        loader: 'url-loader',
        options: {
          limit: 8192,
          mimetype: 'application/font-woff',
          outputPath: '/fonts',
        },
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
        loader: 'url-loader',
        options: {
          limit: 8192,
          outputPath: '/fonts',
        },
      },
    ],
  },
};
