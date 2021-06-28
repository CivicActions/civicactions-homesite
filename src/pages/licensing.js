import '../sass/styles.scss';
import React from 'react';
import RedLayout from '../layouts/red';
import PrimaryPageCTA from '../components/primary-page-cta.js';
import SEO from '../components/seo';
import Hero from "../components/hero";

const LicensingPage = () => {
  return (
    <RedLayout>
      <SEO
        title='Licensing policy'
        description='Open source is just the beginning. Our open licensing policies allow our company to thrive while helping others to do the same.'
      />
      <Hero
          title='Licensing policy'
          description='Our licensing policy reflects our commitment to open source
            technologies and collaborative ways of working. We believe that
            sharing our work openly is a benefit to others and ourselves.'
        />
      <section className='licensing__content-section'>
        <div className='inner'>
          <h2 className='h3'>Public license for the public good</h2>
          <p className='body'>
            As a company, and as individuals working at CivicActions, we license
            all work products (including code, text, and other creative
            expressions) under public license.
          </p>
          <p className='body'>
            Our practical intention with this policy is to remove legal barriers
            that would keep organizations and individuals from rapidly deploying
            works that are critical to achieving their mission.
          </p>
          <p className='body'>
            As our default position, we obtain all materials under a public
            license from our contractors and clients, and we provide works to
            others under the same licenses.
          </p>
          <p className='body'>
            All software is released under the Affero General Public License
            (AGPL) or, if required by the original copyright holder, under the
            GNU General Public License.
          </p>
          <p className='body'>
            All content produced, including project management methods and email
            messages, is released under the <a href='https://creativecommons.org/licenses/by-sa/3.0/'>
            Creative Commons Attribution-Share Alike License.</a>

          </p>
        </div>
      </section>

      <section className='licensing__content-section'>
        <div className='inner'>
          <h2 className='h3'>Open culture, open minds</h2>
          <p className='body'>
            In practice, this policy supports the culture and values of
            CivicActions by allowing us to:
          </p>
          <ul>
            <li className='body'>
              Stay focused on the work of helping clients accomplish their
              objectives
            </li>
            <li className='body'>
              Attract clients that hold similar values and wish to empower their
              own communities through public and open source licensing
            </li>
            <li className='body'>
              Attract creative, technical, and strategic talent by allowing them
              to maintain access to their creations forever
            </li>
            <li className='body'>
              Position ourselves so that we are paid for being present, not for
              work that was done in the past
            </li>
          </ul>
          <p className='body'>
            Our free and open licensing policies help our company grow and
            thrive, while empowering others to do the same.
          </p>
        </div>
      </section>
      <PrimaryPageCTA
          title='Let’s build a public success story.'
          subtitle='Get in touch to start.'
      />
    </RedLayout>
  );
};

export default LicensingPage;
