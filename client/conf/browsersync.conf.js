const conf = require('./gulp.conf');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConf = require('./webpack.conf');
const webpackBundler = webpack(webpackConf);

module.exports = function () {
  return {
    server: {
      baseDir: [
        conf.paths.tmp,
        conf.paths.src
      ],
      middleware: [
        webpackDevMiddleware(webpackBundler, {
          publicPath: webpackConf.output.publicPath,
          quiet: true
        }),
        webpackHotMiddleware(webpackBundler)
      ]
    },
    open: false
  };
};
