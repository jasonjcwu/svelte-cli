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
  expect(isPlugin('svelte-cli-plugin-foo')).toBe(true)
  expect(isPlugin('@foo/svelte-cli-plugin-foo')).toBe(true)
})

test('isOfficialPlugin', () => {
  expect(isOfficialPlugin('@svel/foo')).toBe(false)
  expect(isOfficialPlugin('@svel/cli-plugin-foo')).toBe(true)
  expect(isOfficialPlugin('svelte-cli-plugin-foo')).toBe(false)
  expect(isOfficialPlugin('@foo/svelte-cli-plugin-foo')).toBe(false)
})

test('toShortPluginId', () => {
  expect(toShortPluginId('@svel/cli-plugin-foo')).toBe('foo')
  expect(toShortPluginId('svelte-cli-plugin-foo')).toBe('foo')
  expect(toShortPluginId('@foo/svelte-cli-plugin-foo')).toBe('foo')
})

test('resolvePluginId', () => {
  // already full
  expect(resolvePluginId('@svel/cli-plugin-foo')).toBe('@svel/cli-plugin-foo')
  expect(resolvePluginId('svelte-cli-plugin-foo')).toBe('svelte-cli-plugin-foo')
  expect(resolvePluginId('@foo/svelte-cli-plugin-foo')).toBe('@foo/svelte-cli-plugin-foo')

  // scoped short
  expect(resolvePluginId('@svel/foo')).toBe('@svel/cli-plugin-foo')
  expect(resolvePluginId('@foo/foo')).toBe('@foo/svelte-cli-plugin-foo')

  // default short
  expect(resolvePluginId('foo')).toBe('svelte-cli-plugin-foo')
})

test('matchesPluginId', () => {
  // full
  expect(matchesPluginId('@svel/cli-plugin-foo', '@svel/cli-plugin-foo')).toBe(true)
  expect(matchesPluginId('svelte-cli-plugin-foo', 'svelte-cli-plugin-foo')).toBe(true)
  expect(matchesPluginId('@foo/svelte-cli-plugin-foo', '@foo/svelte-cli-plugin-foo')).toBe(true)

  // short without scope
  expect(matchesPluginId('foo', '@svel/cli-plugin-foo')).toBe(true)
  expect(matchesPluginId('foo', 'svelte-cli-plugin-foo')).toBe(true)
  expect(matchesPluginId('foo', '@foo/svelte-cli-plugin-foo')).toBe(true)

  // short with scope
  expect(matchesPluginId('@svel/foo', '@svel/cli-plugin-foo')).toBe(true)
  expect(matchesPluginId('@foo/foo', '@foo/svelte-cli-plugin-foo')).toBe(true)
})
