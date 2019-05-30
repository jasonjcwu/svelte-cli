const pluginRE = /^(@svel\/|vue-|@[\w-]+\/vue-)cli-plugin-/
const scopeRE = /^@[\w-]+\//
const officialRE = /^@svel\//

exports.isPlugin = id => pluginRE.test(id)

exports.isOfficialPlugin = id => exports.isPlugin(id) && officialRE.test(id)

exports.toShortPluginId = id => id.replace(pluginRE, '')

exports.resolvePluginId = id => {
  // already full id
  // e.g. svelte-cli-plugin-foo, @svel/cli-plugin-foo, @bar/svelte-cli-plugin-foo
  if (pluginRE.test(id)) {
    return id
  }
  // scoped short
  // e.g. @svel/foo, @bar/foo
  if (id.charAt(0) === '@') {
    const scopeMatch = id.match(scopeRE)
    if (scopeMatch) {
      const scope = scopeMatch[0]
      const shortId = id.replace(scopeRE, '')
      return `${scope}${scope === '@svel/' ? `` : `vue-`}cli-plugin-${shortId}`
    }
  }
  // default short
  // e.g. foo
  return `svelte-cli-plugin-${id}`
}

exports.matchesPluginId = (input, full) => {
  const short = full.replace(pluginRE, '')
  return (
    // input is full
    full === input ||
    // input is short without scope
    short === input ||
    // input is short with scope
    short === input.replace(scopeRE, '')
  )
}

exports.getPluginLink = id => {
  if (officialRE.test(id)) {
    return `https://github.com/wmzy/svelte-cli/tree/dev/packages/%40svel/cli-plugin-${
      exports.toShortPluginId(id)
    }`
  }
  let pkg = {}
  try {
    pkg = require(`${id}/package.json`)
  } catch (e) {}
  return (
    pkg.homepage ||
    (pkg.repository && pkg.repository.url) ||
    `https://www.npmjs.com/package/${id.replace(`/`, `%2F`)}`
  )
}
