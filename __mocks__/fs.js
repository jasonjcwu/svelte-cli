const { fs } = require('memfs')

// overwrite config path and context when fs is mocked
process.env.SVELTE_CLI_CONTEXT = '/'
process.env.SVELTE_CLI_CONFIG_PATH = '/.svelterc'

module.exports = fs
