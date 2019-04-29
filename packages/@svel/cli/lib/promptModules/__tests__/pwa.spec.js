jest.mock('fs')
jest.mock('inquirer')

const assertPromptModule = require('@svel/cli-test-utils/assertPromptModule')

const moduleToTest = require('../pwa')

test('pwa', async () => {
  const expectedPrompts = [
    {
      message: 'features',
      choices: ['PWA'],
      check: [0]
    }
  ]

  const expectedOptions = {
    plugins: {
      '@svel/cli-plugin-pwa': {}
    }
  }

  await assertPromptModule(
    moduleToTest,
    expectedPrompts,
    expectedOptions,
    { pluginsOnly: true }
  )
})
