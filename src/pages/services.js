import "../sass/styles.scss";
import React, { useEffect, useRef } from "react";
import GeneralLayout from "../layouts/general";

const ServicesPage = ({ data }) => {
  const contentSectionsRef = useRef([]);
  const scrollpsyItemRef = useRef([]);
  const onScrollpsyClick = (index) => {
    scrollpsyItemRef.current.forEach((item) => (item.className = "body"));
    contentSectionsRef.current[index].scrollIntoView();
    scrollpsyItemRef.current[index].className = "body in-view";
  };
  return (
    <GeneralLayout>
      <section className="services__hero-section">
        <div className="inner">
          <h2>Government services that build public trust</h2>
          <div className="body">
            <p>
              At its core, digital transformation is about improving the
              customer experience of government. Public services should be
              accessible and secure, with human needs at the forefront.
            </p>
            <p>
              Using technology and design as a means to that end, we partner
              with your agency to help you plan and build modern systems that
              work efficiently for your staff and the public, increasing trust
              and satisfaction for those you serve.
            </p>
          </div>
        </div>
      </section>
      <section className="services__content-section">
        <div className="inner">
          <div className="scrollpsy">
            <div
              className="body"
              ref={(e) => (scrollpsyItemRef.current[0] = e)}
              onClick={() => onScrollpsyClick(0)}>
              Web & CMS
            </div>
            <div
              className="body"
              ref={(e) => (scrollpsyItemRef.current[1] = e)}
              onClick={() => onScrollpsyClick(1)}>
              IT & service modernization
            </div>
            <div
              className="body"
              ref={(e) => (scrollpsyItemRef.current[2] = e)}
              onClick={() => onScrollpsyClick(2)}>
              Security & compliance
            </div>
            <div
              className="body"
              ref={(e) => (scrollpsyItemRef.current[3] = e)}
              onClick={() => onScrollpsyClick(3)}>
              Product & design
            </div>
            <div
              className="body"
              ref={(e) => (scrollpsyItemRef.current[4] = e)}
              onClick={() => onScrollpsyClick(4)}>
              Data services
            </div>
            <div
              className="body"
              ref={(e) => (scrollpsyItemRef.current[5] = e)}
              onClick={() => onScrollpsyClick(5)}>
              Workforce development
            </div>
          </div>
          <div className="content">
            <div ref={(e) => (contentSectionsRef.current[0] = e)}>
              <h3 className="title">
                Accessible and secure government websites at scale
              </h3>
              <div className="body description">
                Government websites have complex information and diverse user
                groups, but they can be made surprisingly usable and
                maintainable. We can help you plan a content strategy that
                merges business goals with user needs (and makes life easier for
                your staff!) then build a flexible and secure content management
                system that will grow with you into the future.
              </div>
              <h4>How we’ve helped others</h4>
              <div className="body">US Department of Veterans Affairs</div>
              <a>
                <h5>Modern CMS to support veterans</h5>
              </a>
              <div className="body">
                Centers for Medicare and Medicaid Services
              </div>
              <a>
                <h5>Human-centered health care online</h5>
              </a>
              <div className="cta">
                <h4> How we can help you</h4>
                <ul>
                  <li>
                    <a>Research and discovery</a>
                  </li>
                  <li>
                    <a>CMS development and migration</a>
                  </li>
                  <li>
                    <a>User experience and visual design</a>
                  </li>
                  <li>Custom front end development</li>
                  <li>Content design and strategy</li>
                  <li>
                    <a>Maintenance and support</a>
                  </li>
                  <li>
                    <a>Accessibility consulting and training</a>
                  </li>
                  <li>Cloud infrastructure</li>
                  <li>Product management</li>
                  <li>Agile delivery management</li>
                </ul>
                <div className="primary-button">IMPROVE YOUR WEBSITE</div>
              </div>
            </div>
            <div ref={(e) => (contentSectionsRef.current[1] = e)}>
              <h3 className="title">
                Modernization of legacy government systems and services
              </h3>
              <div className="body description">
                Outdated systems and paper-based processes make it hard for
                agency staff to efficiently meet the needs of people who depend
                on you for critical government services. We help you transform
                your legacy applications and improve your workflows using
                human-centered design, automation, and scalable, secure
                infrastructure.
              </div>
              <h4>How we’ve helped others</h4>
              <div className="body">
                California Child Welfare Digital Services
              </div>
              <a>
                <h5>DevOps support for child welfare services</h5>
              </a>
              <div className="body">
                New York Metropolitan Transit Authority
              </div>
              <a>
                <h5>Connecting Drupal to the Internet of Things</h5>
              </a>
              <div className="cta">
                <h4> How we can help you</h4>
                <ul>
                  <li>Research and discovery</li>
                  <li>Service design</li>
                  <li>Cloud adoption and migration</li>
                  <li>DevSecOps</li>
                  <li>Site Reliability Engineering (SRE)</li>
                  <li>Custom front end development</li>
                  <li>Infrastructure and platform modernization</li>
                  <li>Accessibility consulting and training</li>
                  <li>API design and development</li>
                  <li>Technology strategy consulting</li>
                </ul>
                <div className="primary-button">WORK SMARTER</div>
              </div>
            </div>
            <div ref={(e) => (contentSectionsRef.current[2] = e)}>
              <h3 className="title">
                Human-centered problem solving and strategy
              </h3>
              <div className="body description">
                No matter what the challenge is, technology is only one part of
                the solution. Before building anything new, we work with you to
                define problems and desired outcomes, understand the customer
                and stakeholder ecosystem, decide on an approach that serves
                business goals and user needs, and make plans for facilitating
                adoption and measuring success.
              </div>
              <h4>How we’ve helped others</h4>
              <div className="body">
                Centers for Medicare and Medicaid Services
              </div>
              <a>
                <h5>Persona-driven strategy for Medicare benefits</h5>
              </a>
              <div className="body">National Science Foundation</div>
              <a>
                <h5>Improved user experience to support science research</h5>
              </a>
              <div className="cta">
                <h4> How we can help you</h4>
                <ul>
                  <li>Research and discovery</li>
                  <li>Product management</li>
                  <li>Service design</li>
                  <li>Accessibility consulting and training</li>
                  <li>User experience and visual design</li>
                  <li>Content design and strategy</li>
                  <li>Business and impact analysis</li>
                  <li>Agile and Human Centered Design training</li>
                  <li>Change management consulting</li>
                </ul>
                <div className="primary-button">DESIGN A BETTER FUTURE</div>
              </div>
            </div>
            <div ref={(e) => (contentSectionsRef.current[3] = e)}>
              <h3 className="title">
                Modern security practices for continuous compliance and
                reliability
              </h3>
              <div className="body description">
                People want to know their government will keep sensitive
                information safe—but traditional compliance regulations are
                cumbersome and don’t provide an accurate measure of security. We
                help you “shift left” with automated processes that keep
                development and operations teams in sync, with security and
                compliance woven in from the start, for faster deployment of
                secure and stable code.
              </div>
              <h4>How we’ve helped others</h4>
              <div className="body">Defense Security Cooperation Agency</div>
              <a>
                <h5>Continuous compliance for international collaboration</h5>
              </a>
              <div className="body">
                Centers for Medicare and Medicaid Services
              </div>
              <a>
                <h5>Rapid ATO for federal health care websites</h5>
              </a>
              <div className="cta">
                <h4> How we can help you</h4>
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
                <div className="primary-button">RE-THINK SECURITY</div>
              </div>
            </div>
            <div ref={(e) => (contentSectionsRef.current[4] = e)}>
              <h3 className="title">
                Open data sharing to drive evidence-based decisions
              </h3>
              <div className="body description">
                Government can serve people best when public data is open,
                discoverable, and usable. We can help you create a data strategy
                and comply with open data mandates using open source tools to
                aggregate, catalog, and standardize your data. Then it’s ready
                to use, by your staff or the public, to make informed decisions,
                track metrics, and power useful apps.
              </div>
              <h4>How we’ve helped others</h4>
              <div className="body">City of Louisville</div>
              <a>
                <h5>Supporting local government transparency</h5>
              </a>
              <div className="body">
                Georgia Governor's Office of Student Achievement
              </div>
              <a>
                <h5>Tracking school performance in Georgia</h5>
              </a>
              <div className="cta">
                <h4> How we can help you</h4>
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
                <div className="primary-button">BE DATA-DRIVEN</div>
              </div>
            </div>
            <div ref={(e) => (contentSectionsRef.current[5] = e)}>
              <h3 className="title">
                Modern skills for an adaptable government workforce
              </h3>
              <div className="body description">
                Lasting transformation in government happens from the inside
                out. Organizational change is hard, but not impossible. We offer
                consulting and training to help your teams build skills in
                modern ways of working so your agency can increase resilience,
                save taxpayer dollars, and serve the public better in the
                digital age.
              </div>
              <h4>How we’ve helped others</h4>
              <div className="body">Federal Acquisitions Institute</div>
              <a>
                <h5>
                  Digital services education for federal procurement officers
                </h5>
              </a>
              <div className="body">
                California Government Operations Agency
              </div>
              <a>
                <h5>Helping state employees adopt open source technologies</h5>
              </a>
              <div className="body">Various clients</div>
              <a>
                <h5>Telework training for agencies post-COVID</h5>
              </a>
              <div className="cta">
                <h4> How we can help you</h4>
                <ul>
                  <li>DITAP program certification</li>
                  <li>Telework consulting and training</li>
                  <li>Agile and Human Centered Design coaching</li>
                  <li>Team culture and performance coaching</li>
                  <li>Technology strategy consulting</li>
                  <li>Free and open source software (FOSS) education</li>
                  <li>Change management consulting</li>
                </ul>
                <div className="primary-button">UPSKILL YOUR TEAM</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </GeneralLayout>
  );
};

export default ServicesPage;