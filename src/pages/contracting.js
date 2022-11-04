import '../sass/styles.scss';
import React from 'react';
import RedLayout from '../layouts/red';
import PrimaryPageCTA from '../components/primary-page-cta.js';
import ContractVehicle from '../components/contract-vehicle';
import ContractVehiclePdf from '../components/contract-vehicle-pdf';
import WorkAwards from '../components/work-awards';
import { Link } from 'gatsby';
import SEO from '../components/seo';
import cio from '../files/images/client-logos/cio.svg';
import dgs from '../files/images/client-logos/dgs.svg';
import doi from '../files/images/client-logos/doi.svg';
import govuk from '../files/images/client-logos/govuk.svg';
import gsa from '../files/images/client-logos/gsa.svg';
import gsaPdf from '../files/GMAS-contract-schedule.pdf';
import cmasPdf from '../files/CMAS-contract-schedule.pdf';
import library from '../files/images/client-logos/library.svg';

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
            We apply Agile and DevOps, open source software, and human-centered design to elevate digital platforms for organizations serving the public. As an <strong>innovative small business</strong>, we solve long-standing modernization challenges by creating automated compliance models for system security plans and bringing <strong>accessibility to the forefront</strong> of design and development. Let’s work together to make government services that <strong>build public trust.</strong>
          </p>
        </div>

      </div>
      <section className='section--contracting-vehicles'>
        <h2>Contracting vehicles</h2>
        <div className='inner'>
          <ContractVehiclePdf
            icon={gsa}
            alt='GSA logo'
            name='GSA MAS'
            info='General Services Administration Multiple Award Schedule (prime)'
            contract='Contract number: GS-35F-337BA'
            link={gsaPdf}
          />
          <ContractVehiclePdf
            icon={dgs}
            alt='California Department of General Services logo'
            name='CMAS'
            info='California Multiple Award Schedule (prime)'
            contract='Contract number: 3-16-70-3298A'
            link={cmasPdf}
          />
          <ContractVehicle
            icon={govuk}
            alt='GOV.UK logo'
            name='GOV.UK Digital Marketplace G-Cloud'
            info='Framework agreement: RM1557.12'
            link='https://www.digitalmarketplace.service.gov.uk/g-cloud/supplier/708558'
          />
          <ContractVehicle
            icon={doi}
            alt='Library of Congress logo'
            name='LOC IDIQ'
            info='Library of Congress Agile Development and System Integration Modernization (subcontractor to Ad Hoc)'
            contract='Contract number: LCLOC20D0013'
          />
          <ContractVehicle
            icon={cio}
            alt='NIH Information Technology Acquisition and Assessment Center and Chief Information Officer Solutions and Partners 3 logo'
            name='CIO SP3 (RIVA)'
            info='Chief Information Officer - Solutions and Partners 3'
            contract='Contract number: 75N98120D00070'
            link='https://nitaac.nih.gov/services/cio-sp3'
          />
          <ContractVehicle
            icon={library}
            alt='U.S. Department of the Interior logo'
            name='DOI IDIQ'
            info='Drupal Web Developer BPA'
            contract='Contract number: 140D0419A0010'
            period='Contract period: 02/06/2019  - 11/30/2023'
          />
        </div>
      </section>
      <section className='section--company-data-diff'>
        <div className='inner'>
          <div className='company-data list--wrapper'>
            <h2>Company data</h2>
            <ul className='body'>
              <li>DUNS: 022112930</li>
              <li>CAGE Code: 65FK1</li>
              <li>NAICS Codes: 519190, 541511, 541512, 541513, 541519</li>
              <li>Standard Product Code: 80101507</li>
              <li>
                Certified Small Business (Micro), State of California DGS, No.
                2003474
              </li>
              <li>Incorporated: 2004 (California)</li>
              <li>CivicActions Digital Service ULC (Canadian entity)</li>
            </ul>
          </div>
          <div className='differentiators list--wrapper'>
            <h2>Differentiators</h2>
            <ul className='body'>
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
                <a href='https://www.agilegovleaders.org/' className='external-link-white'>AGL Association</a>{' '}
                to support government innovators
              </li>
              <li>
                Core maintainers of the open source open data platform{' '}
                <a href='https://getdkan.org/' className='external-link'>DKAN</a>
              </li>
              <li>
                Named to{' '}
                <a href='https://www.govtech.com/100/2021' className='external-link-white'>GovTech 100</a> list
                five years in a row, 2017 - 2021
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className='section--recent-work-awards'>
        <div className='inner'>
          <h2>Recent work and contract awards</h2>
          <div>
            <div className='year'>2021</div>
            <div className='content'>
              <WorkAwards
                client='U.S. Department of Education'
                title='Improvement of systems for advancing adult literacy'
                link='/press/2021-05-11-civicactions-wins-department-of-ed-recompete'
              />
              <WorkAwards
                client='National Science Foundation'
                title='Ongoing support and improvement of federal science research website'
                link='/press/2021-05-03-civicactions-wins-nsf-recompete'
              />
            </div>
          </div>
          <div>
            <div className='year'>2020</div>
            <div className='content'>
              <WorkAwards
                client='DistributedGov'
                title='Remote / telework training and consulting'
                link='https://distributedgov.com/news/distributedgov-launches'
                classname='external-link'
              />
              <WorkAwards
                client='U.S. Digital Service / Office of Federal Procurement Policy'
                title='Certified small business provider of DITAP program training'
                link='/press/2020-08-14-civicactions-certified-to-deliver-ditap'
              />
              <WorkAwards
                client='Centers for Medicare and Medicaid Services'
                title='Agile development website modernization and open data migration'
                link='/press/2020-03-02-civicactions-wins-cms-contract'
              />
            </div>
          </div>
          <div>
            <div className='year'>2019</div>
            <div className='content'>
              <WorkAwards
                client='Centers for Medicare and Medicaid Services'
                title='Design challenge to improve health care experience for seniors'
                link='/case-studies/cms-design-challenge-mvp'
              />
              <WorkAwards
                client='U.S. Department of Veterans Affairs'
                title='VA.gov modernization using Drupal and human-centered design'
                link='/case-studies/va-cms-modernization'
              />
            </div>
          </div>
        </div>
      </section>

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
