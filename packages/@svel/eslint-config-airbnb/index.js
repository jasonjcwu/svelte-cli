module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    require.resolve('eslint-config-airbnb-base')
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: require.resolve('@svel/cli-service/webpack.config.js')
      }
    },
    'import/extensions': [
      '.js',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx'
    ]
  },
  rules: {
    'import/extensions': ['error', 'always', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never'
    }]
  },
  overrides: [
    {
      files: '*.svelte',
      rules: {
        'import/first': 'off',
        'import/no-duplicates': 'off',
        'import/no-mutable-exports': 'off',
        'import/prefer-default-export': 'off'
      }
    }
  ]
}
