import '../sass/styles.scss';
import React from 'react';
import RedLayout from '../layouts/red';
import PrimaryPageCTA from '../components/primary-page-cta.js';
import Hero from '../components/hero.js';
import SEO from '../components/seo';

const FeedbackPage = () => {
  return (
    <RedLayout>
      <SEO
        title='Feedback or update requests'
        description='Bugs? Comments? Updates? We welcome your feedback and contributions to the site.'
      />
      <Hero
        title='Feedback'
        description='Bugs? Comments? Suggestions? We welcome your feedback and ideas for our site.'
      />
      <section className='section--feedback--github'>
        <div className='inner'>
          <h2>We work in the open.</h2>
          <p className='body'>
            Our work lives{' '}
            <a href='https://github.com/CivicActions/civicactions-homesite'>
              here in GitHub
            </a>
            , and we appreciate contributions from everyone. If you found a bug
            or problem on our site, you can{' '}
            <a href='https://github.com/CivicActions/civicactions-homesite/issues'>
              submit a GitHub issue here.
            </a>
          </p>
        </div>
      </section>
      <section className='section--feedback--form'>
        <div className='inner'>
          <h2>Get in touch with our website team.</h2>
          <p className='body'>
              You can fill out this quick form to let our team know about issues, updates, or ideas for the site.
          </p>
          <iframe
            src='https://docs.google.com/forms/d/e/1FAIpQLSeTBqCxx8zHegPyjg1pjWxb7nCLVdKSjeUyjHZ57VnDRO5zAQ/viewform?embedded=true'
            width='915'
            title='Civicactions feedback form'>

          </iframe>
        </div>
      </section>
      <PrimaryPageCTA
        title='Let’s build a public success story.'
        subtitle='Get in touch to start.'
      />
    </RedLayout>
  );
};

export default FeedbackPage;
