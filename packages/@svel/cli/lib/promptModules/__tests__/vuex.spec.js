jest.mock('fs')
jest.mock('inquirer')

const assertPromptModule = require('@svel/cli-test-utils/assertPromptModule')

const moduleToTest = require('../vuex')

test('vuex', async () => {
  const expectedPrompts = [
    {
      message: 'features',
      choices: ['Vuex'],
      check: [0]
    }
  ]

  const expectedOptions = {
    vuex: true,
    plugins: {}
  }

  await assertPromptModule(
    moduleToTest,
    expectedPrompts,
    expectedOptions,
    { pluginsOnly: true }
  )
})
