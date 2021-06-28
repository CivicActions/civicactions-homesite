import '../../sass/styles.scss';
import React from 'react';
import RedLayout from '../../layouts/red';
import SEO from "../../components/seo";
import Hero from '../../components/hero.js';
import { Link } from 'gatsby';
import PrimaryPageCTA from "../../components/primary-page-cta";

const OpenConcept = () => {

    return (
        <RedLayout>
                <SEO
                    title='CivicActions expands accessibility capabilities with OpenConcept'
                    description='Press release from civicactions.com'
                />
            <Hero
                title='CivicActions expands accessibility capabilities with OpenConcept'
                />
            <div className='single--press-releases--main'>
                <div className='inner'>
                    <span className='body'>Date: Monday, November 9, 2020</span>
                    <p className='body'><strong>Lafayette, Calif.</strong> – <Link to='/'>CivicActions</Link>, a professional services firm modernizing government technologies and services, today announced it has acquired <a href='https://openconcept.ca/drupal'>OpenConcept</a>, a development firm specializing in web accessibility through open source tools and community.</p>
                    <p className='body'>“CivicActions creates digital services that work for everyone, and that means people of all abilities,” said Owen Barton, Director of Engineering at CivicActions. “By having OpenConcept join us, we’re strengthening our capacity to help government agencies innovate in ways that are inclusive from the onset.”</p>
                    <p className='body'>Both CivicActions and OpenConcept are longtime providers of and contributors to Drupal, an open source content management platform that helps organizations meet accessibility standards as they evolve. Specifically, Drupal supports compliance with the newly-updated Section 508, a law requiring federal agencies to make their information and communication technology (ICT) accessible to people of varying abilities.</p>
                    <p className='body'>“People tend to think of web accessibility as a checklist — but the web is now evolving so quickly that today’s checklist could be outdated next year,” said OpenConcept founder Mike Gifford, who will now serve as a Senior Strategist at CivicActions, advising on and identifying opportunities for improving accessibility compliance in government.</p>
                    <p className='body'>“Web accessibility must be part of the foundational design, and CivicActions is emerging as a leader in this space,” Gifford said. “My team and I are thrilled to further amplify that work and help government agencies raise the bar in building simple, inclusive services for citizens.”</p>
                    <p className='body'>Visit the company blog to read more about how CivicActions is <a href='https://medium.com/civicactions/4-ways-to-improve-government-accessibility-through-open-source-8e20fabc7281'>improving government accessibility through open source.</a> To speak with someone about CivicActions’ services, please send an email to <a href='mailto:contact@civicactions.com'>contact@civicactions.com</a>.</p>
                    <p className='body'><br/><strong>Contact</strong>
                        <br/>Marlena Medford, Marketing & Content Strategist
                        <br/><a href='tel:214-697-3123'>214.697.3123</a>, <a href='mailto:marlena.medford@civicactions.com'>marlena.medford@civicactions.com</a>
                    </p>
                </div>
            </div>
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



export default OpenConcept;
