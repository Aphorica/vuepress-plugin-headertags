const { path } = require('path')
// import resolve from 'path'

module.exports = (options) => ({
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
