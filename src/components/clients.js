import '../sass/styles.scss';
import React from 'react';
import clientLogo1 from '../files/images/client-logos/client-logo-1.png';
import clientLogo2 from '../files/images/client-logos/client-logo-2.png';
import clientLogo3 from '../files/images/client-logos/client-logo-3.png';
import clientLogo4 from '../files/images/client-logos/client-logo-4.png';
import clientLogo5 from '../files/images/client-logos/client-logo-5.png';
import clientLogo6 from '../files/images/client-logos/client-logo-6.png';
import clientLogo7 from '../files/images/client-logos/client-logo-7.png';
import clientLogo8 from '../files/images/client-logos/client-logo-8.png';
import clientLogo9 from '../files/images/client-logos/client-logo-9.png';
import clientLogo10 from '../files/images/client-logos/client-logo-10.png';
import clientLogo11 from '../files/images/client-logos/client-logo-11.png';
import clientLogo12 from '../files/images/client-logos/client-logo-12.png';
import clientLogo13 from '../files/images/client-logos/client-logo-13.png';
import clientLogo14 from '../files/images/client-logos/client-logo-14.png';
import clientLogo15 from '../files/images/client-logos/client-logo-15.png';
import clientLogo16 from '../files/images/client-logos/client-logo-16.png';
import clientLogo17 from '../files/images/client-logos/client-logo-17.png';
import clientLogo18 from '../files/images/client-logos/client-logo-18.png';

const ClientsSection = (props) => {
  return (
    <section className='home--clients-section'>
      <div className='inner'>
        <div class='body-large'>
          Strategy, design, technology, consulting, and training services for
          government agencies
        </div>
        <div class='grid'>
          <img src={clientLogo1} alt='Client Logo'></img>
          <img src={clientLogo2} alt='Client Logo'></img>
          <img src={clientLogo3} alt='Client Logo'></img>
          <img src={clientLogo4} alt='Client Logo'></img>
          <img src={clientLogo5} alt='Client Logo'></img>
          <img src={clientLogo6} alt='Client Logo'></img>
          <img src={clientLogo7} alt='Client Logo'></img>
          <img src={clientLogo8} alt='Client Logo'></img>
          <img src={clientLogo9} alt='Client Logo'></img>
          <img src={clientLogo10} alt='Client Logo'></img>
          <img src={clientLogo11} alt='Client Logo'></img>
          <img src={clientLogo12} alt='Client Logo'></img>
          <img src={clientLogo13} alt='Client Logo'></img>
          <img src={clientLogo14} alt='Client Logo'></img>
          <img src={clientLogo15} alt='Client Logo'></img>
          <img src={clientLogo16} alt='Client Logo'></img>
          <img src={clientLogo17} alt='Client Logo'></img>
          <img src={clientLogo18} alt='Client Logo'></img>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
