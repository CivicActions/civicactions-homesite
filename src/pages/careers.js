import '../sass/styles.scss';
import React from 'react';
import GeneralLayout from '../layouts/general';
import PrimaryPageCTA from '../components/primary-page-cta.js';
import { Link } from 'gatsby';
import whoWeArePicture from '../files/images/who-we-are.png';
import whatWeLookForPicture from '../files/images/what-we-look-for.png';
import Offering from '../components/offering.js';
import Video from '../components/video.js';
import HealthBenefitsIcon from '../files/icons/health-benefits-icon.svg';
import FourOneKProgramIcon from '../files/icons/401k-program-icon.svg';
import TimeOffIcon from '../files/icons/time-off-icon.svg';
import RemoteLifeIcon from '../files/icons/remote-life-icon.svg';
import AnnualUpgradesIcon from '../files/icons/annual-upgrades-icon.svg';
import FamilyFriendly from '../files/icons/family-friendly-icon.svg';
import FamilyPhoto from '../files/images/family-photo.png';
import StaffQuote from '../components/staff-quote.js';
import michelleKangProfilePicture from '../files/images/michelle-kang.png';
import irisIbekweProfilePicture from '../files/images/iris-ibekwe.png';
import arrowIcon from '../files/icons/arrow-icon.svg';
import PressReleaseTeaser from '../components/press-release-teaser.js';
import caseStudyTeaserImg6 from '../files/images/case-study-teasers/case-study-teaser-img-6.png';
import caseStudyTeaserImg7 from '../files/images/case-study-teasers/case-study-teaser-img-7.png';

const CareersPage = () => {
  return (
    <GeneralLayout>
      {/** @todo Create a Hero component and style this to match the design comp */}
      <section className='careers--hero-section'>
        <div className='inner'>
          <h2>Work for the public good.</h2>
          <p className='body'>
            Join our team of talented and open-minded people working to build
            modern and accessible government services for all.
          </p>
          <div className='primary-button'>see open positions</div>
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
              <h3>Who we are</h3>
              <p className='body'>
                CivicActions is built on a culture of openness, authenticity,
                and appreciation. We find inspiration in the things that make
                each of us unique, and we continually share and learn from each
                other. We are people first, striving to make the world better
                through our work, but also creating an environment that allows
                us to care for ourselves and each other.
              </p>
              <p className='body'>
                <Link to=''>Learn about how we bring our humanity to work</Link>
              </p>
            </div>
            <div className='right-aligned'>
              <img src={whoWeArePicture} alt=''></img>
            </div>
          </div>
          <div className='what-we-look-for'>
            <div className='left-aligned'>
              <img src={whatWeLookForPicture} alt=''></img>
            </div>
            <div className='right-aligned'>
              <h3>What we look for</h3>
              <p className='body'>
                Hiring smart and friendly people is the most important thing we
                do for ourselves and our clients. We look for folks with high
                emotional intelligence and strong communication skills. We also
                believe that your willingness to learn and grow is as valuable
                as your existing skill set. We seek self-motivated, curious
                people who want to make a difference.
              </p>
              <p className='body'>
                <Link to=''>Learn about our unique hiring process</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='careers--offerings-section'>
        <div className='inner'>
          <h3>What we offer</h3>
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
              description='CivicActions automatically contributes 3% of pre-tax salary
              equivalent to every employee’s 401k plan, then matches up to
              another 3% of any 401k contributions you make — with socially
              responsible investment options to choose from.'
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
          <img src={FamilyPhoto} alt=''></img>
        </div>
      </section>
      <StaffQuote
        img={michelleKangProfilePicture}
        quote='“I appreciate the kindness of people at CivicActions, no matter the role or position. We really take care of each other.”'
        name='Michelle Kang'
        role='Product Designer'
      />

      {/** @todo Enable this section when the JazzHR integration has been implemented */}
      {/* <section className='careers--open-positions-section'>
        <div className='inner'>
          <h3>Open positions</h3>
          <p className='body'>
            We actively seek to broaden the diversity of our team, and strongly
            encourage people from underrepresented groups to apply.
          </p>
          <div className='jobs-grid'>
            <div className='body job'>Data scientist</div>
            <div className='body job'>Help desk support manager</div>
            <div className='body job'>Product designer</div>
            <div className='body job'>Quality assurance engineer</div>
          </div>
        </div>
      </section> */}

      <section className='careers--application-process-section'>
        <div className='inner'>
          <h3>Decided to apply? We’re rooting for you!</h3>
          <p className='body'>
            Here’s what to expect from our hiring process. We do our best to
            respect your time as we explore the possibility of adding you to our
            high-caliber team. Check out our tips on creating a noteworthy
            application.
          </p>
          <div className='steps-grid'>
            <div className='step'>
              <h3>1</h3>
              <h6>Application Review</h6>
              <p className='body'>
                Your application is reviewed by our hiring team and the folks
                who will be working with you.
              </p>
            </div>
            <div className='step'>
              <h3>2</h3>
              <h6>Workstyle Interview</h6>
              <p className='body'>
                The first interview helps us learn how you collaborate,
                problem-solve, and work as a team player.
              </p>
            </div>
            <div className='step'>
              <h3>3</h3>
              <h6>Skills-based Interview</h6>
              <p className='body'>
                This interview evaluates your qualifications for the specific
                role (technical, design, etc.)
              </p>
            </div>
            <div className='step'>
              <h3>4</h3>
              <h6>Deeper Dive</h6>
              <p className='body'>
                You may be asked to do a take-home assignment, simulation,
                challenge, or interview with a client.
              </p>
            </div>
          </div>
          <h5>
            If all goes well, we will answer any questions you may have and
            welcome you to the CivicActions family!
          </h5>
        </div>
      </section>
      <section className='home--learn-w-us-section'>
        <div className='inner'>
          <h2 style={{ marginBottom: 56 }}>Explore our culture</h2>
          <div className='cases'>
            <PressReleaseTeaser
              img={caseStudyTeaserImg6}
              title='Quickly shifting to distributed teams in government'
              description='Best practices for agency teams transitioning to telework'
            />
            <PressReleaseTeaser
              img={caseStudyTeaserImg7}
              title='Improving scrum team flow on digital service projects'
              description='The 30-second ritual that helps us work better together'
            />
            <div className='grid-item-3'>
              <div className='grid-item-3-1'>
                <h4>How our distributed team makes up for a year apart</h4>
                <img width='32px' src={arrowIcon} alt=''></img>
              </div>
              <div className='grid-item-3-2'>
                <h4>Meet the humans of CivicActions</h4>
                <img width='32px' src={arrowIcon} alt=''></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      <StaffQuote
        img={irisIbekweProfilePicture}
        quote='“I love the honest, collaborative atmosphere, and the way CivicActions prioritizes the well-being of team members.”'
        name='Iris Ibekwe'
        role='Engineer'
      />
      <PrimaryPageCTA
        title='Help us build the future.'
        subtitle='Let’s create better government services together.'
        primaryButtonText='See open positions'
        secondaryButtonText='Meet our team'
      />
    </GeneralLayout>
  );
};

export default CareersPage;
