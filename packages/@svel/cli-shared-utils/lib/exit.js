exports.exitProcess = !process.env.SVELTE_CLI_API_MODE && !process.env.SVELTE_CLI_TEST

exports.exit = function (code) {
  if (exports.exitProcess) {
    process.exit(code)
  } else if (code > 0) {
    throw new Error(`Process exited with code ${code}`)
  }
}
