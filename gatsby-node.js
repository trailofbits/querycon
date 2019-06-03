/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')

exports.modifyWebpackConfig = function({ config }) {
  config.loader("svgo-loader", {
    test: /\.svg$/
  })

  return config.merge({
    resolve: {
      alias: {
        assets: path.resolve(__dirname, 'src/assets')
      },
    },
  })
}
