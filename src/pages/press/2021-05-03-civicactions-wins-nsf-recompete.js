import '../../sass/styles.scss';
import React from 'react';
import RedLayout from '../../layouts/red';
import {Helmet} from "react-helmet";
import Hero from '../../components/hero.js';
import { Link } from 'gatsby';
import PrimaryPageCTA from "../../components/primary-page-cta";

const NSFRecomplete = () => {

    return (
        <RedLayout>
            <Helmet>
                <title data-react-helmet="true">NSF awards CivicActions $44M contract for CMS support and improvement of federal science research website</title>
            </Helmet>
            <Hero
                title='NSF awards CivicActions $44M contract for CMS support and improvement of federal science research website'
                />
            <div className='single--press-releases--main'>
                <div className='inner'>
                    <span className='body'>Date: May 3, 2021</span>
                    <p className='body'><Link to='/'>CivicActions</Link> is pleased to announce that the National Science Foundation (NSF) has <a href='https://etc.g2xchange.com/statics/small-business-scores-44m-nsf-web-content-management-system-cms-support-contract/'>awarded us a 5-year contract</a> at $44M to continue working with the agency using human-centered and agile approaches to improve how their website serves the scientific community.</p>
                    <p className='body'>This will include further improvement of NSF’s web content management system (CMS) through human-centered development, modernization, and enhancement (DME); and ongoing operations and maintenance (O&M). We are delighted to help support the agency’s mission of advancing scientific research and discovery applied to practical problems.</p>
                    <p className='body'>Our work is slated to begin in spring 2021. This work was awarded through our General Services Administration (GSA) Multiple Award Schedule (MAS) contract.</p>
                    <p className='body'>Our previous work with NSF has taken a research-based approach to the redesign and modernization of the agency’s website, including the design and development of an improved search feature that easily connects science researchers with opportunities to obtain funding for their work.</p>
                    <p className='body'>To learn more about how we’re advancing public service, read our <Link to='/case-studies'>latest case studies.</Link><br/></p>
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



export default NSFRecomplete;
