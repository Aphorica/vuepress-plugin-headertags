const { path } = require('@vuepress/shared-utils')
// import resolve from 'path'

module.exports = options => ({
  define () {
    return {
      headerTags: options.headerTags || []
    }
  },
  enhanceAppFiles () {
    return [path.resolve(__dirname, 'enhanceAppFile.js')]
  },
  globalUIComponents: ['HeaderTags']
})
