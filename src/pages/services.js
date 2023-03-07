import '../sass/styles.scss';
import React, { useEffect, useRef, useState } from 'react';
import RedLayout from '../layouts/red';
import { Link } from 'gatsby';
import PrimaryPageCTA from '../components/primary-page-cta.js';
import Hero from '../components/hero.js';
import dataServicesIcon from '../files/icons/data-services-icon.svg';
import itModernizationIcon from '../files/icons/it-modernization-icon.svg';
import productDesignIcon from '../files/icons/product-design-icon.svg';
import securityComplianceIcon from '../files/icons/security-compliance-icon.svg';
import webCmsIcon from '../files/icons/web-cms-icon.svg';
import workforceDevelopmentIcon from '../files/icons/workforce-dev-icon.svg';
import Scrollspy from 'react-scrollspy';
import SEO from '../components/seo';

const ServicesPage = ({ data }) => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 500);
    });
  }, []);
  return (
    <RedLayout>
      <SEO
        title='Services'
        description='We use Agile and DevOps, open source software, and human-centered design to elevate government digital services.'
      />
      <Hero
        title='Government services that build public trust'
        description='At its core, digital transformation is about improving the customer experience of government. We use thoughtful design and open source technologies to help you deliver modern public services that put people first. '
      />
      <section className='services--content-section'>
        <h2 className='visually-hidden'>Services page sections in sidebar</h2>
        <div className={scroll ? 'inner scroll' : 'inner'}>
          <Scrollspy
            className={'services--sidebar'}
            items={['web-cms', 'service-modernization', 'product-design', 'security-compliance', 'data-services', 'workforce-development']}
            currentClassName='is-current'>
            <li>
              <Link className={`body`} to='#web-cms'>
                Web & CMS
              </Link>
            </li>
            <li>
              <Link className={`body`} to='#service-modernization'>
                IT & Service Modernization
              </Link>
            </li>
            <li>
              <Link className={`body`} to='#product-design'>
                Product & Design
              </Link>
            </li>
            <li>
              <Link className={`body`} to='#security-compliance'>
                Security & Compliance
              </Link>
            </li>

            <li>
              <Link className={`body`} to='#data-services'>
                Data Services
              </Link>
            </li>
            <li>
              <Link className={`body`} to='#workforce-development'>
                Workforce Development
              </Link>
            </li>
          </Scrollspy>

          <div>
            <section id={'web-cms'}>
              <img alt='' className='services-content--icon' src={webCmsIcon} />
              <div className='h6 services-content--label'>WEB & CMS</div>
              <h2 className='title'>
                Accessible and secure government websites at scale
              </h2>
              <div className='body description'>
                Government websites have complex information and diverse user
                groups, but they can be made surprisingly usable and
                maintainable. We can help you plan a content strategy that
                merges business goals with user needs (and makes life easier for
                your staff!) then build a flexible and secure content management
                system that will grow with you into the future.
              </div>
              <h3 className='h4'>How we’ve helped others</h3>
              <div className='body'>U.S. Department of Veterans Affairs</div>
              <Link to='/case-studies/va-cms-modernization' className='body-large'>Built a modern CMS for VA.gov</Link>
              <div className='body'>
                Centers for Medicare and Medicaid Services
              </div>
              <Link to='/case-studies/cms-web-experience-services' className='body-large'>
                Designed a user-friendly health journey for seniors
              </Link>
              <div className='cta'>
                <h3 className='h4'> How we can help you</h3>
                <ul>
                  <li>
                    <a className='external-link' href='https://accessibility.civicactions.com/posts/heart-accessibility '>Accessibility consulting and training</a>
                  </li>
                  <li>
                    Research and discovery
                  </li>
                  <li>
                    CMS development and migration
                  </li>
                  <li>
                    User experience and visual design
                  </li>
                  <li>Custom front end development</li>
                  <li>Content design and strategy</li>
                  <li>
                    Maintenance and support
                  </li>

                  <li>Cloud infrastructure</li>
                  <li>Product management</li>
                  <li>Agile delivery management</li>
                </ul>
                <div className='h6 button'><Link to='/contact'>IMPROVE YOUR WEBSITE</Link></div>
              </div>
            </section>
            <section id={'service-modernization'}>
              <img alt='' className='services-content--icon' src={itModernizationIcon} />
              <div className='h6 services-content--label'>
                IT & service modernization
              </div>
              <h2 className='h3 title'>
                Modernization of legacy government systems and services
              </h2>
              <div className='body description'>
                Outdated systems and paper-based processes make it hard for
                agency staff to efficiently meet the needs of people who depend
                on you for critical government services. We help you transform
                your legacy applications and improve your workflows using
                human-centered design, automation, and scalable, secure
                infrastructure.
              </div>
              <h3 className='h4'>How we’ve helped others</h3>
              <div className='body'>
                California Child Welfare Digital Services
              </div>
              <a href='https://cwds.ca.gov/' className='external-link body-large'>
                Provided DevOps support for child welfare systems
              </a>
              <div className='body'>
                New York Metropolitan Transit Authority
              </div>
              <Link to='/case-studies/nyc-metro-transit-digital-clocks ' className='body-large'>
                Connected Drupal and the Internet of Things to power digital
                signage
              </Link>
              <div className='cta'>
                <h3 className='h4'> How we can help you</h3>
                <ul>
                  <li>Research and discovery</li>
                  <li>Service design</li>
                  <li>Cloud adoption and migration</li>
                  <li>DevSecOps</li>
                  <li>Site Reliability Engineering (SRE)</li>
                  <li>Custom front end development</li>
                  <li>Infrastructure and platform modernization</li>
                  <li>Accessibility consulting and training</li>
                  <li>API design and cloud native development</li>
                  <li>Technology strategy consulting</li>
                </ul>
                <div className='h6 button'><Link to='/contact'>WORK SMARTER</Link></div>
              </div>
            </section>
            <section id={'product-design'}>
              <img
                alt=''
                className='services-content--icon'
                src={productDesignIcon}
              />
              <div className='h6 services-content--label'>Product & design</div>
              <h2 className='h3 title'>
                Human-centered problem solving and strategy
              </h2>
              <div className='body description'>
                No matter what the challenge is, technology is only one part of
                the solution. Before building anything new, we work with you to
                define problems and desired outcomes, understand the customer
                and stakeholder ecosystem, decide on an approach that serves
                business goals and user needs, and make plans for facilitating
                adoption and measuring success.
              </div>
              <h3 className='h4'>How we’ve helped others</h3>
              <div className='body'>
                Centers for Medicare and Medicaid Services
              </div>
              <Link to='/case-studies/cms-design-challenge-mvp' className='body-large'>
                Designed a persona-driven strategy for Medicare benefits
              </Link>
              <div className='body'>National Science Foundation</div>
              <Link to='/case-studies/nsf-website-redesign' className='body-large'>
                Improved user experience to support science research
              </Link>
              <div className='cta'>
                <h3 className='h4'> How we can help you</h3>
                <ul>
                  <li>Research and discovery</li>
                  <li>Product management</li>
                  <li>Customer experience and service design</li>
                  <li>Accessibility consulting and training</li>
                  <li>User experience and visual design</li>
                  <li>Content design and strategy</li>
                  <li>Business and impact analysis</li>
                  <li>Agile and Human-Centered Design training</li>
                  <li>Change management consulting</li>
                </ul>
                <div className='h6 button'><Link to='/contact'>Design a better future</Link></div>
              </div>
            </section>
            <section id={'security-compliance'}>
              <img
                alt=''
                className='services-content--icon'
                src={securityComplianceIcon}
              />
              <div className='h6 services-content--label'>
                SECURITY & COMPLIANCE
              </div>
              <h2 className='h3 title'>
                Modern security practices for continuous compliance and
                reliability
              </h2>
              <div className='body description'>
                People want to know their government will keep sensitive
                information safe—but traditional compliance regulations are
                cumbersome and don’t provide an accurate measure of security. We
                help you “shift left” with automated processes that keep
                development and operations teams in sync, with security and
                compliance woven in from the start, for faster deployment of
                secure and stable code.
              </div>
              <h3 className='h4'>How we’ve helped others</h3>
              <div className='body'>Defense Security Cooperation Agency</div>
              <Link to='/case-studies/globalnet-platform-support' className='body-large'>
                Supporting international peace partners with continuous
                compliance
              </Link>
              <div className='body'>
                Various agencies
              </div>
              <a href='https://www.youtube.com/watch?v=jsdUYUiKM3U&list=PLbbanFptQWaKZp8_IFnZmJbsa2UGuj3ax&index=6' className='external-link body-large'>
                Helping government automate federal compliance
              </a>

              <div className='cta'>
                <h3 className='h4'>How we can help you</h3>
                <ul>
                  <li>DevSecOps</li>
                  <li>Continuous integration / deployment (CI / CD)</li>
                  <li>Site Reliability Engineering (SRE)</li>
                  <li>Continuous monitoring / automated compliance</li>
                  <li>Rapid / automated Authority to Operate (ATO)</li>
                  <li>Continuous compliance / Compliance As Code</li>
                  <li>Security consulting and training</li>
                  <li>Free and open source software (FOSS) security</li>
                </ul>
                <div className='h6 button'><Link to='/contact'>Re-think security</Link></div>
              </div>
            </section>
            <section id={'data-services'}>
              <img
                alt=''
                className='services-content--icon'
                src={dataServicesIcon}
              />
              <div className='h6 services-content--label'>DATA SERVICES</div>
              <h2 className='h3 title'>
                Open data sharing to drive evidence-based decisions
              </h2>
              <div className='body description'>
                Government can serve people best when public data is open,
                discoverable, and usable. We can help you create a data strategy
                and comply with open data mandates using open source tools to
                aggregate, catalog, and standardize your data. Then it’s ready
                to use, by your staff or the public, to make informed decisions,
                track metrics, and power useful apps.
              </div>
              <h3 className='h4'>How we’ve helped others</h3>
              <div className='body'>Centers for Medicare and Medicaid Services (CMS)</div>
              <div className='body-large'>
                Supporting government transparency
              </div>
              <div className='body'>
                We empower federal agencies like CMS to reinstate ownership of their data on open data platforms and are working toward a future in which more public data accessibility can become a reality.
              </div>
              <Link to='https://openpaymentsdata.cms.gov/' className='body-large'>
                Open data to search payments made by drug and medical device companies to medical providers
              </Link>
              <div className='cta'>
                <h3 className='h4'> How we can help you</h3>
                <ul>
                  <li>Data program strategy</li>
                  <li>Open data compliance</li>
                  <li>Research of data users and their needs</li>
                  <li>Data cataloging and maintenance</li>
                  <li>Data platform migration / modernization</li>
                  <li>Custom search and analysis applications</li>
                  <li>Data visualizations and dashboards</li>
                  <li>Helpdesk support for your data platform</li>
                  <li>Data science and analysis</li>
                </ul>
                <div className='h6 button'><Link to='/contact'>BE DATA-DRIVEN</Link></div>
              </div>
            </section>
            <section id={'workforce-development'}>
              <img
                alt=''
                className='services-content--icon'
                src={workforceDevelopmentIcon}
              />
              <div className='h6 services-content--label'>
                WORKFORCE DEVELOPMENT
              </div>
              <h2 className='h3 title'>
                Modern skills for an adaptable government workforce
              </h2>
              <div className='body description'>
                Lasting transformation in government happens from the inside
                out. Organizational change is hard, but not impossible. We offer
                consulting and training to help your teams build skills in
                modern ways of working so your agency can increase resilience,
                save taxpayer dollars, and serve the public better in the
                digital age.
              </div>
              <h3 className='h4'>How we’ve helped others</h3>
              <div className='body'>Federal Acquisitions Institute</div>
              <a href='https://medium.com/civicactions/what-we-learned-from-training-procurement-officers-to-buy-modern-government-it-cc6309df4103' className='body-large external-link'>
                DITAP program certification for federal procurement officers
              </a>
              <div className='cta'>
                <h3 className='h4'> How we can help you</h3>
                <ul>
                  <li><Link to='/services/ditap'>DITAP program certification</Link></li>
                  <li><a href='https://distributedgov.com/' className='external-link'>Telework consulting and training</a></li>
                  <li>Agile and Human-Centered Design coaching</li>
                  <li>Team culture and performance coaching</li>
                  <li>Technology strategy consulting</li>
                  <li>Free and open source software (FOSS) education</li>
                  <li>Change management consulting</li>
                </ul>
                <div className='h6 button'><Link to='/contact'>UPSKILL YOUR TEAM</Link></div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section className='services--ellipses-section'>
        <div className='inner'>
          <h2>Open standards. Inclusive practices. Better outcomes.</h2>
          <div className='body-large'>
            No matter what problem we’re solving, our core practices and
            communities power our work and align with current standards for
            government digital services.
          </div>
          <div className='ellipses'>

            <span className='ellipse'>accessibility</span>
            <span className='ellipse'>agile</span>
            <span className='ellipse'>DevSecOps</span>
            <span className='ellipse'>distributed teams</span>
            <span className='ellipse'>drupal</span>
            <span className='ellipse'>human-centered design</span>
            <span className='ellipse'>open source</span>
            <span className='ellipse'>open data</span>
            <span className='ellipse'>u.s. web design standards</span>

          </div>
        </div>
      </section>
      <PrimaryPageCTA
        title='Start building public trust.'
        subtitle='Let’s create better government services.'
        primaryButtonText='HIRE US'
        secondaryButtonText='CONTRACTING INFO'
        secondaryButtonLink='/contracting'
      />
    </RedLayout>
  );
};

export default ServicesPage;
