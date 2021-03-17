import "../sass/styles.scss";
import React from "react";
import Banner from "../components/banner.js";
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import Card from "../components/card.js";
import CaseStudyTeaser from "../components/case-study-teaser.js";
import homeIntroGraphic from "../files/images/home-intro-graphic.png";
import homeTeamImage from "../files/images/home-team-img.png";
import quotePatternGraphic from "../files/images/quote-pattern-graphic.png";
import clientLogo1 from "../files/images/client-logos/client-logo-1.png";
import clientLogo2 from "../files/images/client-logos/client-logo-2.png";
import clientLogo3 from "../files/images/client-logos/client-logo-3.png";
import clientLogo4 from "../files/images/client-logos/client-logo-4.png";
import clientLogo5 from "../files/images/client-logos/client-logo-5.png";
import clientLogo6 from "../files/images/client-logos/client-logo-6.png";
import clientLogo7 from "../files/images/client-logos/client-logo-7.png";
import clientLogo8 from "../files/images/client-logos/client-logo-8.png";
import clientLogo9 from "../files/images/client-logos/client-logo-9.png";
import clientLogo10 from "../files/images/client-logos/client-logo-10.png";
import clientLogo11 from "../files/images/client-logos/client-logo-11.png";
import clientLogo12 from "../files/images/client-logos/client-logo-12.png";
import clientLogo13 from "../files/images/client-logos/client-logo-13.png";
import clientLogo14 from "../files/images/client-logos/client-logo-14.png";
import clientLogo15 from "../files/images/client-logos/client-logo-15.png";
import clientLogo16 from "../files/images/client-logos/client-logo-16.png";
import clientLogo17 from "../files/images/client-logos/client-logo-17.png";
import clientLogo18 from "../files/images/client-logos/client-logo-18.png";
import caseStudyTeaserImg1 from "../files/images/case-study-teasers/case-study-teaser-img-1.png";
import caseStudyTeaserImg2 from "../files/images/case-study-teasers/case-study-teaser-img-2.png";
import caseStudyTeaserImg3 from "../files/images/case-study-teasers/case-study-teaser-img-3.png";
import caseStudyTeaserImg4 from "../files/images/case-study-teasers/case-study-teaser-img-4.png";
import caseStudyTeaserImg5 from "../files/images/case-study-teasers/case-study-teaser-img-5.png";
import dataServicesIcon from "../files/icons/data-services-icon.svg";
import itModernizationIcon from "../files/icons/it-modernization-icon.svg";
import productDesignIcon from "../files/icons/product-design-icon.svg";
import securityComplianceIcon from "../files/icons/security-compliance-icon.svg";
import webCmsIcon from "../files/icons/web-cms-icon.svg";
import workforceDevelopmentIcon from "../files/icons/workforce-dev-icon.svg";
import arrowIcon from "../files/icons/arrow-icon.svg";

const HomePage = ({ data }) => {
  return (
    <div>
      <Banner
        boldText="We’re hiring! "
        regularText="View open positions here"
      />
      <Header />
      <section className="section__home-intro">
        <div className="inner">
          <img src={homeIntroGraphic} alt="Civic Actions Logo"></img>
          <div className="info-text">
            <h2>
              We help government deliver better public services through modern
              technology and design.
            </h2>
            <h6 className="primary-button">SEE OUR WORK</h6>
          </div>
        </div>
      </section>
      <section className="section__home-logos">
        <div class="body-large">
          Trusted by organizations that serve the people.
        </div>
        <div class="grid">
          <img src={clientLogo1} alt="Client Logo"></img>
          <img src={clientLogo2} alt="Client Logo"></img>
          <img src={clientLogo3} alt="Client Logo"></img>
          <img src={clientLogo4} alt="Client Logo"></img>
          <img src={clientLogo5} alt="Client Logo"></img>
          <img src={clientLogo6} alt="Client Logo"></img>
          <img src={clientLogo7} alt="Client Logo"></img>
          <img src={clientLogo8} alt="Client Logo"></img>
          <img src={clientLogo9} alt="Client Logo"></img>
          <img src={clientLogo10} alt="Client Logo"></img>
          <img src={clientLogo11} alt="Client Logo"></img>
          <img src={clientLogo12} alt="Client Logo"></img>
          <img src={clientLogo13} alt="Client Logo"></img>
          <img src={clientLogo14} alt="Client Logo"></img>
          <img src={clientLogo15} alt="Client Logo"></img>
          <img src={clientLogo16} alt="Client Logo"></img>
          <img src={clientLogo17} alt="Client Logo"></img>
          <img src={clientLogo18} alt="Client Logo"></img>
        </div>
      </section>
      <div style={{ backgroundColor: "#F5F5F0" }}>
        <section className="section__home-services">
          <h2>Digital first. Data driven. Human centered.</h2>
          <p className="body-large">
            Bringing government services up to today's standards requires new
            ways of thinking and working.
          </p>
          <p className="body-large">
            We can help you improve how people, process, and technology work
            together at your agency for lasting digital transformation.
          </p>
          <div className="service-cards-grid">
            <Card title="Web & CMS" icon={webCmsIcon} />
            <Card
              title="IT & Service Modernization"
              icon={itModernizationIcon}
            />
            <Card title="Product & Design" icon={productDesignIcon} />
            <Card title="Security & Compliance" icon={securityComplianceIcon} />
            <Card title="Data Services" icon={dataServicesIcon} />
            <Card
              title="Workforce Development"
              icon={workforceDevelopmentIcon}
            />
          </div>
          <div className="primary-button">EXPLORE SERVICES</div>
        </section>
      </div>
      <section className="section__home-case-studies">
        <h2>Resilient agencies. Accessible services. Happier people.</h2>
        <p className="body-large">
          Working for the greater good is in our DNA. From healthcare to welfare
          to education and beyond, we partner with agencies to solve hard
          problems and improve outcomes for government and the public.
        </p>
        <div className="grid">
          <CaseStudyTeaser
            title="CENTERS FOR MEDICARE AND MEDICAID SERVICES"
            description="Improving the online experience for Medicare beneficiaries"
            image={caseStudyTeaserImg1}
          />
          <CaseStudyTeaser
            title="US DEPARTMENT OF VETERANS AFFAIRS"
            description="Helping Veterans access care and benefits online"
            image={caseStudyTeaserImg2}
          />
          <CaseStudyTeaser
            title="US DEPARTMENT OF EDUCATION"
            description="Supporting and expanding adult education"
            image={caseStudyTeaserImg3}
          />
          <div className="cta">
            <h3>View more Work</h3>
            <img src={arrowIcon} alt=""></img>
          </div>
        </div>
      </section>
      <section className="section__home-quote">
        <img src={quotePatternGraphic} alt=""></img>
        <div className="quote">
          <h4>
            “It was a pleasure to work with the CivicActions team. Their
            experience with government clients and agile processes helped us
            reach our user base sooner than expected with a product that met
            their needs.”
          </h4>
          <div className="body">
            Lisa Berry, Senior GlobalNET Liaison Officer
          </div>
          <div className="body">Defense Security Cooperation Agency</div>
        </div>
      </section>

      <section className="section__home-learn-w-us">
        <h2>Learn with us.</h2>
        <div className="body-large">
          Thoughts and takeaways from our work in the field.
        </div>
        <div className="cases">
          <div className="img-cards">
            <div>
              <img src={caseStudyTeaserImg4} alt=""></img>
              <h4>Government customer experience: A practical guide</h4>
              <p className="body">
                How to start bringing CX into the business of government
              </p>
            </div>
            <div>
              <img src={caseStudyTeaserImg5} alt=""></img>
              <h4>WhiteHouse.gov: Beginning an accessibility journey</h4>
              <p className="body">
                WhiteHouse.gov: Beginning an accessibility journey
              </p>
            </div>
          </div>
          <div className="arrow-cards">
            <div>
              <h4>The role of UX in an agile team</h4>
              <img width="32px" src={arrowIcon} alt=""></img>
            </div>
            <div>
              <h4>What “fierce openness” can do for government</h4>
              <img width="32px" src={arrowIcon} alt=""></img>
            </div>
          </div>
        </div>
        <div className="primary-button">
          <h6>EXPLORE POSTS & VIDEOS</h6>
        </div>
      </section>
      <section className="section__home-team">
        <div className="row">
          <div className="column">
            <h2>Our people make the difference.</h2>
            <p className="body-large">
              We are leaders in civic tech and design, committed to working in
              ways that make life better for our clients and each other.
            </p>
            <div className="primary-button">
              <h6>MEET OUR TEAM</h6>
            </div>
          </div>
          <img src={homeTeamImage} alt="Team Picture"></img>
        </div>
      </section>
      <section className="section__home-hire-us-cta">
        <div className="inner">
          <div className="row">
            <div className="column">
              <h3>Let’s build a public success story.</h3>
              <h5>Get in touch to start.</h5>
            </div>
            <div className="row">
              <div className="primary-button">HIRE US</div>
              <div className="secondary-button">EXPLORE SERVICES</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
