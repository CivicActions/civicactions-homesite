import '../sass/styles.scss';
import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import RedLayout from '../layouts/red';
import PrimaryPageCTA from '../components/primary-page-cta.js';
import whoWeArePicture from '../files/images/who-we-are.png';
import Offering from '../components/offering.js';
import Video from '../components/video.js';
import StaffQuote from '../components/staff-quote.js';
import PressReleaseTeaser from '../components/press-release-teaser.js';
import caseStudyTeaserImg6 from '../files/images/case-study-teasers/case-study-teaser-img-6.png';
import caseStudyTeaserImg7 from '../files/images/case-study-teasers/case-study-teaser-img-7.png';
import LinkButton from '../components/link-button';
import SEO from '../components/seo';

// Images & icons
import whatWeLookForPicture from '../files/images/what-we-look-for.png';
import HealthBenefitsIcon from '../files/icons/health-benefits-icon.svg';
import FourOneKProgramIcon from '../files/icons/401k-program-icon.svg';
import TimeOffIcon from '../files/icons/time-off-icon.svg';
import RemoteLifeIcon from '../files/icons/remote-life-icon.svg';
import AnnualUpgradesIcon from '../files/icons/annual-upgrades-icon.svg';
import FamilyFriendly from '../files/icons/family-friendly-icon.svg';
import FamilyPhoto from '../files/images/family-photo.png';
import davidSumnerProfilePicture from '../files/images/david-sumner.jpg';
import irisIbekweProfilePicture from '../files/images/iris-ibekwe.png';
import arrowIcon from '../files/icons/arrow-icon.svg';
import squareCircle from '../files/icons/square-circle.svg';
import careersOgImage from '../../static/careers-og-image.png'

const CareersPage = ({ location }) => {
  const data = useStaticQuery(query);
  const greenhouseJob = data.allGreenhouseJob.edges;

  // Pass source back to Greenhouse so we can track this.
  const params = new URLSearchParams(location.search);
  const greenhouseSource = params.get("gh_src");
  const greenhouseLink = function(jobUrl, greenhouseSource) {
    const url = new URL(jobUrl);
    if (greenhouseSource !== null) {
      url.searchParams.append("gh_src", greenhouseSource);
    }
    return url
  }

  return (
    <RedLayout>
      <SEO
        title='Careers'
        description='Work for the public good. Join our diverse and talented team of civic-minded people.'
        image={careersOgImage}
      />
      <section className='careers--hero-section hero-component'>
        <div className='inner'>
          <h1>Work for the public good.</h1>
          <p className='body'>
            Join our team of talented and open-minded people working to build
            modern and accessible government services for all.
          </p>
          <LinkButton
            src={'/careers' + (greenhouseSource ? '?gh_src=' + greenhouseSource : '') + '#open-positions'}
            text='See open positions'
          />
        </div>
      </section>

      <Video
        videolink='https://player.vimeo.com/video/310174855'
        videotitle='Why join Civicactions video'
        videotext='CivicActions is a place to learn and grow with others who are passionate about putting people first. Learn how our multi-disciplinary teams use technology and design to bring government services up to today’s standards.'
      />
      <section className='careers--we-section'>
        <div className='inner'>
          <div className='who-we-are'>
            <div className='left-aligned'>
              <h2>Who we are</h2>
              <img className='icon' src={squareCircle} alt='' />
              <p className='body'>
                CivicActions is built on a culture of openness, authenticity,
                and appreciation. We find inspiration in the things that make
                each of us unique, and we continually share and learn from each
                other. We are people first, striving to make the world better
                through our work, but also creating an environment that allows
                us to care for ourselves and each other.
              </p>
              <p className='body'>
                <a className='external-link' href='https://medium.com/civicactions/improving-scrum-team-flow-on-digital-service-projects-6723d95eaad8'>Learn about how we bring our humanity to work</a>
              </p>
            </div>
            <div className='right-aligned'>
              <img src={whoWeArePicture} alt='Small group of CivicActions team members smiling by a waterfall in Portland, Oregon'></img>
            </div>
          </div>
          <div className='what-we-look-for'>
            <div className='left-aligned'>
              <img src={whatWeLookForPicture} alt='CivicActions team members having a group discussion at a company retreat in Boulder, Colorado'></img>
            </div>
            <div className='right-aligned'>
              <h2>What we look for</h2>
              <img className='icon' src={squareCircle} alt='' />
              <p className='body'>
                Hiring smart and friendly people is the most important thing we
                do for ourselves and our clients. We look for folks with high
                emotional intelligence and strong communication skills. We also
                believe that your willingness to learn and grow is as valuable
                as your existing skill set. We seek self-motivated, curious
                people who want to make a difference.
              </p>
              <p className='body'>
                <a className='external-link' href='https://medium.com/civicactions/we-hire-people-not-resumes-and-other-quirks-to-the-civicactions-application-process-7aab30d69c1c'>Learn about our unique hiring process</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='careers--offerings-section'>
        <div className='inner'>
          <h2>What we offer</h2>
          <p className='body'>
            We believe people do their best work when they can be balanced,
            healthy, and happy. Our work environment is designed to support your
            personal and professional growth.
          </p>
          <div className='offerings-grid'>
            <Offering
              icon={HealthBenefitsIcon}
              title='Health benefits'
              description=' We offer a 100% company-paid national medical benefits plan
                option, with a range of choices and levels for employees and
                their dependents — including options for disability, mental
                health, life insurance, dental, and vision.'
            />
            <Offering
              icon={FourOneKProgramIcon}
              title='401k program'
              description='CivicActions’ 401k program offers a range of investment options for building out a balanced portfolio — including socially responsible investment options to choose from.'
            />
            <Offering
              icon={TimeOffIcon}
              title='Time off'
              description='Paid time off at CivicActions is flexible, and employees are
              encouraged to arrange their schedules as needed to remain
              balanced. We trust you to get your work done, while taking the
              time you need to care for yourself and others.'
            />
            <Offering
              icon={RemoteLifeIcon}
              title='Remote life'
              description='Our team has been fully remote since the company’s founding in
              2004, and we now work from over 90 cities across the U.S. and
              Canada (and even beyond). Moving and traveling are also easier
              with this distributed model.'
            />
            <Offering
              icon={AnnualUpgradesIcon}
              title='Annual upgrades'
              description='We provide $1027 annually for you to spend on technology or
              tools needed for your work, and $1200 per year for professional
              development courses or resources to grow in your career path.'
            />
            <Offering
              icon={FamilyFriendly}
              title='Family friendly'
              description='We love our CivicActions families! New parents get 12 weeks of
              paid leave, and we support each other through the shifting
              responsibilities of working from home. (Kid and pet appearances
              on video calls are normal, too!)'
            />
          </div>
          <img src={FamilyPhoto} alt='Several CivicActions team members on a video call with their kids and pets'></img>
        </div>
      </section>
      <StaffQuote
        img={davidSumnerProfilePicture}
        alt='Headshot of David Sumner'
        quote='“CivicActions is the most diverse tech company I have ever had the pleasure of working at.”'
        name='David Sumner'
        role='Associate Director of DevSecOps'
        classes='first-quote'
      />

      <section className='careers--open-positions-section'>
        <div className='inner'>
          <h2 id='open-positions'>Open positions</h2>
          <p className='body'>
            We actively seek to broaden the diversity of our team, and strongly
            encourage people from underrepresented groups to apply.
          </p>
          <div className='jobs-grid'>
            {!greenhouseJob.length && (
              <div className='no-job'>
                <p className='body'>
                  No positions are currently open. Please check back again soon!
                </p>
              </div>
            )}
            {greenhouseJob.map(({ node }, index) => (
              <div className='body job'>
                <a href={greenhouseLink(node.absolute_url, greenhouseSource)}>
                  <p>{node.title.replace("(Remote)", "").trim()}</p>
                  <img src={arrowIcon} alt='red right arrow icon'></img>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='careers--application-process-section'>
        <div className='inner'>
          <h2>Decided to apply? We’re rooting for you!</h2>
          <p className='body'>
            Here’s what to expect from our hiring process. We do our best to
            respect your time as we explore the possibility of adding you to our
            high-caliber team. <br /><a href='https://medium.com/civicactions/we-hire-people-not-resumes-and-other-quirks-to-the-civicactions-application-process-7aab30d69c1c'>
              Check out our tips on creating a noteworthy application.</a>
          </p>
          <div className='steps-grid'>
            <div className='step'>
              <span className='h2'>1</span>
              <h3 className='h5'>Application Review</h3>
              <p className='body'>
                Your application is reviewed by our hiring team and the folks
                who will be working with you.
              </p>
            </div>
            <div className='step'>
              <span className='h2'>2</span>
              <h3 className='h5'>Workstyle Interview</h3>
              <p className='body'>
                The first interview helps us learn how you collaborate,
                problem-solve, and work as a team player.
              </p>
            </div>
            <div className='step'>
              <span className='h2'>3</span>
              <h3 className='h5'>Skills-based Interview</h3>
              <p className='body'>
                This interview evaluates your qualifications for the specific
                role (technical, design, etc.)
              </p>
            </div>
            <div className='step'>
              <span className='h2'>4</span>
              <h3 className='h5'>Deeper Dive</h3>
              <p className='body'>
                You may be asked to do a take-home assignment, simulation,
                challenge, or interview with a client.
              </p>
            </div>
          </div>
          <p className='h5'>
            If all goes well, we will answer any questions and welcome you to the CivicActions family!
          </p>
        </div>
      </section>
      <section className='home--learn-w-us-section'>
        <div className='grey-background'></div>
        <div className='inner'>
          <h2 style={{ marginBottom: 56 }}>Explore our culture</h2>

          <div className='cases'>
            <PressReleaseTeaser
              img={caseStudyTeaserImg6}
              teaserlink='https://medium.com/civicactions/quickly-shifting-to-distributed-teams-in-government-54bd79b912c3'
              title='Quickly shifting to distributed teams in government'
              description='Best practices for agency teams transitioning to telework'
            />
            <PressReleaseTeaser
              img={caseStudyTeaserImg7}
              teaserlink='https://medium.com/civicactions/improving-scrum-team-flow-on-digital-service-projects-6723d95eaad8'
              title='Improving scrum team flow on digital service projects'
              description='The 30-second ritual that helps us work better together'
            />
            <div className='grid-item-3 secondary-press-releases'>
              <a
                href='https://medium.com/civicactions/how-our-distributed-team-makes-up-for-a-year-apart-c68503192d26 '
                className='grid-item-3-1'>
                <h3>How our distributed team makes up for a year apart</h3>
                <img width='32' src={arrowIcon} alt=''></img>
              </a>
              <a href='https://medium.com/civicactions/what-fierce-openness-can-do-for-government-dd1d3ed518af' className='grid-item-3-2'>
                <h3>What "fierce openness" can do for government</h3>
                <img width='32' src={arrowIcon} alt=''></img>
              </a>
            </div>
          </div>
          <a href='https://medium.com/civicactions' className='button button__primary'>More posts and videos</a>
        </div>
      </section>
      <StaffQuote
        img={irisIbekweProfilePicture}
        alt='Headshot of Iris Ibekwe'
        quote='“I love the honest, collaborative atmosphere, and the way CivicActions prioritizes the well-being of team members.”'
        name='Iris Ibekwe'
        role='Engineer'
        classes='second-quote'
      />
      <PrimaryPageCTA
        title='Help us build the future.'
        subtitle='Let’s create better government services together.'
        primaryButtonText='See open positions'
        primaryButtonLink='/careers#open-positions'
        secondaryButtonText='Meet our team'
        secondaryButtonLink='/team'
      />
    </RedLayout>
  );
};

export const query = graphql`
  {
    allGreenhouseJob {
      edges {
        node {
          title
          absolute_url
        }
      }
    }
  }
`;

export default CareersPage;
