const task = {
  match: /svelte-cli-service lint/,
  description: 'org.vue.eslint.tasks.lint.description',
  link: 'https://github.com/wmzy/svelte-cli/tree/dev/packages/%40svel/cli-plugin-eslint#injected-commands',
  prompts: [
    {
      name: 'noFix',
      type: 'confirm',
      default: false,
      description: 'org.vue.eslint.tasks.lint.noFix'
    }
  ],
  onBeforeRun: ({ answers, args }) => {
    if (answers.noFix) args.push('--no-fix')
  }
}

module.exports = {
  task
}
