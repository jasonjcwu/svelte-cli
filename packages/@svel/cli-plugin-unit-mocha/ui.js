module.exports = api => {
  api.describeTask({
    match: /svelte-cli-service test:unit/,
    description: 'org.vue.mocha.tasks.test.description',
    link: 'https://github.com/wmzy/svelte-cli/tree/dev/packages/%40svel/cli-plugin-unit-mocha#injected-commands',
    prompts: [
      {
        name: 'watch',
        type: 'confirm',
        default: false,
        description: 'org.vue.mocha.tasks.test.watch'
      }
    ],
    onBeforeRun: ({ answers, args }) => {
      if (answers.watch) args.push('--watch')
    }
  })
}
