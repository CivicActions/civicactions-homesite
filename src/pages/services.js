import '../sass/styles.scss';
import React, { useRef } from 'react';
import RedLayout from '../layouts/red';
import { Link } from 'gatsby';
import PrimaryPageCTA from '../components/primary-page-cta.js';
import Hero from '../components/hero.js';
import { Helmet } from "react-helmet"
import dataServicesIcon from '../files/icons/data-services-icon.svg';
import itModernizationIcon from '../files/icons/it-modernization-icon.svg';
import productDesignIcon from '../files/icons/product-design-icon.svg';
import securityComplianceIcon from '../files/icons/security-compliance-icon.svg';
import webCmsIcon from '../files/icons/web-cms-icon.svg';
import workforceDevelopmentIcon from '../files/icons/workforce-dev-icon.svg';

const ServicesPage = ({ data }) => {
  const contentSectionsRef = useRef([]);
  const scrollpsyItemRef = useRef([]);
  const onScrollpsyClick = (index) => {
    scrollpsyItemRef.current.forEach((item) => (item.className = 'body'));
    contentSectionsRef.current[index].scrollIntoView();
    scrollpsyItemRef.current[index].className = 'body in-view';
  };
  return (
    <RedLayout>
      <Helmet>
        <title data-react-helmet="true">Services</title>
      </Helmet>
      <Hero
          title='Government services that build public trust'
          description='At its core, digital transformation is about improving the customer experience of government. We use thoughtful design and open source technologies to help you deliver modern public services that put people first. '
        />
      <section className='services--content-section'>
        <div className='inner'>
          <div className='scrollpsy'>
            <div
              className='body'
              ref={(e) => (scrollpsyItemRef.current[0] = e)}
              role='button'
              onKeyDown={() => {}}
              tabIndex={0}
              onClick={() => onScrollpsyClick(0)}>
              Web & CMS
            </div>
            <div
              className='body'
              ref={(e) => (scrollpsyItemRef.current[1] = e)}
              role='button'
              onKeyDown={() => {}}
              tabIndex={0}
              onClick={() => onScrollpsyClick(1)}>
              IT & service modernization
            </div>
            <div
              className='body'
              ref={(e) => (scrollpsyItemRef.current[2] = e)}
              role='button'
              onKeyDown={() => {}}
              tabIndex={0}
              onClick={() => onScrollpsyClick(2)}>
              Security & compliance
            </div>
            <div
              className='body'
              ref={(e) => (scrollpsyItemRef.current[3] = e)}
              role='button'
              onKeyDown={() => {}}
              tabIndex={0}
              onClick={() => onScrollpsyClick(3)}>
              Product & design
            </div>
            <div
              className='body'
              ref={(e) => (scrollpsyItemRef.current[4] = e)}
              role='button'
              onKeyDown={() => {}}
              tabIndex={0}
              onClick={() => onScrollpsyClick(4)}>
              Data services
            </div>
            <div
              className='body'
              ref={(e) => (scrollpsyItemRef.current[5] = e)}
              role='button'
              onKeyDown={() => {}}
              tabIndex={0}
              onClick={() => onScrollpsyClick(5)}>
              Workforce development
            </div>
          </div>
          <div className='content'>
            <img className="services-content--icon" src={webCmsIcon}/>
            <div className="services-content--label">WEB & CMS</div>
            <div ref={(e) => (contentSectionsRef.current[0] = e)}>
              <h2 className='h3 title'>
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
              <h3 className="h4">How we’ve helped others</h3>
              <div className='body'>US Department of Veterans Affairs</div>
              <Link>
                Modern CMS to support veterans
              </Link>
              <div className='body'>
                Centers for Medicare and Medicaid Services
              </div>
              <Link>
                Human-centered health care online
              </Link>
              <div className='cta'>
                <h3 className="h4"> How we can help you</h3>
                <ul>
                  <li>
                    <Link>Research and discovery</Link>
                  </li>
                  <li>
                    <Link>CMS development and migration</Link>
                  </li>
                  <li>
                    <Link>User experience and visual design</Link>
                  </li>
                  <li>Custom front end development</li>
                  <li>Content design and strategy</li>
                  <li>
                    <Link>Maintenance and support</Link>
                  </li>
                  <li>
                    <Link>Accessibility consulting and training</Link>
                  </li>
                  <li>Cloud infrastructure</li>
                  <li>Product management</li>
                  <li>Agile delivery management</li>
                </ul>
                <div className='primary-button'>IMPROVE YOUR WEBSITE</div>
              </div>
            </div>
            <div ref={(e) => (contentSectionsRef.current[3] = e)}>
              <img className="services-content--icon" src={securityComplianceIcon}/>
              <div className="services-content--label">SECURITY & COMPLIANCE</div>
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
              <h3 className="h4">How we’ve helped others</h3>
              <div className='body'>Defense Security Cooperation Agency</div>
              <Link>
                Continuous compliance for international collaboration
              </Link>
              <div className='body'>
                Centers for Medicare and Medicaid Services
              </div>
              <Link>
                Rapid ATO for federal health care websites
              </Link>
              <div className='cta'>
                <h3 className="h4"> How we can help you</h3>
                <ul>
                  <li>DevSecOps</li>
                  <li>Continuous integration / deployment (CI / CD)</li>
                  <li>Site Reliability Engineering (SRE)</li>
                  <li>Continuous / automated compliance</li>
                  <li>Infrastructure as code (IaC)</li>
                  <li>Rapid / automated Authority to Operate (ATO)</li>
                  <li>Security consulting and training</li>
                  <li>Free and open source software (FOSS) security</li>
                </ul>
                <div className='primary-button'>RE-THINK SECURITY</div>
              </div>
            </div>
            <div ref={(e) => (contentSectionsRef.current[4] = e)}>
              <img className="services-content--icon" src={dataServicesIcon}/>
              <div className="services-content--label">DATA SCIENCES</div>
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
              <h3 className="h4">How we’ve helped others</h3>
              <div className='body'>City of Louisville</div>
              <Link>
                Supporting local government transparency
              </Link>
              <div className='body'>
                Georgia Governor's Office of Student Achievement
              </div>
              <Link>
                Tracking school performance in Georgia
              </Link>
              <div className='cta'>
                <h3 className="h4"> How we can help you</h3>
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
                <div className='primary-button'>BE DATA-DRIVEN</div>
              </div>
            </div>
            <div ref={(e) => (contentSectionsRef.current[5] = e)}>
              <img className="services-content--icon" src={securityComplianceIcon}/>
              <div className="services-content--label">SERCURITY & COMPLIANCE</div>
              <h2 className='h2 title'>
                Modern skills for an adaptable government workforce
              </h2>
              <div className='body description'>
                People want to know their government will keep sensitive information safe—but traditional compliance regulations are cumbersome and don’t provide an accurate measure of security. We help you “shift left” with automated processes that keep development and operations teams in sync, with security and compliance woven in from the start, for faster deployment of secure and stable code.
              </div>
              <h3 className="h4">How we’ve helped others</h3>
              <div className='body'>Federal Acquisitions Institute</div>
              <Link>
                
                  Digital services education for federal procurement officers
                
              </Link>
              <div className='body'>
                California Government Operations Agency
              </div>
              <Link>
                Helping state employees adopt open source technologies
              </Link>
              <div className='body'>Various clients</div>
              <Link>
                Telework training for agencies post-COVID
              </Link>
              <div className='cta'>
                <h3 className="h4"> How we can help you</h3>
                <ul>
                  <li>DITAP program certification</li>
                  <li>Telework consulting and training</li>
                  <li>Agile and Human Centered Design coaching</li>
                  <li>Team culture and performance coaching</li>
                  <li>Technology strategy consulting</li>
                  <li>Free and open source software (FOSS) education</li>
                  <li>Change management consulting</li>
                </ul>
                <div className='primary-button'>UPSKILL YOUR TEAM</div>
              </div>
            </div>
            <div ref={(e) => (contentSectionsRef.current[5] = e)}>
              <img className="services-content--icon" src={workforceDevelopmentIcon}/>
              <div className="services-content--label">WORKFORCE DEVELOPMENT</div>
              <h2 className='h2 title'>
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
              <h3 className="h4">How we’ve helped others</h3>
              <div className='body'>Federal Acquisitions Institute</div>
              <Link>
                
                  Digital services education for federal procurement officers
                
              </Link>
              <div className='body'>
                California Government Operations Agency
              </div>
              <Link>
                Helping state employees adopt open source technologies
              </Link>
              <div className='body'>Various clients</div>
              <Link>
                Telework training for agencies post-COVID
              </Link>
              <div className='cta'>
                <h3 className="h4"> How we can help you</h3>
                <ul>
                  <li>DITAP program certification</li>
                  <li>Telework consulting and training</li>
                  <li>Agile and Human Centered Design coaching</li>
                  <li>Team culture and performance coaching</li>
                  <li>Technology strategy consulting</li>
                  <li>Free and open source software (FOSS) education</li>
                  <li>Change management consulting</li>
                </ul>
                <div className='primary-button'>UPSKILL YOUR TEAM</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='services--ellipses-section'>
        <div className='inner'>
          <h2>Open Standards. Inclusive Practices. Better Outcomes.</h2>
          <div className='body-large'>
            No matter what problem we’re solving, our core practices and
            communities power our work and align with current standards for
            government digital services.
          </div>
          <div className='ellipses'>
            <span className='ellipse'>
              customer experience
            </span>
            <span className='ellipse'>
              accessibility
            </span>
            <span className='ellipse'>
              drupal
            </span>
            <span className='ellipse'>
              u.s. web design standards
            </span>
            <span className='ellipse'>
              agile
            </span>
            <span className='ellipse'>
              open source
            </span>
            <span className='ellipse'>
              human centered design
            </span>
            <span className='ellipse'>
              distributed teams
            </span>
          </div>
        </div>
      </section>
      <PrimaryPageCTA
        title='Start building public trust.'
        subtitle='Let’s create better government services.'
        primaryButtonText='HIRE US'
        secondaryButtonText='CONTRACTING INFO'
      />
    </RedLayout>
  );
};

export default ServicesPage;
