import * as React from "react"
import '../sass/styles.scss';
import GeneralLayout from "../layouts/general";
import PrimaryPageCTA from '../components/primary-page-cta.js';
import FrozenImg from '../files/images/zoom-image.png';


const NotFoundPage = () => {
  return (
      <GeneralLayout>
        <main className='not-found'>
          <title>Page Not found</title>
          <h1>404</h1>
          <h2>Well, that's awkward.</h2>
          <img alt="image of frozen zoom screens" src={FrozenImg}/>
            <div class="not-found--body">
              <p class="body">We’re frozen on Zoom and can’t find the page you’re looking for.</p>
              <p class="body">While we sign back on, here are some quick links for you:</p>
              <div class='list'>
                  <p className="body"><a href="/">Visit our homepage</a></p>
                  <p className="body"><a href="/careers">View our job listings</a></p>
                  <p className="body"><a href="">Read our blog</a></p>
              </div>

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
