module.exports = {
  configureWebpack: {
    devServer: {
      open: true,
      watchOptions: {
        ignored: ['node_modules']
      }
    }
  },
  "css": {
    "extract": false
  },
  "transpileDependencies": [
    "vuetify"
  ]
}