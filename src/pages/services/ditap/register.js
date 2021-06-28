import '../../../sass/styles.scss';
import React from 'react';
import RedLayout from '../../../layouts/red';
import Hero from '../../../components/hero.js';
import SEO from '../../../components/seo';

const Register = () => {
  return (
    <RedLayout>
      <SEO
        title='Digital IT Acquisition Professional (DITAP) certification program'
        description='Register for the Digital IT Acquisition Professional (DITAP) certification program.'
      />
      <Hero
        title='Request DITAP training'
        description='CivicActions is a certified Small Business provider of the Digital IT Acquisition Professional (DITAP) training program.'
      />
      <section className='section--ditap-register--form'>
          <h2 className='visually-hidden'>Register for DITAP from google form</h2>
        <iframe
          src='https://docs.google.com/forms/d/e/1FAIpQLSdKpPjmE2M1Dof9fvp6TatQxVhIaDyq33iJ6X1ucUbRIYM0LQ/viewform?embedded=true%22'
          title='Civicactions DITAP register form'>

        </iframe>
      </section>
    </RedLayout>
  );
};

export default Register;
