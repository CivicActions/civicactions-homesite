/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require(`react`)
const favicon = require(`./src/favicon-32x32.png`)

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([<link key="icon" rel="icon" href={favicon} />])
}
