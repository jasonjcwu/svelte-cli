jest.mock('fs')
jest.mock('inquirer')

const assertPromptModule = require('@svel/cli-test-utils/assertPromptModule')

const moduleToTest = require('../unit')

test('mocha', async () => {
  const expectedPrompts = [
    {
      message: 'features',
      choices: ['Unit Testing'],
      check: [0]
    },
    {
      message: 'Pick a unit testing solution',
      choices: ['Mocha', 'Jest'],
      choose: 0
    }
  ]

  const expectedOptions = {
    plugins: {
      '@svel/cli-plugin-unit-mocha': {}
    }
  }

  await assertPromptModule(
    moduleToTest,
    expectedPrompts,
    expectedOptions,
    { pluginsOnly: true }
  )
})

test('jest', async () => {
  const expectedPrompts = [
    {
      message: 'features',
      choices: ['Unit Testing'],
      check: [0]
    },
    {
      message: 'Pick a unit testing solution',
      choices: ['Mocha', 'Jest'],
      choose: 1
    }
  ]

  const expectedOptions = {
    plugins: {
      '@svel/cli-plugin-unit-jest': {}
    }
  }

  await assertPromptModule(
    moduleToTest,
    expectedPrompts,
    expectedOptions,
    { pluginsOnly: true }
  )
})
