module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    files: [{pattern: 'test-context.js', watched: false}],
    frameworks: ['jasmine'],
    preprocessors: {'test-context.js': ['webpack', 'sourcemap']},
    webpack: {
      devtool: 'inline-source-map',
      watch: true,
      resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx']
      },
      module: {
        rules: [
          {test: /\.js/, exclude: /node_modules/, loader: 'babel-loader'},
          {test: /\.ts/, exclude: /node_modules/, loader: 'ts-loader'}
        ]
      }
    },
    webpackServer: {noInfo: true},
    singleRun: true
  });
};