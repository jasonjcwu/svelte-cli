const { clientAddonConfig } = require('@svel/cli-ui')

module.exports = {
  ...clientAddonConfig({
    id: 'org.vue.webpack.client-addon',
    port: 8097
  })
}
