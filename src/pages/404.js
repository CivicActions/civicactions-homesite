import * as React from 'react';
import '../sass/styles.scss';
import { Link } from 'gatsby';
import GeneralLayout from '../layouts/general';
import PrimaryPageCTA from '../components/primary-page-cta.js';
import FrozenImg from '../files/images/zoom-image.png';
import SEO from "../components/seo";

const NotFoundPage = () => {
  return (
    <GeneralLayout>
      <SEO
          title='Page not found'
          description='Sorry it seems the page you were looking for was not found.'
      />
      <section className="not-found">
        <div className='inner'>
        <h1>404</h1>
        <h2>Well, that's awkward.</h2>
        <img alt="Funny photo of CivicActions frozen in a Zoom call" src={FrozenImg} />
        <div className="not-found--body">
          <p className="body">We’re frozen on Zoom and can’t find the page you’re looking for.</p>
          <p className="body">While we sign back on, here are some quick links for you:</p>
          <div className="list">
            <p className="body">
              <Link to="/">Visit our homepage</Link>
            </p>
            <p className="body">
              <Link to="/careers">View our job listings</Link>
            </p>
            <p className="body">
              <a href="https://medium.com/civicactions">Read our blog</a>
            </p>
          </div>
        </div>
        </div>
      </section>

      <PrimaryPageCTA
          title='Let’s build a public success story.'
          subtitle='Get in touch to start.'
      />

    </GeneralLayout>
  );
};

export default NotFoundPage;
