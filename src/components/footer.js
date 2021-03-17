import "../sass/styles.scss";
import React, { useState } from "react";
import extendedLogo from "../files/icons/ca-extended-logo.svg";
import twitterIcon from "../files/icons/twitter-footer-icon.svg";
import facebookIcon from "../files/icons/facebook-footer-icon.svg";
import linkedinIcon from "../files/icons/linkedin-footer-icon.svg";

const Footer = (props, { data }) => {
  return (
    <footer className="footer">
      <div className="inner">
        <div className="column">
          <div className="row icons">
            <img src={extendedLogo} alt="Civic Actions Logo"></img>
            <div className="row social-icons">
              <img src={twitterIcon} alt="Civic Actions Twitter"></img>
              <img src={facebookIcon} alt="Civic Actions Facebook"></img>
              <img src={linkedinIcon} alt="Civic Actions LinkedIn"></img>
            </div>
          </div>
          <div className="row info">
            <div className="column text-info">
              <div className="body-small">
                We're a mid-size professional services firm providing design,
                technology, consulting, and training services to government.
              </div>
              <div className="body-small">We’re always hiring!</div>
              <div className="body-small">
                Check out our open positions or <br />
                learn about contracting with us.
              </div>
              <div className="body-small">
                Our team is fully distributed, but our mailing address is:3527
                Mt. Diablo Blvd., Unit 269Lafayette, CA 94549
              </div>
            </div>
            <div className="column just-space-brw">
              <div className="nav">
                <div className="column">
                  <a href="">COMPANY</a>
                  <a className="body-small" href="">
                    About
                  </a>
                  <a className="body-small" href="">
                    Team
                  </a>
                  <a className="body-small" href="">
                    Press
                  </a>
                </div>
                <a href="">SERVICES</a>
                <div className="column">
                  <a href="">OUR WORK</a>
                  <a className="body-small" href="">
                    Case studies
                  </a>
                  <a className="body-small" href="">
                    Approach
                  </a>
                </div>
                <a href="">INSIGHTS</a>
                <a href="">CARREERS</a>
                <a href="">CONTACT</a>
              </div>
              <div className="row bottom">
                <div className="body-small">
                  Get in touch via phone or email:
                  <br />
                  510-408-7510
                  <br />
                  contact@civicactions.com
                </div>
                <div className="row bottom-links">
                  <div className="body-small"> © 2010 — 2021</div>
                  <div className="body-small"> Accessibility</div>
                  <div className="body-small">Privacy — Terms</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
