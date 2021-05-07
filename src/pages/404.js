import * as React from "react"
import '../sass/styles.scss';
import GeneralLayout from "../layouts/general";
import PrimaryPageCTA from '../components/primary-page-cta.js';
import FrozenImg from '../files/images/frozen-404.png';


// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  textAlign: "center",
}
const headingStyles = {
  marginTop: 0,
  color: "#D83933",
}
const heading2Styles = {
  textAlign: "center",
}

const paragraphStyles = {
  paddingBottom: 24,
}
const imgStyles = {
  padding: 32,
}

// markup
const NotFoundPage = () => {
  return (
      <GeneralLayout>
        <main style={pageStyles}>
          <title>Page Not found</title>
          <h1 style={headingStyles}>404</h1>
          <h2 style={heading2Styles}>Well, that's awkward.</h2>
          <img alt="image of frozen zoom screens" style={imgStyles} src={FrozenImg}/>
            <div class="404--body">
              <p class="body">We’re frozen on Zoom and can’t find the page you’re looking for.</p>
              <p class="body" style={paragraphStyles} >While we sign back on, here are some quick links for you:</p>
              <p class="body"><a href="/">Visit our homepage</a></p>
              <p class="body"><a href="/careers">View our job listings</a></p>
              <p class="body" style={paragraphStyles}><a href="/blog">Read our blog</a></p>
            </div>

        </main>
        <PrimaryPageCTA
            title='Let’s build a public success story.'
            subtitle='Get in touch to start.'
            primaryButtonText='PUT US TO WORK'
            secondaryButtonText='JOIN OUR TEAM'
        />
      </GeneralLayout>
  )
}

export default NotFoundPage
