import '../sass/styles.scss';
import React from 'react';
import RedLayout from '../layouts/red';
import PrimaryPageCTA from '../components/primary-page-cta.js';
import { Helmet } from "react-helmet";
import Hero from "../components/hero";
import ContractVehicle from "../components/contract-vehicle";
import ContractVehiclePdf from "../components/contract-vehicle-pdf";
import WorkAwards from "../components/work-awards";

import cio from "../files/images/client-logos/cio.svg";
import dgs from "../files/images/client-logos/dgs.svg";
import doi from "../files/images/client-logos/doi.svg";
import govuk from "../files/images/client-logos/govuk.svg";
import gsa from "../files/images/client-logos/gsa.svg";
import library from "../files/images/client-logos/library.svg";

const ContractingPage = () => {
  return (
    <RedLayout className='contracting-page'>
      <Helmet>
        <title data-react-helmet="true">Civicactions Contracting Page</title>
      </Helmet>
      <Hero
        title={'Your strategic partner for modernizing government services'}
        description={'We apply Agile and DevOps, open source software, and human-centered design to elevate digital platforms for organizations serving the public. As an innovative small business, we solve long-standing modernization challenges by creating automated compliance models for system security plans and bringing accessibility to the forefront of design and development. Let’s work together to make government services that build public trust.'}
      />
      <section className='section--contracting-vehicles'>
        <h2>Contacting Vehicles</h2>
        <div className='inner'>

          <ContractVehiclePdf
            icon={gsa}
            alt='GSA logo'
            name='GSA MAS'
            info='General Services Administration Multiple Award Schedule (prime)'
            contract='Contract number: GS-35F-337BA'
          />
          <ContractVehiclePdf
            icon={dgs}
            alt='California Department of General Services logo'
            name='CMAS'
            info='California Multiple Award Schedule (prime)'
            contract='Contract number: 3-16-70-3298A'
          />
          <ContractVehicle
            icon={govuk}
            alt='GOV.UK logo'
            name='GOV.UK Digital Marketplace G-Cloud'
            info='Framework agreement: RM1557.12'

          />
          <ContractVehicle
            icon={library}
            alt='Library of Congress logo'
            name='LOC IDIQ'
            info='Library of Congress Agile Development and System Integration Modernization (subcontractor to Ad Hoc)'
            contract='Contract number: LCLOC20D0013'
          />
          <ContractVehicle
            icon={cio}
            alt='NIH Information Technology Acquisition and Assessment Center and Chief Information Officer Solutions and Partners 3 logo'
            name='CIO SP3 (RIVA)'
            info='General Services Administration Multiple Award Schedule (prime) Contract number: GS-35F-337BA'
            contract='Contract number: 75N98120D00070'
          />
          <ContractVehicle
            icon={doi}
            alt='U.S. Department of the Interior logo'
            name='DOI IDIQ'
            info='General Services Administration Multiple Award Schedule (prime) Contract number: GS-35F-337BA'
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
              <li>Certified Small Business (Micro), State of California DGS, No. 2003474</li>
              <li>Incorporated: 2004 (California)</li>
              <li>CivicActions Digital Service ULC (Canadian entity)</li>
            </ul>
          </div>
          <div className='differentiators list--wrapper'>
            <h2>Differentiators</h2>
            <ul className='body'>
              <li>Founding members of Digital Services Coalition</li>
              <li>Contributors to industry press (Government Matters, FedScoop, StateScoop, FCW, NextGov, GCN, Federal Times)</li>
              <li>Certified small-business provider of DITAP program certification training</li>
              <li>U.S. Digital Service (USDS) alumni team members</li>
              <li>Maintainers of U.S. Web Design System (USWDS) base theme in Drupal</li>
              <li>Founders of AGL Association to support government innovators</li>
              <li>Core maintainers of the open source open data platform DKAN</li>
              <li>Named to GovTech 100 list five years in a row, 2017 - 2021</li>
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
              />
              <WorkAwards
                client='National Science Foundation'
                title='Ongoing support and improvement of federal science research website'
              />
            </div>
          </div>
          <div>
            <div className='year'>2020</div>
            <div className='content'>
              <WorkAwards
                client='U.S. Digital Service / Office of Federal Procurement Policy'
                title='Certified small business provider of DITAP program training'
                link='/press/2020-08-14-civicactions-certified-to-deliver-ditap'
              />
              <WorkAwards
                client='DistributedGov'
                title='Remote / telework training and consulting'
              />
              <WorkAwards
                client='Centers for Medicare and Medicaid Services'
                title='Agile development website modernization and open data migration'
              />
            </div>
          </div>
          <div>
            <div className='year'>2019</div>
            <div className='content'>
              <WorkAwards
                client='Centers for Medicare and Medicaid Services'
                title='Design challenge to improve health care experience for seniors'
              />
              <WorkAwards
                client='U.S. Department of Veterans Affairs'
                title='VA.gov modernization using Drupal and human-centered design'
              />
            </div>
          </div>
        </div>
      </section>

      <PrimaryPageCTA
        title='Let’s build a public success story.'
        subtitle='Get in touch to start.'
        primaryButtonText='PUT US TO WORK'
        secondaryButtonText='Explore Services'
        secondaryButtonLink='/services/'
      />
    </RedLayout>
  );
};

export default ContractingPage;