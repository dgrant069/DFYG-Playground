const path = require('path');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    port: 9876,
    logLevel: config.LOG_INFO,
    files: [
      'spec/*.js',
      'src/data/**/*.js'
    ],
    frameworks: ['jasmine'],
    preprocessors: {
      'spec/*.js': ['webpack'],
      'src/data/**/*.js': ['webpack', 'coverage'],  // coverage report only for src/data/*.js files. no components.
    },
    coverageReporter: {
      reporters: [{
        type: 'html',
        dir: 'coverage',
        subdir: '.'
      },
      {
        type: 'text-summary'
      }]
    },
    reporters: ['spec', 'progress', 'coverage'],
    singleRun: false,
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              cacheDirectory: true,
              plugins: [
                'babel-plugin-transform-es2015-modules-commonjs',
                'babel-plugin-transform-es2015-function-name',
                'babel-plugin-check-es2015-constants',
                'babel-plugin-transform-es2015-block-scoping',
                'babel-plugin-transform-object-rest-spread',
                'babel-plugin-transform-regenerator',
                'babel-plugin-transform-class-properties',
                'babel-plugin-transform-runtime'
              ],
              presets: [
                'babel-preset-react'
              ]
            }
          },
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader!postcss-loader'
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
          'jwplayer': path.resolve(__dirname, 'src/assets/libs/jwplayer.js')
        },
      },
      externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      }
    },
    webpackServer: {
      noInfo: true,
    }
  });
};
