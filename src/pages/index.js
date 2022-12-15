import '../sass/styles.scss';
import React, { useEffect, useRef } from 'react';
import { StaticImage } from "gatsby-plugin-image";
import HomepageLayout from '../layouts/homepage';
import Card from '../components/card.js';
import PrimaryPageCTA from '../components/primary-page-cta.js';
import ClientsSection from '../components/clients.js';
import CaseStudyTeaser from '../components/case-study-teaser.js';
import PressReleaseTeaser from '../components/press-release-teaser.js';
import LinkButton from '../components/link-button';
import SEO from '../components/seo';

// Images
import homeIntroGraphic from '../files/images/homepage-hero.png';
import quotePatternGraphic from '../files/images/quote-pattern-graphic.png';
import caseStudyTeaserImg3 from '../files/images/case-study-teasers/case-study-teaser-img-3.png';
import caseStudyTeaserImg8 from '../files/images/case-study-teasers/case-study-teaser-img-8.png';
import caseStudyTeaserImg5 from '../files/images/case-study-teasers/blogpostimage.png';
import dataServicesIcon from '../files/icons/data-services-icon.svg';
import itModernizationIcon from '../files/icons/it-modernization-icon.svg';
import productDesignIcon from '../files/icons/product-design-icon.svg';
import securityComplianceIcon from '../files/icons/security-compliance-icon.svg';
import webCmsIcon from '../files/icons/web-cms-icon.svg';
import workforceDevelopmentIcon from '../files/icons/workforce-dev-icon.svg';
import arrowIcon from '../files/icons/arrow-icon.svg';
import { graphql, useStaticQuery } from "gatsby";
import ExternalLinkButton from "../components/external-link-button";

const HomePage = () => {
  const fadersRef = useRef([]);
  useEffect(() => {
    const faders = fadersRef.current;
    const appearOnScroll = new IntersectionObserver(
      function (entries, appearOnScroll) {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
        });
      },
      { threshold: 0.25 }
    );
    faders.forEach((fader) => appearOnScroll.observe(fader));
  }, []);

  const data = useStaticQuery(graphql`
    {
      allStrapiCaseStudy(filter: {Promoted_to_Homepage: {eq: "True"}}, sort: {fields: Sort_Order}) {
        nodes {
          Title
          Cover_Image {
            url
            alternativeText
            caption
          }
          Client_Name
          Path
          Sort_Order
          Service_Category {
            Category
          }
          Promoted_to_Homepage
          Summary
          id
        }
      }
    }
  `);
  const cases = data.allStrapiCaseStudy.nodes;

  return (
    <HomepageLayout>
      <SEO title='Home' />
      <section className='home--hero-section'>
        <div className='inner'>
          <img
            src={homeIntroGraphic}
            alt='Capitol building to represent government services that build public trust'
            ref={(e) => (fadersRef.current[0] = e)}
            className='fade-in'></img>
          <div className='info-text'>
            <h1>
              We help government deliver better public services through modern
              technology and design.
            </h1>
            <LinkButton
              src='/case-studies'
              size='large'
              type='primary'
              text='See our work'
            />
          </div>
        </div>
      </section>
      {/* ======== Clients Section ========== */}
      <ClientsSection />
      <div className='home--section home--services-and-cases-bg'>
        <section className='home--services-section'>
          <div className='background-wrapper'></div>
          <div className='inner'>
            <h2>Digital first. Data driven. Human centered.</h2>
            <p className='body-large'>
              Bringing government services up to today's standards requires new
              ways of thinking and working.
            </p>
            <p className='body-large'>
              We can help you improve how people, process, and technology work
              together at your agency for lasting digital transformation.
            </p>
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
            <LinkButton
              src='/services'
              size='large'
              type='primary'
              text='Explore Services'
            />
          </div>
        </section>

        {/* ======== Case Studies Section ========== */}
        <section className='home--section home--case-studies-section'>
          <div className='background-wrapper'></div>
          <div className='inner'>
            <h2>Resilient agencies. Accessible services. Happier people.</h2>
            <p className='body-large'>
              Working for the greater good is in our DNA. From healthcare to
              science to education and beyond, we partner with agencies to solve
              hard problems and improve outcomes for government and the public.
            </p>
            <div className='teasers'>
              <CaseStudyTeaser cases={cases} />

              <div className='view-our-work-cta '>
                <a href={'/case-studies/'}>
                  <img src={caseStudyTeaserImg3} alt='' className='bg'></img>
                  <div className='content'>
                    <h3>View more work</h3>
                    <img
                      className='view-our-work-cta__icon'
                      src={arrowIcon}
                      alt=''></img>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* ======== Quote Section ========== */}
      <section className='home--section home--quote-section'>
        <div className='inner'>
          <img src={quotePatternGraphic} alt=''></img>
          <div className='quote'>
            <h2>
              “CivicActions always looked for the optimal solutions to difficult problems and improved constantly on delivered functionality. They responded with agility, creativity, and skill to any challenge that was thrown at them.”
            </h2>
            <div className='body'>
              Katrina Barry, Contracting Officer
            </div>
            <div className='body'>National Science Foundation</div>
          </div>
        </div>
      </section>
      {/* ======== Learn With Us Section ========== */}
      <section className='home--section home--learn-w-us-section'>
        <div className='background-color--wrapper'></div>
        <div className='inner'>
          <h2>Learn with us.</h2>
          <div className='body-large'>
            Thoughts and takeaways from our work in the field.
          </div>
          <div className='cases'>
            <PressReleaseTeaser
              img={caseStudyTeaserImg8}
              title={'Designing a Veteran-first online experience'}
              description={
                'How we help VA deliver consistent and useful information'
              }
              teaserlink={
                'https://medium.com/civicactions/designing-a-veteran-first-experience-for-va-gov-4ce3524203fb'
              }
            />
            <PressReleaseTeaser
              img={caseStudyTeaserImg5}
              title={'Improving the ATO process with Compliance as Code'}
              description={
                'Better and faster security for government IT systems'
              }
              teaserlink={
                'https://medium.com/civicactions/policy-recommendations-for-improving-the-ato-process-through-compliance-as-code-524e3005fceb'
              }
            />
            <div className='grid-item-3'>

              <a className='grid-item-3-1'
                href={
                  'https://medium.com/civicactions/one-drupal-platform-multiple-government-products-bb1c401315cc'
                }>
                <h3>One Drupal platform, multiple government products</h3>
                <img src={arrowIcon} alt=''></img>
              </a>


              <a className='grid-item-3-2'
                href={
                  'https://medium.com/civicactions/launching-a-community-of-practice-for-accessibility-in-government-services-b0b085cd90d6'
                }>
                <h3>A community of practice for government accessibility</h3>

                <img src={arrowIcon} alt=''></img>

              </a>

            </div>
          </div>
          <ExternalLinkButton src='https://medium.com/civicactions' type='primary' text='Explore posts and videos' />
        </div>
      </section>
      {/* ======== Team Section ========== */}
      <section className='home--section home--team-section'>
        <div>
          <div className='inner'>
            <div className='column'>
              <h2 className='team-section--title'>
                Our people make the difference.
              </h2>
              <p className='body-large'>
                We are leaders in civic tech and design, committed to working in
                ways that make life better for our clients and each other.
              </p>
              <LinkButton src='/team' type='primary' text='Meet our team' />
            </div>
            <div className='team-picture-column'>
              <StaticImage src='../files/images/home-team-img.webp' alt='Large group of smiling CivicActions team members on a video call.' />
            </div>
          </div>
        </div>
      </section>
      <PrimaryPageCTA
        title='Let’s build a public success story.'
        subtitle='Get in touch to start.'
        primaryButtonText='Put us to work'
        secondaryButtonText='Join our team'
        secondaryButtonLink='/careers'
      />
    </HomepageLayout>
  );
};

export default HomePage;
