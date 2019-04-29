jest.setTimeout(20000)

const create = require('@svel/cli-test-utils/createTestProject')

test('should work', async () => {
  const project = await create('unit-mocha', {
    plugins: {
      '@svel/cli-plugin-babel': {},
      '@svel/cli-plugin-unit-mocha': {}
    }
  })
  await project.run(`vue-cli-service test:unit`)
})
