const webpack = require('webpack');
const path = require('path')

module.exports = ({ context, log, onGetWebpackConfig }, options = {}) => {
  const { command } = context;
  console.log(command, 'command')
  // 传参
  const { params } = options;
  log.info('请耐心等待');
  console.log(options, 'options')

  onGetWebpackConfig((config) => {
    config
      .plugin('provide')
      .use(webpack.ProvidePlugin, [
        params
      ]);

    config.module
      .rule('json')
      .test(/\.json$/)
      .use('json')
      .loader(path.resolve(__dirname, '../loader/json-loader.js'))
      .options({
      });
    // log.info(config.toString())
  });

}
