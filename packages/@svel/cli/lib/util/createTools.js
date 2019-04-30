exports.getPromptModules = () => {
  return [
    'babel',
    // 'typescript',
    'pwa',
    'router',
    'cssPreprocessors',
    'linter',
    'unit',
    'e2e'
  ].map(file => require(`../promptModules/${file}`))
}
