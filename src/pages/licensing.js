import '../sass/styles.scss';
import React from 'react';
import RedLayout from '../layouts/red';
import PrimaryPageCTA from '../components/primary-page-cta.js';
import StaffQuote from '../components/staff-quote.js';
import henryPooleProfilePicture from '../files/images/henry-poole.png';
import { Link } from 'gatsby';
import {Helmet} from "react-helmet";

const LicensingPage = () => {
  return (
    <RedLayout>
      <Helmet>
        <title data-react-helmet="true">Civicactions Licensing Page</title>
      </Helmet>
      <section className='licensing__hero-section'>
        <div className='inner'>
          <h2>Licensing policy</h2>
          <p className='body'>
            Our licensing policy reflects our commitment to open source
            technologies and collaborative ways of working. We believe that
            sharing our work openly is a benefit to others and ourselves.
          </p>
        </div>
      </section>
      <section
        className='licensing__content-section'
        style={{ marginBottom: 80 }}>
        <div className='inner'>
          <h3>Public license for the public good</h3>
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
            messages, is released under the
            <Link to='/'>
              Creative Commons Attribution-Share Alike License.
            </Link>
          </p>
        </div>
      </section>
      <StaffQuote
        img={henryPooleProfilePicture}
        quote='“We have never strayed from our commitment to ‘open by default’
      and ‘people first.’”'
        name='Henry Poole'
        role='CivicActions co-founder and CEO'
      />

      <section className='licensing__content-section' style={{ marginTop: 80 }}>
        <div className='inner'>
          <h3>Open culture, open minds</h3>
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
          <p className='body' style={{ marginBottom: 120 }}>
            Our free and open licensing policies help our company grow and
            thrive, while empowering others to do the same.
          </p>
        </div>
      </section>
      <PrimaryPageCTA
        title='Want to build a more open world?'
        subtitle='Let’s work together.'
        primaryButtonText='PUT US TO WORK'
        secondaryButtonText='JOIN OUR TEAM'
      />
    </RedLayout>
  );
};

export default LicensingPage;
