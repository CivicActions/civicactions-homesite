import React from 'react';
import {graphql} from 'gatsby';
import ReactMarkdown from "react-markdown";
import RedLayout from '../layouts/red';
import {Helmet} from "react-helmet";
import Hero from "../components/hero-with-buttons";
import Quote from "../components/quote";
import PrimaryPageCTA from "../components/ditap-page-cta";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import Tabs from "../components/Tabs";
import LinkButton from "../components/link-button";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import linkedinIcon from "../files/icons/linkedin.svg";
import squareCircle from "../files/icons/square-circle.svg";
import Modal from 'react-modal';

const OfferingTemplate = ({data}) => {
    const offering = data.allStrapiOffering.nodes[0];
    console.log(offering);
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal(){
        setIsOpen(false);
    }

    return (
        <RedLayout>
            <Helmet>
                <title data-react-helmet="true">{offering.Title}</title>
            </Helmet>
            <div className='offering--content-type'>
                <Hero
                    title={offering.Title}
                    description={offering.Body}
                    button={offering.hero_button}
                />

            <section className='section--offering--client-logos'>
                <div className='inner'>
                    <h2 className='body'>{offering.client_logo.text}</h2>
                    <div className='grid'>
                    {offering.client_logo.client_logo.map((img, index) => (
                        <img src={img.url} alt={img.alternativeText}/>
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
                                <p className='stat--number'>{offering.Stats[index].Numerical_Element}</p>
                                <p className='body stat--text'>{offering.Stats[index].Content_Element}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> }

            <section className='section--offering--value-props'>
                <div className='inner'>
                    <div className='value-props--left'>
                        <h2>{offering.value_prop.header_text}</h2><img className='icon' src={squareCircle} alt=''/>
                        <ReactMarkdown className='body' children={offering.value_prop.body_text}/>

                    </div>
                    <div className='value-props--right'>
                        <img src={offering.value_prop.image[0].url} alt={offering.value_prop.image[0].alternativeText}/>
                        <caption>{offering.value_prop.image[0].caption}</caption>
                    </div>


                </div>
            </section>
            // TODO Tabs
            <section className='section--offering--tabs'>
                <div className='inner'>
                    <div>
                        <h3>Tabs Demo</h3>
                        {/*<Tabs> // Tabs component comes from https://www.digitalocean.com/community/tutorials/react-tabs-component*/}
                        {/*    <h4 label="Gator">*/}
                        {/*        See ya later, <em>Alligator</em>!*/}
                        {/*    </h4>*/}
                        {/*<ReactMarkdown className='body' children={offering.value_prop.body_text}/>*/}
                        {/*</Tabs>*/}
                    </div>
                </div>
            </section>

            {offering.Quote[0] && <Quote classes='staff-quote--first'
                quote={offering.Quote[0].Quote}
                source={offering.Quote[0].Source}
            /> }

            {offering.team_members.length &&
            <section className='section--offering--staff'>
                <div className='inner'>
                    <h2>Meet the team</h2>
                    <div className='related-staff--wrapper'>
                        {offering.team_members.map((member, index) => (
                            <div className='related-staff'>
                                {/*<GatsbyImage image={getImage(member.Image)} alt={''} />*/}
                                <p className='h3 staff-name'>
                                    {offering.team_members[index].Name}
                                    <a className='linkedin-icon' href='/'><img src={linkedinIcon}/></a>
                                </p>
                                <p className='body staff-role'>{offering.team_members[index].Role}</p>
                                <button className='open-modal--btn' onClick={openModal}>Read bio</button>
                                <Modal
                                    isOpen={modalIsOpen}
                                    onRequestClose={closeModal}
                                    contentLabel="Staff member modal"
                                    aria-label="staff-modal-biography">

                                    <h2 className='h3 staff-name'>{offering.team_members[index].Name}</h2>
                                    <a className='linkedin-icon' href='/'><img src={linkedinIcon}/></a>
                                    <p className='body staff-role'>{offering.team_members[index].Role}</p>

                                    <button onClick={closeModal}>close</button>
                                    <div><p className='body staff-body'>{offering.team_members[index].Body}</p></div>
                                </Modal>

                            </div>
                        ))}
                    </div>
                </div>
            </section>}

            {offering.text_section.Header &&
            <section className='section--offering--text'>
                <div className='inner'>
                    <h2>{offering.text_section.Header}</h2>
                    <ReactMarkdown className='body' children={offering.text_section.body}/>
                    {offering.text_section.button.map((btn, index) => (
                        <LinkButton
                            text={btn.button_text}
                            // src={btn.button_link}

                        />
                    ))}

                </div>
            </section> }
            {/*// Accordion comes from https://www.npmjs.com/package/react-accessible-accordion*/}
            {offering.FAQ_Accordion_Section.list_questions.length &&
            <Accordion id='faq'>
                {offering.FAQ_Accordion_Section.list_questions.map((faq, index) => (
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                {faq.question}
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <ReactMarkdown className='body' children={faq.body}/>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}

            </Accordion>}

            {offering.Quote[1] && <Quote
                quote={offering.Quote[1].Quote}
                source={offering.Quote[1].Source}
            /> }

            <PrimaryPageCTA
                title={offering.CTA.Header}
                subtitle={offering.CTA.body}
                buttons={offering.CTA.cta_button}
            />


</div>
        </RedLayout>
    );
};

export const query = graphql`

query offeringQuery {
  allStrapiOffering {
    nodes {
      Body
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
      Summary
      Title
      client_logo {
        text
        client_logo {
          url
          alternativeText
          caption
        }
      }
      hero_button {
        button_link
        button_text
      }
      text_section {
        Header
        body
        button {
          button_link
          button_text
        }
      }
      FAQ_Accordion_Section {
        list_questions {
          body
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
        Body
        Name
        Role
      }
    }
  }
}

`;

export default OfferingTemplate;

