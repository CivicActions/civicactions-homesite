import '../sass/styles.scss';
import React from 'react';
import { Link } from 'gatsby';
import RedLayout from '../layouts/red';
import Hero from '../components/hero';
import SEO from '../components/seo';
import PrimaryPageCTA from "../components/primary-page-cta";

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

    <!-- Insert new press release items here -->
    
    <div className='press-release--items'>
           <h2 className='h4'>
              Ryerson University partners with CivicActions to advance digital accessibility
            </h2>
            <span>News Release: April 22, 2022</span>
            <p className='body'>
              CivicActions is pleased to announce that The G. Raymond Chang School of Continuing Education (The Chang School) at Ryerson University has partnered with us to support its Digital Accessibility Specialist Microcredential Program. 
            </p>
            <p className='body'>
              Full story:{' '}
              <Link to='/press/2022-04-21-civicactions-announces-Ryerson-partnership-digital-accessibility'>
                Ryerson University partners with CivicActions to advance digital accessibility
              </Link>
            </p>
          </div>
    <div className='press-release--items'>
           <h2 className='h4'>
              CivicActions Named to 2022 GovTech 100 Top Government Technology Companies List
            </h2>
            <span>News Release: January 5, 2022</span>
            <p className='body'>
              For the sixth year in a row, we’re honored to be listed by Government Technology among leading companies helping state and local government agencies improve how they serve the public.
            </p>
            <p className='body'>
              Full story:{' '}
              <Link to='https://www.govtech.com/100/2022'>
                 2022 GovTech 100 List
              </Link>
            </p>
          </div>
        <div className='press-release--items'>
           <h2 className='h4'>
              CivicActions Announces 13 DITAP Graduates Across Seven Federal Agencies
            </h2>
            <span>News Release: September 8, 2021</span>
            <p className='body'>
              Congratulations to the procurement staff across seven federal agencies who recently completed the Digital IT Acquisition Professional (DITAP) program! 
              We are delighted to be a part of building <q>a national resource to help modernize and protect the United States government.</q>
            </p>
            <p className='body'>
              Full story:{' '}
              <Link to='/press/2021-09-08-civicactions-announces-ditap-grads-across-federal-agencies'>
                CivicActions Announces 13 DITAP Graduates Across Seven Federal Agencies
              </Link>
            </p>
          </div>
         <div className='press-release--items'>
            <h2 className='h4'>
              CivicActions Announces 24 DITAP Graduates from the Department of Veterans Affairs
            </h2>
            <span>News Release: July 19, 2021</span>
            <p className='body'>
              Congratulations to the procurement staff from VA who recently completed the Digital IT Acquisition Professional (DITAP) program! We are proud to be the nation’s only small business fully certified to deliver this groundbreaking training to transform how government buys modern digital services.
            </p>
            <p className='body'>
              Full story:{' '}
              <Link to='/press/2021-07-19-civicactions-announces-va-ditap-graduation'>
                CivicActions Announces 24 DITAP Graduates from the Department of Veterans Affairs
              </Link>
            </p>
          </div>
          <div className='press-release--items'>
            <h2 className='h4'>
              GSA Engages CivicActions to Modernize VPAT to Improve Digital Accessibility
            </h2>
            <span>News Release: July 8, 2021</span>
            <p className='body'>
              By working with the General Services Administration (GSA) to create a modern, machine-readable format for the traditional Voluntary Digital Accessibility Template (VPAT), we are excited to be paving the way for making digital accessibility a meaningful part of IT procurement in government.
            </p>
            <p className='body'>
              Full story:{' '}
              <Link to='/press/2021-07-08-gsa-engages-civicactions-to-modernize-vpat'>
                GSA Engages CivicActions to Modernize VPAT to Improve Digital Accessibility
              </Link>
            </p>
          </div>
          <div className='press-release--items'>
            <h2 className='h4'>
              Department of Education Awards CivicActions 5-Year Contract to
              Advance Adult Literacy
            </h2>
            <span>News Release: May 11, 2021</span>
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
              <a href='https://fcw.com/articles/2021/03/22/comment-lazzeri-ato-asap.aspx'>
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
          primaryButtonLink='/services'
          secondaryButtonText='CONTRACTING INFO'
          secondaryButtonLink='/contracting'
      />
    </RedLayout>
  );
};

export default Press;
