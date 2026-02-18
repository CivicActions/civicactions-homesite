/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */
import React from 'react'
import { HubspotProvider } from '@aaronhayes/react-use-hubspot-form'

export const onClientEntry = async () => {
  if (typeof IntersectionObserver === "undefined") {
    await import("intersection-observer")
  }
}

// Gatsby's method of wrapping the root react element (app.js)
// HubspotProvider context is required for @aaronhayes/react-use-hubspot-form to work on the /contact page
export const wrapRootElement = ({ element }) => (
  <HubspotProvider>
    {element}
  </HubspotProvider>
)
