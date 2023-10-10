/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */

const React = require(`react`)
const favicon = require(`./src/favicon.svg`)

exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHeadComponents([<link key="icon" rel="icon" href="{favicon}" />])
  setHtmlAttributes({ lang: `en` })
}
