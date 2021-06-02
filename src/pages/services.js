import '../sass/styles.scss';
import React, {useEffect, useRef, useState} from 'react';
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
import Scrollspy from 'react-scrollspy';

const ServicesPage = ({ data }) => {
  // const contentSectionsRef = useRef([]);
  // const scrollpsyItemRef = useRef([]);
  // const onScrollpsyClick = (index) => {
  //   scrollpsyItemRef.current.forEach((item) => (item.className = 'body'));
  //   contentSectionsRef.current[index].scrollIntoView();
  //   scrollpsyItemRef.current[index].className = 'body in-view';
  // };
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 500)
    })
  }, []);
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
        <div className={scroll ? "inner scroll" : "inner"}>

            <Scrollspy
                className={'services--sidebar'}
                items={ ['menu1', 'menu2', 'menu3', 'menu4', 'menu5', 'menu6'] }
                currentClassName="is-current"
                >

            <li><a
              className={`body`}
              href='#menu1'
              >
              Web & CMS
            </a></li>
            <li><a
              className={`body`}
              href='#menu2'
              >
              IT & service modernization
            </a></li>
              <li><a
                  className={`body`}
                  href='#menu3'
              >
                Product & design
              </a></li>
            <li><a
              className={`body`}
              href='#menu4'
              >
              Security & compliance
            </a></li>

            <li><a
              className={`body`}
              href='#menu5'
              >
              Data services
            </a></li>
            <li><a
              className={`body`}
              href='#menu6'
              >
              Workforce development
            </a></li>
        </Scrollspy>

          <div>
            <section id={'menu1'}>
            <img alt='' className="services-content--icon" src={webCmsIcon}/>
            <div className="h6 services-content--label">WEB & CMS</div>
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
              <h3 className="h4">How we’ve helped others</h3>
              <div className='body'>US Department of Veterans Affairs</div>
              <Link className='body-large'>
                Modern CMS to support veterans
              </Link>
              <div className='body'>
                Centers for Medicare and Medicaid Services
              </div>
              <Link className='body-large'>
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
                <div className='h6 primary-button'>IMPROVE YOUR WEBSITE</div>
              </div>
            </section>
            <section id={'menu2'}>
              <img alt='' className="services-content--icon" src={webCmsIcon}/>
              <div className="h6 services-content--label">IT & service modernization</div>
              <h2 className='h3 title'>
                Modernization of legacy government systems and services
              </h2>
              <div className='body description'>
                Outdated systems and paper-based processes make it hard for agency staff to efficiently meet the needs of people who depend on you for critical government services. We help you transform your legacy applications and improve your workflows using human-centered design, automation, and scalable, secure infrastructure.
              </div>
              <h3 className="h4">How we’ve helped others</h3>
              <div className='body'>
                California Child Welfare Digital Service
              </div>
              <Link className='body-large'>
                Provided DevOps support for child welfare systems
              </Link>
              <div className='body'>
                New York Metropolitan Transit Authority
              </div>
              <Link className='body-large'>
                Connected Drupal and the Internet of Things to power digital signage
              </Link>
              <div className='cta'>
                <h3 className="h4"> How we can help you</h3>
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
                <div className='h6 primary-button'>WORK SMARTER</div>
              </div>
            </section>
            <section id={'menu3'}>
              <img alt='' className="services-content--icon" src={securityComplianceIcon}/>
              <div className="h6 services-content--label">Product & design</div>
              <h2 className='h3 title'>
                Human-centered problem solving and strategy
              </h2>
              <div className='body description'>
                No matter what the challenge is, technology is only one part of the solution. Before building anything new, we work with you to define problems and desired outcomes, understand the customer and stakeholder ecosystem, decide on an approach that serves business goals and user needs, and make plans for facilitating adoption and measuring success.</div>
              <h3 className="h4">How we’ve helped others</h3>
              <div className='body'>Centers for Medicare and Medicaid Services</div>
              <Link className='body-large'>
                Designed a persona-driven strategy for Medicare benefits
              </Link>
              <div className='body'>
                National Science Foundation
              </div>
              <Link className='body-large'>
                Improved user experience to support science research
              </Link>
              <div className='cta'>
                <h3 className="h4"> How we can help you</h3>
                <ul>
                  <li>Research and discovery</li>
                  <li>Product management</li>
                  <li>Customer experience and service design</li>
                  <li>Accessibility consulting and training</li>
                  <li>User experience and visual design</li>
                  <li>Content design and strategy</li>
                  <li>Business and impact analysis</li>
                  <li>Agile and Human Centered Design training</li>
                  <li>Change management consulting</li>
                </ul>
                <div className='h6 primary-button'>Design a better future</div>
              </div>

            </section>
            <section id={'menu4'}>
              <img alt='' className="services-content--icon" src={securityComplianceIcon}/>
              <div className="h6 services-content--label">SECURITY & COMPLIANCE</div>
              <h2 className='h3 title'>
                Modern security practices for continuous compliance and reliability
              </h2>
              <div className='body description'>
                People want to know their government will keep sensitive information safe—but traditional compliance regulations are cumbersome and don’t provide an accurate measure of security. We help you “shift left” with automated processes that keep development and operations teams in sync, with security and compliance woven in from the start, for faster deployment of secure and stable code.
              </div>
              <h3 className="h4">How we’ve helped others</h3>
              <div className='body'>Defense Security Cooperation Agency</div>
              <Link className='body-large'>
                Supporting international peace partners with continuous compliance
              </Link>
              <div className='body'>
                Centers for Medicare and Medicaid Services
              </div>
              <Link className='body-large'>
                Enabling rapid ATO for federal health care websites
              </Link>

              <div className='cta'>
                <h3 className="h4"> How we can help you</h3>
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
                <div className='h6 primary-button'>Re-think security</div>
              </div>
            </section>
            <section id={'menu5'}>
              <img alt='' className="services-content--icon" src={dataServicesIcon}/>
              <div className="h6 services-content--label">DATA SERVICES</div>
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
              <Link className='body-large'>
                Supporting local government transparency
              </Link>
              <div className='body'>
                Georgia Governor's Office of Student Achievement
              </div>
              <Link className='body-large'>
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
                <div className='h6 primary-button'>BE DATA-DRIVEN</div>
              </div>
            </section>
            <section id={'menu6'}>
              <img alt='' className="services-content--icon" src={workforceDevelopmentIcon}/>
              <div className="h6 services-content--label">WORKFORCE DEVELOPMENT</div>
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
              <h3 className="h4">How we’ve helped others</h3>
              <div className='body'>Federal Acquisitions Institute</div>
              <Link className='body-large'>
                  Digital services education for federal procurement officers
              </Link>
              <div className='body'>
                California Government Operations Agency
              </div>
              <Link className='body-large'>
                Helping state employees adopt open source technologies
              </Link>
              <div className='body'>Various clients</div>
              <Link className='body-large'>
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
                <div className='h6 primary-button'>UPSKILL YOUR TEAM</div>
              </div>
            </section>
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
