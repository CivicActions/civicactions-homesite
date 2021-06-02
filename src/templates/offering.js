import React from 'react';
import {graphql} from 'gatsby';
import ReactMarkdown from "react-markdown";
import RedLayout from '../layouts/red';
import {Helmet} from "react-helmet";
import CaseStudyHero from "../components/case-study-hero";
import Quote from "../components/quote";
import PrimaryPageCTA from "../components/primary-page-cta";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import ClientsSection from "../components/clients";
import Tabs from "./components/Tabs";
import LinkButton from "../components/link-button";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import linkedinIcon from "../files/icon/linkedin-footer-icon.svg"; // TODO need to change the icon

const OfferingTemplate = ({data}) => {
    // const offering = data.allStrapiOffering.edges[0].node;

    return (
        <RedLayout>
            <Helmet>
                <title data-react-helmet="true"></title>
            </Helmet>

            // TODO Hero component
            <CaseStudyHero
                client='client name'
                title='title'
                description='summary'
            />
            // TODO client logo
            <ClientsSection />
            // TODO Stats
            <section className='section--offering--stats'>
                <div className='stats--wrapper'>
                    <div className='inner'>

                            <div className='single-stat'>
                                <p className='stat--number'></p>
                                <p className='body stat--text'></p>
                            </div>

                        ))
                    </div>
                </div>
            </section>
            // TODO value props section
            <section className='section--offering--value-props'>
                <div className='inner'>

                </div>
            </section>
            // TODO Tabs
            <section className='section--offering--tabs'>
                <div className='inner'>
                    <div>
                        <h3>Tabs Demo</h3>
                        <Tabs> // Tabs component comes from https://www.digitalocean.com/community/tutorials/react-tabs-component
                            <h4 label="Gator">
                                See ya later, <em>Alligator</em>!
                            </h4>
                        </Tabs>
                    </div>
                </div>
            </section>
            // TODO Quote 1
            <Quote
                quote='test'
                source='test'
            />
            // TODO team
            <section className='section--offering--staff'>
                <div className='inner'>
                    <h2>Meet the team</h2>
                    <div className='related-staff--wrapper'>

                            <div className='related-staff'>

                                {/*<GatsbyImage image={getImage()} alt={''} />*/}

                                <p className='body staff-name'>
                                    <a href='' aria-label='link to staff member linkedin profile' alt=''>
                                    <img src={linkedinIcon}/></a></p>
                                <p className='body staff-role'></p>
                                <a href=''>Read bio</a>
                            </div>

                    </div>
                </div>
            </section>
            // TODO Text box
            <section className='section--offering--text'>
                <div className='inner'>
                    <h2></h2>
                    <p></p>
                    <LinkButton
                        src='test'
                        text='test'
                    />
                </div>
            </section>
            // TODO FAQ
            <Accordion> // Accordion comes from https://www.npmjs.com/package/react-accessible-accordion
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What harsh truths do you prefer to ignore?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Exercitation in fugiat est ut ad ea cupidatat ut in
                            cupidatat occaecat ut occaecat consequat est minim minim
                            esse tempor laborum consequat esse adipisicing eu
                            reprehenderit enim.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
            // TODO Quote 2
            <Quote
                quote='test2'
                source='test2'
            />
            // TODO Primary cta
            <PrimaryPageCTA
                title='Let’s build a public success story'
                subtitle='Get in touch to start.'
                primaryButtonText='Put us to work'
                secondaryButtonText='Join our team'
            />



        </RedLayout>
    );
};

// export const query = graphql`
//
//
// `;

export default OfferingTemplate;

