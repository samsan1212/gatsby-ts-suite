/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const { ProvidePlugin } = require("webpack")
const esbuild = require("esbuild")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(j|t)sx?$/,
          loader: "esbuild-loader",
          options: {
            loader: "tsx",
            tsconfigRaw: require("./tsconfig.json"),
            implementation: esbuild,
          },
        },
      ],
    },
    plugins: [
      new ProvidePlugin({
        React: "react",
      }),
    ],
  })
}
