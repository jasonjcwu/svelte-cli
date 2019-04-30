module.exports = (api, options = {}) => {
  api.injectImports(api.entryFile, `import router from './router'`)
  api.injectRootOptions(api.entryFile, `router`)
  api.extendPackage({
    dependencies: {
      'svelte-router': '^2.0.0-beta.1'
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
  <div id="app">
    <div id="nav">
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink>
    </div>
    <RouterView/>
  </div>
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
