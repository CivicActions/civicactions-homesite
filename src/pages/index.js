import "../sass/styles.scss";
import React, { useEffect, useRef } from "react";
import Card from "../components/card.js";
import PrimaryPageCTA from "../components/primary-page-cta.js";
import ClientsSection from "../components/clients.js";
import CaseStudyTeaser from "../components/case-study-teaser.js";
import homeIntroGraphic from "../files/images/home-intro-graphic.png";
import homeTeamImage from "../files/images/home-team-img.png";
import quotePatternGraphic from "../files/images/quote-pattern-graphic.png";
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
import GeneralLayout from "../layouts/general";

const HomePage = () => {
  const fadersRef = useRef([]);
  useEffect(() => {
    const faders = fadersRef.current;
    const appearOnScroll = new IntersectionObserver(
      function (entries, appearOnScroll) {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("appear");
          appearOnScroll.unobserve(entry.target);
        });
      },
      { threshold: 0.25 }
    );
    faders.forEach((fader) => appearOnScroll.observe(fader));
  }, []);
  return (
    <GeneralLayout>
      <section className="home__hero-section">
        <div className="inner">
          <img
            src={homeIntroGraphic}
            alt="Civic Actions Logo"
            ref={(e) => (fadersRef.current[0] = e)}
            className="fade-in"></img>
          <div className="info-text">
            <h2>
              We help government deliver better public services through modern
              technology and design.
            </h2>
            <h6 className="primary-button">SEE OUR WORK</h6>
          </div>
        </div>
      </section>
      <ClientsSection />
      <div className="home__services-and-cases-bg">
        <section className="home__services-section">
          <div className="inner">
            <h2>Digital first. Data driven. Human centered.</h2>
            <p className="body-large">
              Bringing government services up to today's standards requires new
              ways of thinking and working.
            </p>
            <p className="body-large">
              We can help you improve how people, process, and technology work
              together at your agency for lasting digital transformation.
            </p>
            <div
              className="service-cards-grid fade-in"
              ref={(e) => (fadersRef.current[1] = e)}>
              <Card title="Web & CMS" icon={webCmsIcon} />
              <Card
                title="IT & Service Modernization"
                icon={itModernizationIcon}
              />
              <Card title="Product & Design" icon={productDesignIcon} />
              <Card
                title="Security & Compliance"
                icon={securityComplianceIcon}
              />
              <Card title="Data Services" icon={dataServicesIcon} />
              <Card
                title="Workforce Development"
                icon={workforceDevelopmentIcon}
              />
            </div>
            <div className="primary-button">EXPLORE SERVICES</div>
          </div>
        </section>
        <section className="home__case-studies-section">
          <div className="inner">
            <h2>Resilient agencies. Accessible services. Happier people.</h2>
            <p className="body-large">
              Working for the greater good is in our DNA. From healthcare to
              welfare to education and beyond, we partner with agencies to solve
              hard problems and improve outcomes for government and the public.
            </p>
            <div
              className="grid fade-in"
              ref={(e) => (fadersRef.current[2] = e)}>
              <CaseStudyTeaser
                img={caseStudyTeaserImg1}
                title={"CENTERS FOR MEDICARE AND MEDICAID SERVICES"}
                description={
                  "Improving the online experience for Medicare beneficiaries"
                }
              />
              <CaseStudyTeaser
                img={caseStudyTeaserImg2}
                title={"US DEPARTMENT OF VETERANS AFFAIRS"}
                description={"Helping Veterans access care and benefits online"}
              />
              <CaseStudyTeaser
                img={caseStudyTeaserImg3}
                title={"US DEPARTMENT OF EDUCATION"}
                description={"Supporting and expanding adult education"}
              />
              <div className="view-our-work-cta ">
                <img src={caseStudyTeaserImg3} alt="" className="bg"></img>
                <div className="content">
                  <h3>View more Work</h3>
                  <img src={arrowIcon} alt=""></img>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="home__quote-section">
        <div className="inner">
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
        </div>
      </section>
      <section className="home__learn-w-us-section">
        <div className="inner">
          <h2>Learn with us.</h2>
          <div className="body-large">
            Thoughts and takeaways from our work in the field.
          </div>
          <div className="cases">
            <div className="grid-item-1">
              <img src={caseStudyTeaserImg4} alt=""></img>
              <h4>Government customer experience: A practical guide</h4>
              <p className="body">
                How to start bringing CX into the business of government
              </p>
            </div>
            <div className="grid-item-2">
              <img src={caseStudyTeaserImg5} alt=""></img>
              <h4>WhiteHouse.gov: Beginning an accessibility journey</h4>
              <p className="body">
                Praise and recommendations for the new administration
              </p>
            </div>
            <div className="grid-item-3">
              <div className="grid-item-3-1">
                <h4>The role of UX in an agile team</h4>
                <img width="32px" src={arrowIcon} alt=""></img>
              </div>
              <div className="grid-item-3-2">
                <h4>What “fierce openness” can do for government</h4>
                <img width="32px" src={arrowIcon} alt=""></img>
              </div>
            </div>
          </div>
          <div className="primary-button">
            <h6>EXPLORE POSTS & VIDEOS</h6>
          </div>
        </div>
      </section>
      <section className="home__team-section">
        <div className="inner">
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
          <div className="team-picture-column">
            <img src={homeTeamImage} alt="Team Picture"></img>
            <div className="primary-button">
              <h6>MEET OUR TEAM</h6>
            </div>
          </div>
        </div>
      </section>
      <PrimaryPageCTA
        title="Let’s build a public success story."
        subtitle="Get in touch to start."
        primaryButtonText="HIRE US"
        secondaryButtonText="EXPLORE SERVICES"
      />
    </GeneralLayout>
  );
};

export default HomePage;
