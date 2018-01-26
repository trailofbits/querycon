/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.modifyWebpackConfig = function({ config }) {
  config.loader("svgo-loader", {
    test: /\.svg$/
  })

  return config
}
