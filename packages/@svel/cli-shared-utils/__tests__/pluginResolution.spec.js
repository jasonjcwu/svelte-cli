const {
  isPlugin,
  isOfficialPlugin,
  toShortPluginId,
  resolvePluginId,
  matchesPluginId
} = require('../lib/pluginResolution')

test('isPlugin', () => {
  expect(isPlugin('foobar')).toBe(false)
  expect(isPlugin('@svel/cli-plugin-foo')).toBe(true)
  expect(isPlugin('vue-cli-plugin-foo')).toBe(true)
  expect(isPlugin('@foo/vue-cli-plugin-foo')).toBe(true)
})

test('isOfficialPlugin', () => {
  expect(isOfficialPlugin('@svel/foo')).toBe(false)
  expect(isOfficialPlugin('@svel/cli-plugin-foo')).toBe(true)
  expect(isOfficialPlugin('vue-cli-plugin-foo')).toBe(false)
  expect(isOfficialPlugin('@foo/vue-cli-plugin-foo')).toBe(false)
})

test('toShortPluginId', () => {
  expect(toShortPluginId('@svel/cli-plugin-foo')).toBe('foo')
  expect(toShortPluginId('vue-cli-plugin-foo')).toBe('foo')
  expect(toShortPluginId('@foo/vue-cli-plugin-foo')).toBe('foo')
})

test('resolvePluginId', () => {
  // already full
  expect(resolvePluginId('@svel/cli-plugin-foo')).toBe('@svel/cli-plugin-foo')
  expect(resolvePluginId('vue-cli-plugin-foo')).toBe('vue-cli-plugin-foo')
  expect(resolvePluginId('@foo/vue-cli-plugin-foo')).toBe('@foo/vue-cli-plugin-foo')

  // scoped short
  expect(resolvePluginId('@svel/foo')).toBe('@svel/cli-plugin-foo')
  expect(resolvePluginId('@foo/foo')).toBe('@foo/vue-cli-plugin-foo')

  // default short
  expect(resolvePluginId('foo')).toBe('vue-cli-plugin-foo')
})

test('matchesPluginId', () => {
  // full
  expect(matchesPluginId('@svel/cli-plugin-foo', '@svel/cli-plugin-foo')).toBe(true)
  expect(matchesPluginId('vue-cli-plugin-foo', 'vue-cli-plugin-foo')).toBe(true)
  expect(matchesPluginId('@foo/vue-cli-plugin-foo', '@foo/vue-cli-plugin-foo')).toBe(true)

  // short without scope
  expect(matchesPluginId('foo', '@svel/cli-plugin-foo')).toBe(true)
  expect(matchesPluginId('foo', 'vue-cli-plugin-foo')).toBe(true)
  expect(matchesPluginId('foo', '@foo/vue-cli-plugin-foo')).toBe(true)

  // short with scope
  expect(matchesPluginId('@svel/foo', '@svel/cli-plugin-foo')).toBe(true)
  expect(matchesPluginId('@foo/foo', '@foo/vue-cli-plugin-foo')).toBe(true)
})
