const { merge } = require('webpack-merge')
const common = require('../../webpack.common.js')
const path = require('path')
module.exports = merge(common, {
  entry: './es/index.js',
  output: {
    filename: 'fe-toolkit.js',
    library: 'fe-toolkit',
    path: path.resolve(__dirname, './dist'),
  },
})
