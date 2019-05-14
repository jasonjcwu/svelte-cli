module.exports = (api, options) => {
  api.chainWebpack(webpackConfig => {
    const isLegacyBundle = process.env.SVELTE_CLI_MODERN_MODE && !process.env.SVELTE_CLI_MODERN_BUILD
    const resolveLocal = require('../util/resolveLocal')
    const getAssetPath = require('../util/getAssetPath')
    const inlineLimit = 4096

    const genAssetSubPath = dir => {
      return getAssetPath(
        options,
        `${dir}/[name]${options.filenameHashing ? '.[hash:8]' : ''}.[ext]`
      )
    }

    const genUrlLoaderOptions = dir => {
      return {
        limit: inlineLimit,
        // use explicit fallback to avoid regression in url-loader>=1.1.0
        fallback: {
          loader: 'file-loader',
          options: {
            name: genAssetSubPath(dir)
          }
        }
      }
    }

    webpackConfig
      .mode('development')
      .context(api.service.context)
      .entry('app')
        .add('./src/main.js')
        .end()
      .output
        .path(api.resolve(options.outputDir))
        .filename(isLegacyBundle ? '[name]-legacy.js' : '[name].js')
        .publicPath(options.publicPath)

    webpackConfig.resolve
      .mainFields
        .prepend('svelte')
        .merge(['browser', 'module', 'main'])
        .end()
      .extensions
        .merge(['.mjs', '.js', '.jsx', '.svelte', '.json', '.wasm'])
        .end()
      .modules
        .add('node_modules')
        .add(api.resolve('node_modules'))
        .add(resolveLocal('node_modules'))
        .end()
      .alias
        .set('@', api.resolve('src'))

    webpackConfig.resolveLoader
      .modules
        .add('node_modules')
        .add(api.resolve('node_modules'))
        .add(resolveLocal('node_modules'))

    // js is handled by cli-plugin-babel ---------------------------------------

    // svelte-loader --------------------------------------------------------------
    const svelteLoaderCacheConfig = api.genCacheConfig('svelte-loader', {
      'svelte-loader': require('svelte-loader/package.json').version
    })
    const preprocess = require('svelte-preprocess')({ /* options */ })

    webpackConfig.module
      .rule('svelte')
        .test(/\.svelte$/)
        .use('cache-loader')
          .loader('cache-loader')
          .options(svelteLoaderCacheConfig)
          .end()
        .use('svelte-loader')
          .loader('svelte-loader')
          .options({ hotReload: false, preprocess })

    // static assets -----------------------------------------------------------

    webpackConfig.module
      .rule('images')
        .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
        .use('url-loader')
          .loader('url-loader')
          .options(genUrlLoaderOptions('img'))

    // do not base64-inline SVGs.
    // https://github.com/facebookincubator/create-react-app/pull/1180
    webpackConfig.module
      .rule('svg')
        .test(/\.(svg)(\?.*)?$/)
        .use('file-loader')
          .loader('file-loader')
          .options({
            name: genAssetSubPath('img')
          })

    webpackConfig.module
      .rule('media')
        .test(/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/)
        .use('url-loader')
          .loader('url-loader')
          .options(genUrlLoaderOptions('media'))

    webpackConfig.module
      .rule('fonts')
        .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/i)
        .use('url-loader')
          .loader('url-loader')
          .options(genUrlLoaderOptions('fonts'))

    // Other common pre-processors ---------------------------------------------

    webpackConfig.module
      .rule('pug')
        .test(/\.pug$/)
          .oneOf('pug-vue')
            .resourceQuery(/vue/)
            .use('pug-plain-loader')
              .loader('pug-plain-loader')
              .end()
            .end()
          .oneOf('pug-template')
            .use('raw')
              .loader('raw-loader')
              .end()
            .use('pug-plain')
              .loader('pug-plain-loader')
              .end()
            .end()

    // shims

    webpackConfig.node
      .merge({
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
      })

    const resolveClientEnv = require('../util/resolveClientEnv')
    webpackConfig
      .plugin('define')
        .use(require('webpack/lib/DefinePlugin'), [
          resolveClientEnv(options)
        ])

    webpackConfig
      .plugin('case-sensitive-paths')
        .use(require('case-sensitive-paths-webpack-plugin'))

    // friendly error plugin displays very confusing errors when webpack
    // fails to resolve a loader, so we provide custom handlers to improve it
    const { transformer, formatter } = require('../util/resolveLoaderError')
    webpackConfig
      .plugin('friendly-errors')
        .use(require('@soda/friendly-errors-webpack-plugin'), [{
          additionalTransformers: [transformer],
          additionalFormatters: [formatter]
        }])
  })
}
