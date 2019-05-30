module.exports = api => {
  api.render('./template', {
    hasTS: api.hasPlugin('typescript'),
    hasESLint: api.hasPlugin('eslint')
  })

  api.extendPackage({
    scripts: {
      'test:e2e': 'svelte-cli-service test:e2e'
    }
  })
}
