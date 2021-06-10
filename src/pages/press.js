import '../sass/styles.scss';
import React from 'react';
import { Link } from 'gatsby';
import RedLayout from '../layouts/red';
import Hero from '../components/hero';
import PrimaryPageCTA from '../components/primary-page-cta';
import SEO from '../components/seo';

const Press = () => {
  return (
    <RedLayout>
      <SEO
        title='Press'
        description="This work is worth talking about. Learn how we've been elevating government digital services."
      />
      <Hero
        title='This work is worth talking about.'
        description='When government invests in smart technology and thoughtful design of services, millions of people stand to benefit for years to come. We are honored to be part of this work.'
      />
      <section className='temp-press-releases--main-section'>
        <div className='inner'>
          <div className='press-release--items'>
            <h2 className='h4'>
              Department of Education Awards CivicActions 5-Year Contract to
              Advance Adult Literacy
            </h2>
            <span>Press Release: May 11, 2021</span>
            <p className='body'>
              We are proud to continue our work with the Department of Education
              to modernize the online experience of thousands of educators and
              learners. Under the newly awarded 5-year contract, we will apply
              agile and human-centered processes to improve technology systems
              powering the adult education community.
            </p>
            <p className='body'>
              Full story:{' '}
              <Link to='/press/2021-05-11-civicactions-wins-department-of-ed-recompete'>
                Department of Education Awards CivicActions 5-Year Contract to
                Advance Adult Literacy
              </Link>
            </p>
          </div>
          <div className='press-release--items'>
            <h2 className='h4'>
              NSF awards CivicActions $44M contract for CMS support and
              improvement of federal science research website
            </h2>
            <span>News Release: May 3, 2021</span>
            <p className='body'>
              We are delighted to be continuing our partnership with the
              National Science Foundation through a newly awarded 5-year
              contract. Our research-based approach to the improvement of NSF’s
              website helps science researchers obtain funding for
              world-changing work.
            </p>
            <p className='body'>
              Full story:{' '}
              <Link to='/press/2021-05-03-civicactions-wins-nsf-recompete'>
                NSF Awards CivicActions $44M Contract for CMS Support and
                Improvement of Federal Science Research Website
              </Link>
            </p>
          </div>
          <div className='press-release--items'>
            <h2 className='h4'>
              Recommendations for a Federal Compliance Library
            </h2>
            <span>FCW: March 22, 2021</span>
            <p className='body'>
              To help federal agencies achieve security compliance faster, a
              systems-thinking approach is required. CivicActions Director of
              Federal Strategy Mary Lazzeri shows how a library of reusable
              components can save time and money on the ATO process.
            </p>
            <p className='body'>
              Full story:{' '}
              <a href='https://gcn.com/articles/2021/02/04/accessibility-compliance-as-code.aspx'>
                ATO ASAP: Streamlining government security with a Federal
                Compliance Library
              </a>
            </p>
          </div>
          <div className='press-release--items'>
            <h2 className='h4'>
              Fixing government security compliance with rapid ATO
            </h2>
            <span>FCW: February 4, 2021</span>
            <p className='body'>
              The process to get an Authority to Operate is outdated and is
              causing security risks to the federal government. Director of
              Federal Strategy Mary Lazerri shows the way toward a modern and
              agile approach to ATO.
            </p>
            <p className='body'>
              Full story:{' '}
              <a href='https://fcw.com/articles/2021/02/04/comment-lazzeri-automate-ato.aspx'>
                ATO ASAP: Let’s finally fix the security compliance problem
              </a>
            </p>
          </div>
          <div className='press-release--items'>
            <h2 className='h4'>
              CivicActions named to 2021 GovTech 100 top government technology
              companies list
            </h2>
            <span>News Release: January 7, 2021</span>
            <p className='body'>
              For the fifth year in a row, we’re honored to be listed among
              leading digital services firms serving state and local agencies
              during these unprecedented times — when modern and accessible
              government services matter more than ever.
            </p>
            <p className='body'>
              Full story:{' '}
              <a href='https://www.govtech.com/100/2021/'>
                2021 GovTech 100 List
              </a>
            </p>
          </div>
          <div className='press-release--items'>
            <h2 className='h4'>
              CivicActions expands accessibility capabilities with OpenConcept
            </h2>
            <span>News Release: November 9, 2020</span>
            <p className='body'>
              With the acquisition of OpenConcept, an industry leader in web
              accessibility through open source, we are increasing our
              commitment and ability to create government digital services that
              are accessible to people of all abilities.
            </p>
            <p className='body'>
              Full story:{' '}
              <Link to='/press/2020-11-09-civicactions-acquires-openconcept'>
                CivicActions Expands Accessibility Capabilities With OpenConcept
              </Link>
            </p>
          </div>
          <div className='press-release--items'>
            <h2 className='h4'>
              CivicActions certified to deliver DITAP training to federal
              acquisition professionals
            </h2>
            <span>News Release: August 14, 2020</span>
            <p className='body'>
              As an approved certified vendor of the Digital IT Acquisition
              Professional (DITAP) training, we are thrilled to be helping
              federal contracting officers learn how to effectively buy modern
              IT services that best serve government and the public in today’s
              digital world.
            </p>
            <p className='body'>
              Full story:{' '}
              <Link to='/press/2020-08-14-civicactions-certified-to-deliver-ditap'>
                CivicActions Certified to Deliver DITAP Procurement Training to
                Federal Acquisition Professionals
              </Link>
            </p>
          </div>
          <div className='press-release--items'>
            <h2 className='h4'>
              CivicActions wins $18M contract to migrate and redesign CMS
              websites
            </h2>
            <span>News Release: March 3, 2020</span>
            <p className='body'>
              We are excited to be working with the Centers for Medicare &
              Medicaid Services to provide user centered design, agile
              development, and open data to improve the online health care
              experience for millions of people.
            </p>
            <p className='body'>
              Full story:{' '}
              <Link to='/press/2020-03-02-civicactions-wins-cms-contract'>
                CivicActions Wins $18M Contract to Migrate, Redesign CMS
                Websites
              </Link>
            </p>
          </div>
        </div>
      </section>
      <PrimaryPageCTA
        title='Inspired by newsworthy work?'
        subtitle='See what we can do together.'
        primaryButtonText='EXPLORE SERVICES'
        secondaryButtonText='CONTRACTING INFO'
      />
    </RedLayout>
  );
};

export default Press;
