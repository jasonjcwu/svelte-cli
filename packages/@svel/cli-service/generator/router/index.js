module.exports = (api, options = {}) => {
  api.injectRootOptions(api.entryFile, `router`)
  api.extendPackage({
    dependencies: {
      '@svel/router': '^0.2.1'
    }
  })
  api.render('./template', {
    historyMode: options.routerHistoryMode,
    doesCompile: api.hasPlugin('babel') || api.hasPlugin('typescript')
  })

  if (api.invoking) {
    api.postProcessFiles(files => {
      const appFile = files[`src/App.svelte`]
      if (appFile) {
        files[`src/App.svelte`] = appFile.replace(/^<div id="app">[^]+<\/style>/, `
<RouterProvider {router}>
  <div id="app">
    <div id="nav">
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink>
    </div>
    <RouterView/>
  </div>
</RouterProvider>
        `.trim())
      }
    })

    if (api.hasPlugin('typescript')) {
      /* eslint-disable-next-line node/no-extraneous-require */
      const convertFiles = require('@svel/cli-plugin-typescript/generator/convert')
      convertFiles(api)
    }
  }
}
