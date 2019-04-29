jest.setTimeout(30000)

const Service = require('@svel/cli-service/lib/Service')
const { assertServe, assertBuild } = require('./tsPlugin.helper')

test('using correct loader', () => {
  const service = new Service('/', {
    pkg: {},
    plugins: [
      { id: '@svel/cli-plugin-typescript', apply: require('../index') },
      { id: '@svel/cli-plugin-babel', apply: require('@svel/cli-plugin-babel') }
    ]
  })

  service.init()
  const config = service.resolveWebpackConfig()
  const rule = config.module.rules.find(rule => rule.test.test('foo.ts'))
  expect(rule.use[0].loader).toMatch('cache-loader')
  expect(rule.use[1].loader).toMatch('babel-loader')
  expect(rule.use[2].loader).toMatch('ts-loader')
})

const creatorOptions = {
  plugins: {
    '@svel/cli-plugin-typescript': {},
    '@svel/cli-plugin-babel': {}
  }
}

assertServe('ts-babel-serve', creatorOptions)
assertBuild('ts-babel-build', creatorOptions)
