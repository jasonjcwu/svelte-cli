module.exports = {
  env: {
    browser: true,
    es6: true
  },
  plugins: ['prettier'],
  extends: [
    'eslint:recommended',
    require.resolve('eslint-config-prettier')
  ],
  rules: {
    'prettier/prettier': 'warn'
  }
}
