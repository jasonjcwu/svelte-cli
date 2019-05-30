const generateWithPlugin = require('@svel/cli-test-utils/generateWithPlugin')

test('generate files', async () => {
  const { files } = await generateWithPlugin([
    {
      id: 'core',
      apply: require('@svel/cli-service/generator'),
      options: {}
    },
    {
      id: 'ts',
      apply: require('../generator'),
      options: {}
    }
  ])

  expect(files['src/main.ts']).toBeTruthy()
  expect(files['src/main.js']).toBeFalsy()
  expect(files['src/App.vue']).toMatch('<script lang="ts">')
})

test('classComponent', async () => {
  const { pkg, files } = await generateWithPlugin([
    {
      id: 'ts',
      apply: require('../generator'),
      options: {
        classComponent: true
      }
    }
  ])

  expect(pkg.dependencies).toHaveProperty('vue-class-component')
  expect(pkg.dependencies).toHaveProperty('vue-property-decorator')

  expect(files['tsconfig.json']).toMatch(`"experimentalDecorators": true`)
  expect(files['src/App.vue']).toMatch(
    `export default class App extends Vue {`
  )
  expect(files['src/components/HelloWorld.vue']).toMatch(
    `export default class HelloWorld extends Vue {`
  )
})

test('use with Babel', async () => {
  const { files } = await generateWithPlugin([
    {
      id: 'babel',
      apply: require('@svel/cli-plugin-babel/generator'),
      options: {}
    },
    {
      id: 'ts',
      apply: require('../generator'),
      options: {
        useTsWithBabel: true
      }
    }
  ])

  expect(files['babel.config.js']).toMatch(`presets: [\n    '@svel/app'\n  ]`)
  expect(files['tsconfig.json']).toMatch(`"target": "esnext"`)
})

test('lint', async () => {
  const { pkg, files } = await generateWithPlugin([
    {
      id: 'ts',
      apply: require('../generator'),
      options: {
        tsLint: true,
        lintOn: ['save', 'commit']
      }
    }
  ])

  expect(pkg.scripts.lint).toBe(`svelte-cli-service lint`)
  expect(pkg.devDependencies).toHaveProperty('lint-staged')
  expect(pkg.gitHooks).toEqual({ 'pre-commit': 'lint-staged' })
  expect(pkg['lint-staged']).toEqual({
    '*.ts': ['svelte-cli-service lint', 'git add'],
    '*.vue': ['svelte-cli-service lint', 'git add']
  })

  expect(files['tslint.json']).toBeTruthy()
})

test('lint with no lintOnSave', async () => {
  const { pkg } = await generateWithPlugin([
    {
      id: 'ts',
      apply: require('../generator'),
      options: {
        tsLint: true,
        lintOn: ['commit']
      }
    }
  ])
  expect(pkg.vue).toEqual({ lintOnSave: false })
})

test('tsconfig.json should be valid json', async () => {
  const { files } = await generateWithPlugin([
    {
      id: 'ts',
      apply: require('../generator'),
      options: {}
    }
  ])
  expect(() => {
    JSON.parse(files['tsconfig.json'])
  }).not.toThrow()
  expect(files['tsconfig.json']).not.toMatch('"  ')
})

test('compat with unit-mocha', async () => {
  const { pkg, files } = await generateWithPlugin([
    {
      id: '@svel/cli-plugin-unit-mocha',
      apply: require('@svel/cli-plugin-unit-mocha/generator'),
      options: {}
    },
    {
      id: '@svel/cli-plugin-typescript',
      apply: require('../generator'),
      options: {
        lint: true,
        lintOn: ['save', 'commit']
      }
    }
  ])

  expect(pkg.devDependencies).toHaveProperty('@types/mocha')
  expect(pkg.devDependencies).toHaveProperty('@types/chai')

  expect(files['tsconfig.json']).not.toMatch('"  ')
})

test('compat with unit-jest', async () => {
  const { pkg, files } = await generateWithPlugin([
    {
      id: '@svel/cli-plugin-unit-jest',
      apply: require('@svel/cli-plugin-unit-jest/generator'),
      options: {}
    },
    {
      id: '@svel/cli-plugin-typescript',
      apply: require('../generator'),
      options: {
        lint: true,
        lintOn: ['save', 'commit']
      }
    }
  ])

  expect(pkg.devDependencies).toHaveProperty('@types/jest')

  expect(files['tsconfig.json']).not.toMatch('"  ')
})
