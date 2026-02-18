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

const ClientsSection = () => {
  return (
    <section className='home--clients-section'>
      <div className='inner'>
        <h2 className='body-large'>
          Trusted by organizations that serve the people.
        </h2>
        <div tabIndex='0' className='grid'>
          <img src={clientLogo1} alt='Logo for the State of Georgia'></img>
          <img src={clientLogo2} alt='Logo for U.S. Veterans Affairs'></img>
          <img
            src={clientLogo3}
            alt='Logo for the Executive Office of the President of the United States'></img>
          <img
            src={clientLogo4}
            alt='Logo for the U.S. House of Representatives'></img>
          <img
            src={clientLogo5}
            alt='Logo for the Department of Health & Human Services'></img>
          <img
            src={clientLogo6}
            alt='Logo for the National Science Foundation'></img>
          <img
            src={clientLogo7}
            alt='Logo for the U.S. Justice Department Drug Enforcement Administration'></img>
          <img
            src={clientLogo8}
            alt='Logo for the City of Louisville of Jefferson County'></img>
          <img
            src={clientLogo9}
            alt='Logo for the Freedom of Information Act'></img>
          <img
            src={clientLogo10}
            alt='Logo for the Metropolitan Transportation Authority'></img>
          <img src={clientLogo11} alt='Logo for the City of Los Angeles'></img>
          <img
            src={clientLogo12}
            alt='Logo for the U.S. Department of Agriculture'></img>
          <img
            src={clientLogo13}
            alt='Logo for the U.S. Federal Communications Commission'></img>
          {/*<img
            src={clientLogo14}
            alt='Logo for the U.S. Department of Education'></img>*/}
          <img src={clientLogo15} alt='Logo for the Smithsonian'></img>
          <img
            src={clientLogo16}
            alt='Logo for the U.S. Department of Defense'></img>
          <img
            src={clientLogo17}
            alt='Logo for San Francisco Environment'></img>
          <img
            src={clientLogo18}
            alt='Logo for the California Child Welfare Digital Services'></img>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
