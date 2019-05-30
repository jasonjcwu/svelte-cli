jest.setTimeout(40000)

const create = require('@svel/cli-test-utils/createTestProject')

test('mocha', async () => {
  const project = await create('ts-unit-mocha', {
    plugins: {
      '@svel/cli-plugin-typescript': {},
      '@svel/cli-plugin-unit-mocha': {}
    }
  })
  await project.run(`svelte-cli-service test:unit`)
})

test('jest', async () => {
  const project = await create('ts-unit-jest', {
    plugins: {
      '@svel/cli-plugin-typescript': {},
      '@svel/cli-plugin-unit-jest': {}
    }
  })
  await project.run(`svelte-cli-service test:unit`)
})

test('jest w/ babel', async () => {
  const project = await create('ts-unit-jest-babel', {
    plugins: {
      '@svel/cli-plugin-typescript': {},
      '@svel/cli-plugin-babel': {},
      '@svel/cli-plugin-unit-jest': {}
    }
  })
  await project.run(`svelte-cli-service test:unit`)
})
