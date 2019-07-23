/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')

// Migrated from exports.modifyWebpackConfig in Gatsby v1.
// Gatsby v2 removed direct access to the config.
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  // Add a resolve.alias to the webpack config that aliases imports of 
  // 'assets' to 'src/assets' and finds JS modules in 'src'.
  // Merge additional configuration into the current webpack config:
  actions.setWebpackConfig({
    resolve: {
      alias: {
        assets: path.resolve(__dirname, 'src/assets'),
      },
      modules: [path.resolve(__dirname, 'src'), 'node_modules', './']
    },
  })
}
