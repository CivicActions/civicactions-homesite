import '../sass/styles.scss';
import React from 'react';
import RedLayout from '../layouts/red';
import Hero from '../components/hero.js';
import { useHubspotForm } from '@aaronhayes/react-use-hubspot-form';
import emailIcon from '../files/icons/email.png';
import mailIcon from '../files/icons/mail.png';
import phoneIcon from '../files/icons/phone.png';
import SEO from '../components/seo';

const Contact = () => {
  const { loaded, error, formCreated } = useHubspotForm({
    portalId: '9391823',
    formId: '38c64225-614c-4786-876f-12d3174cb330',
    target: '#contact-hubspot-form',
  });
  const fontStyles = {
    color: 'white',
  };

  return (
    <RedLayout>
      <SEO title='Contact' description='Get in touch.' />
      <Hero
        title='Put us to work'
        description='We love solving hard problems. Tell us about your challenge or idea,
                            and we’ll get in touch to discuss a plan of action.'
      />

      <section className='contact--form'>
        <div className='inner'>
          <h2 className='visually-hidden'>Contact form by Hubspot</h2>
          <div id='contact-hubspot-form'></div>
        </div>
      </section>

      <section className='contact--ways-to-contact--section'>
        <div className='inner'>
          <h2 className='h3' style={fontStyles}>
            More ways to reach us
          </h2>
          <p className='body' style={fontStyles}>
            Feel free to connect with us about work opportunities, speaking
            engagements, potential partnerships, or just to say hi.
          </p>
          <div className='contact-grid'>
            <div className='grid'>
              <img src={emailIcon} alt='email icon'></img>
              <p className='label body' style={fontStyles}>
                EMAIL
              </p>
              <a
                style={fontStyles}
                href='mailto:contact@civicactions.com'
                className='link body'>
                contact@civicactions.com
              </a>
            </div>
            <div className='grid'>
              <img src={mailIcon} alt='mail icon'></img>
              <p style={fontStyles} className='label body'>
                MAIL
              </p>
              <a
                style={fontStyles}
                href='https://www.google.com/maps/place/3527+Mt+Diablo+Blvd+%23269,+Lafayette,+CA+94549,+USA/data=!4m2!3m1!1s0x8085625abdbe2b5d:0x1ab127226da2131c?sa=X&ved=2ahUKEwjvoPTJ7cTwAhVGT6wKHRJAAssQ8gEwAHoECAUQAQ'
                className='link body'>
                3527 Mt Diablo Blvd #269 Lafayette, CA 94549
              </a>
            </div>
            <div className='grid'>
              <img src={phoneIcon} alt='phone icon'></img>
              <p style={fontStyles} className='label body'>
                PHONE
              </p>
              <a
                style={fontStyles}
                href='tel:510-408-7510'
                className='link body'>
                (510) 408-7510
              </a>
            </div>
          </div>
        </div>
      </section>


    </RedLayout>
  );
};

export default Contact;
