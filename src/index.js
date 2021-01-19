const webpack = require('webpack');

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
  });
}
