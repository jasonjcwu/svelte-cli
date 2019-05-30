module.exports = api => {
  api.render('./template', {
    hasTS: api.hasPlugin('typescript')
  })

  api.extendPackage({
    scripts: {
      'test:e2e': 'svelte-cli-service test:e2e'
    }
  })
}
