import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getSrc } from 'gatsby-plugin-image';
import ReactMarkdown from "react-markdown";
import Modal from 'react-modal';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Components
import RedLayout from '../layouts/red';
import Hero from "../components/hero-with-buttons";
import Quote from "../components/quote";
import PrimaryPageCTA from "../components/ditap-page-cta";
import LinkButton from "../components/link-button";
import Bio from '../components/offering/bio'
import TabMobile from '../components/tabmobile';
import SEO from '../components/seo';

import linkedinIcon from "../files/icons/linkedin.svg";
import linkedinIconBlue from "../files/icons/linkedin-blue.svg";
import squareCircle from "../files/icons/square-circle.svg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import closeButton from '../files/icons/grey-close-icon.svg';

const OfferingTemplate = ({ data }) => {
  Modal.setAppElement('#___gatsby')

  const offering = data.allStrapiOffering.nodes[0];

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalRef, setModalRef] = useState(false);

  // Initialize the modal content.
  let modalContent

  function openModal(currentMemberName) {
    setIsOpen(true);
    // Set the clicked member name in state.
    setModalRef(currentMemberName)
  }

  function closeModal() {
    setIsOpen(false);
  }

  // If the modal is open, load the bio information for the clicked team member.
  if (modalIsOpen === true) {
    modalContent = offering.team_members.filter((item) => {
      if (item.Name === modalRef) {
        return true;
      };
    })
  }

  //=== Get the list of all team members. (@todo: Place in a new component) ====
  let teamMemberList = offering.team_members.length ?
    offering.team_members.map((member, index) => (

      <div key={member.id} className='related-staff'>
        <img className='staff-image' src={member.image[0].url} aria-label={member.Name} />
        <div className='staff-info'>
          <h3 className='staff-name'>
            {member.Name}
            <a className='linkedin-icon' href={member.Linkedin} aria-label={`linkedin profile for ${member.Name}`}>
              <img className='black-icon' alt='black linkedin icon' src={linkedinIcon} />
              <img className='blue-icon' alt='blue linkedin icon' src={linkedinIconBlue} />
            </a>
          </h3>
          <p className='body staff-role'>{member.Role}</p>
          <button className={`body open-modal--btn ${index}`} onClick={() => openModal(member.Name)}>Read bio</button>
        </div></div>

    )) : null;

  // Get the OGImage
  let ogImageUrl = getSrc(offering.SEO.OGImage);

  return (
    <RedLayout>
      <SEO
        title={offering.SEO.OGTitle}
        description={offering.SEO.OGDescription}
        image={ogImageUrl}
      />
      <div className='offering--content-type'>
        <Hero
          title={offering.Title}
          description={offering.Body}
          button={offering.hero_button}
        />

        <section className='section--offering--client-logos'>
          <div className='inner'>
            <h2 className='body'>{offering.client_logo.text}</h2>
            <div className='grid' tabIndex='0'>
              {offering.client_logo.client_logo.map((img) => (
                <img key={img.id} src={img.url} alt={img.alternativeText} />
              ))}
            </div>

          </div>
        </section>
        {offering.Stats.length &&
          <section className='section--offering--stats'>
            <div className='stats--wrapper'>
              <div className='inner'>
                {offering.Stats.map((stat, index) => (
                  <div className='single-stat'>
                    <h2 className='stat--number'>{offering.Stats[index].Numerical_Element}</h2>
                    <p className='body stat--text'>{offering.Stats[index].Content_Element}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>}

        <section className='section--offering--value-props'>
          <div className='inner'>
            <div className='wrapper'>
              <div className='value-props--left'>
                <h2>{offering.value_prop.header_text}</h2>
                <img className='icon' src={squareCircle} alt='' />
                <ReactMarkdown className='body' children={offering.value_prop.body_text} />

              </div>
              <div className='value-props--right'>
                <img src={offering.value_prop.image[0].url} alt={offering.value_prop.image[0].alternativeText} />
                <caption>{offering.value_prop.image[0].caption}</caption>
              </div>
            </div>
          </div>
        </section>

        <section className='section--offering--tabs'>
          <div className='inner'>

            <TabMobile tabs={offering.tabs} />
            <Tabs>
              <TabList >
                {offering.tabs.map((tab, index) => (
                  <Tab><h2>{tab.tab_header}</h2>
                  </Tab>
                ))}

              </TabList>
              {offering.tabs.map((tab, index) => (
                <TabPanel>
                  {/*// Tabs component comes from https://www.digitalocean.com/community/tutorials/react-tabs-component*/}
                  {tab.tabs_section.map((section, index) => (
                    <div className='tab-section' >
                      <h3 className='h5'>{section.header}</h3>
                      <ReactMarkdown className='body' children={section.body} />
                    </div>
                  ))}
                  <div className='cta-tab-section' >
                    {tab.cta_tab.header && <h3 className='h5'>{tab.cta_tab.header}</h3>}
                    <div className='link-button'><LinkButton text={tab.cta_tab.button_text}
                      src={tab.cta_tab.button_link} /></div>
                  </div>
                </TabPanel>
              ))}
            </Tabs>
          </div>
        </section>

        {offering.Quote[0] && <Quote classes='staff-quote--first no-img'
          quote={offering.Quote[0].Quote}
          source={offering.Quote[0].Source}
        />}

        {offering.team_members.length &&
          <section className='section--offering--staff'>
            <div className='inner'>
              <h2>Meet the team</h2>
              <div className='related-staff--wrapper'>
                {teamMemberList}
              </div>
            </div>

            {/*
              Load just one Modal wrapper per page and update its content with the
              clicked team member's bio.
             */}
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Staff member modal"
              overlayClassName="Overlay"
              aria-label="staff-modal-biography"
            >

              <Bio member={modalContent} closeModal={closeModal} />
              <button onClick={closeModal}><img alt='close modal button' src={closeButton} /><p className='visually-hidden'>Close</p></button>

            </Modal>
          </section >
        }


        {
          offering.text_section.Header &&
          <section className='section--offering--text'>
            <div className='background-mint'></div>
            <div className='inner'>

              <h2>{offering.text_section.Header}</h2>
              <ReactMarkdown className='body' children={offering.text_section.body} />
              {offering.text_section.button.map((btn, index) => (
                <div className='button-wrapper'> <LinkButton
                  text={btn.button_text}
                  src={btn.button_link}
                /></div>
              ))}

            </div>
          </section>
        }
        {/*// Accordion comes from https://www.npmjs.com/package/react-accessible-accordion*/}
        {
          offering.FAQ_Accordion_Section.list_questions.length &&
          <section className='section--offering--faqs' id='faq'>
            <div className='inner'>
              <h2>Frequently asked questions</h2>
              <Accordion
                id='faqs'
                allowZeroExpanded={true}
                allowMultipleExpanded={true}>
                {offering.FAQ_Accordion_Section.list_questions.map((faq, index) => (
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <div className="arrow-down"></div>
                        <div className="arrow-right"></div>
                        <h3>{faq.question}</h3>

                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ReactMarkdown className='body' children={faq.body} />
                    </AccordionItemPanel>
                  </AccordionItem>
                ))}

              </Accordion>
            </div>
          </section>
        }

        {
          offering.Quote[1] && <Quote classes='no-img'
            quote={offering.Quote[1].Quote}
            source={offering.Quote[1].Source}
          />
        }

        <PrimaryPageCTA
          title={offering.CTA.Header}
          subtitle={offering.CTA.body}
          primaryButtonText={offering.CTA.cta_button[0] && offering.CTA.cta_button[0].button_text}
          primaryButtonLink={offering.CTA.cta_button[0] && offering.CTA.cta_button[0].button_link}
          secondaryButtonText={offering.CTA.cta_button[1] && offering.CTA.cta_button[1].button_text}
          secondaryButtonLink={offering.CTA.cta_button[1] && offering.CTA.cta_button[1].button_link}

        />


      </div >
    </RedLayout >
  );
};

export const query = graphql`
query offeringQuery {
  allStrapiOffering {
    nodes {
      id
      Body {
        data {
            Body
        }
      }
      CTA {
        Header
        body
        cta_button {
          button_link
          button_text
        }
      }
      Path
      Quote {
        Quote
        Source
      }
      Stats {
        Content_Element
        Numerical_Element
      }
      Title
      client_logo {
        text
        client_logo {
          url
          alternativeText
          caption
          id
        }
      }
      hero_button {
        button_link
        button_text
      }
      text_section {
        Header
        body {
          data {
            body
          }
        }
        button {
          button_link
          button_text
        }
      }
      FAQ_Accordion_Section {
        list_questions {
          body {
            data {
              body
            }
          }
          question
        }
      }
      tabs {
        cta_tab {
          button_link
          button_text
          header
        }
        tab_header
        tabs_section {
          body
          header
        }
      }
      value_prop {
        body_text
        header_text
        image {
          alternativeText
          caption
          url
        }
      }
      team_members {
        Body {
          data {
            Body
          }
        }
        Name
        Role
        Linkedin
        image {
          alternativeText
          url
        }
      }
      SEO {
        OGDescription
        OGTitle
        OGImage {
          childImageSharp {
            gatsbyImageData(
              width: 1200
            )
          }
        }
      }
    }
  }
}
`;

export default OfferingTemplate;
