import '../sass/styles.scss';
import React from 'react';
import RedLayout from '../layouts/red';
import PrimaryPageCTA from '../components/primary-page-cta.js';
import ClientsSection from '../components/clients.js';
import Card from '../components/card.js';
import { Link } from 'gatsby';
import SEO from '../components/seo';
import dataServicesIcon from '../files/icons/data-services-icon.svg';
import itModernizationIcon from '../files/icons/it-modernization-icon.svg';
import productDesignIcon from '../files/icons/product-design-icon.svg';
import securityComplianceIcon from '../files/icons/security-compliance-icon.svg';
import webCmsIcon from '../files/icons/web-cms-icon.svg';
import workforceDevelopmentIcon from '../files/icons/workforce-dev-icon.svg';

const ContractingPage = () => {
  return (
    <RedLayout className='contracting-page'>
      <SEO
        title='Contracting information'
        description='We are a Small Business helping government agencies make digital services that build public trust. Learn about contracting with us.'
      />
      <div className='hero-component'>
        <div className='inner'>
          <h1>Your strategic partner for modernizing government services</h1>
          <p className='body'>
            We help the government deliver better public services through <strong>open technology and design</strong>. With expertise in digital accessibility, free and open source software, and human-centered design, we are committed to using technology to help <strong>build a world that works for all</strong>.
          </p>
        </div>
      </div>
      <section className='contracting--services-section'>
        <div className='inner'>
          <h2>Our Expertise</h2>
          <div className='service-cards-grid'>
            <Card
              title='Web & CMS'
              icon={webCmsIcon}
              link='/services#web-cms'
            />
            <Card
              title='IT & Service Modernization'
              icon={itModernizationIcon}
              link='/services#service-modernization'
            />
            <Card
              title='Product & Design'
              icon={productDesignIcon}
              link='/services#product-design'
            />
            <Card
              title='Security & Compliance'
              icon={securityComplianceIcon}
              link='/services#security-compliance'
            />
            <Card
              title='Data Services'
              icon={dataServicesIcon}
              link='/services#data-services'
            />
            <Card
              title='Workforce Development'
              icon={workforceDevelopmentIcon}
              link='/services#workforce-development'
            />
          </div>
        </div>
      </section>
      <section className='section--company-data-diff'>
        <div className='inner'>
          <div className='company-data list--wrapper'>
            <h2>Company data</h2>
            <ul className='body'>
              <li>CivicActions, Inc.</li>
              <li>GSA Schedule: GS-35F-337BA</li>
              <ul>
                <li>Professional Services, Health IT and Cloud</li>
              </ul>
              <li>UEI: XSZFHRS5QFL5</li>
              <li>CAGE Code: 65FK1</li>
              <li>NAICS Codes: 541511, 541512, 541513, 541519</li>
              <li>Founded: 2004 (California)</li>
              <li>Incorporated: 2010 (California)</li>
              <li>Partnership POC: <a href="mailto:sales@civicactions.com">sales@civicactions.com</a></li>
              <li>Standard Product Code: 80101507</li>
              <li>
                Certified Small Business (Micro), State of California DGS, No.
                2003474
              </li>
              <li>Canadian</li>
              <ul>
                <li>CivicActions Digital Service ULC (Canadian entity)</li>
                <li>Canadian POC: <a href="mailto:ca-canada@civicactions.com">ca-canada@civicactions.com</a></li>
              </ul>
            </ul>
          </div>
          <div className='differentiators list--wrapper'>
            <h2>Differentiators</h2>
            <ul className='body'>
              <li>65 Drupal developers, with 16 Acquia certifications</li>
              <li>20 W3C edX Accessibility certifications</li>
              <li>
                Founding members of{' '}
                <a href='https://digitalservicescoalition.org/#/' className='external-link-white'>
                  Digital Services Coalition
                </a>
              </li>
              <li>
                Contributors to <Link to='/press/'>industry press</Link>{' '}
                (Government Matters, FedScoop, StateScoop, FCW, NextGov, GCN,
                Federal Times)
              </li>
              <li>
                Certified small-business provider of{' '}
                <Link to='/services/ditap'>DITAP</Link> program certification
                training
              </li>
              <li>U.S. Digital Service (USDS) alumni team members</li>
              <li>
                Co-maintainers of U.S. Web Design System (USWDS){' '}
                <a href='https://www.drupal.org/project/uswds' className='external-link-white'>
                  base theme in Drupal
                </a>
              </li>
              <li>
                Founders of{' '}
                <a href='https://www.publicgood.tech/' className='external-link-white'>Technologists for the Public Good</a>{' '}
                to support government innovators
              </li>
              <li>
                Core maintainers of the open source open data platform{' '}
                <a href='https://getdkan.org/' className='external-link'>DKAN</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <ClientsSection />
      <div className='hero-component'>
        <div className='inner'>
          <h2>Contracting Vehicles (Prime)</h2>
          <p className='body'>
          <ul>
            <li>GSA Multiple Award Schedule
              <ul>
                <li>IT Professional Services (SIN 54151S)</li>
                <li>Health IT Services (SIN 54151HEAL)</li>
                <li>Cloud Computing and Cloud Related IT Professional Services (SIN 518210C)</li>
              </ul>
            </li>
            <li>State of California, Technology, Digital and Data Consulting Master Service Agreement</li>
            <li>State of California Multiple Award Schedule</li>
            <li>Department of the Interior, Drupal Developer Support Services BPA</li>
            <li>State of Colorado, Agile Vendor Pool</li>
            <li>Department of Veterans Affairs, Federal Acquisition Certification IDIQ</li>
          </ul>
          </p>
        </div>
      </div>
      <PrimaryPageCTA
        title='Let’s build a public success story.'
        subtitle='Get in touch to start.'
        secondaryButtonText='Explore Services'
        secondaryButtonLink='/services/'
      />
    </RedLayout>
  );
};

export default ContractingPage;
