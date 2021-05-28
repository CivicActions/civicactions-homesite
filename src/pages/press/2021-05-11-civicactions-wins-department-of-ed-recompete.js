import '../../sass/styles.scss';
import React from 'react';
import RedLayout from '../../layouts/red';
import {Helmet} from "react-helmet";
import Hero from '../../components/hero.js';
import PressPageCTA from "../../components/press-page-cta";

const DeptEdRecomplete = () => {

    return (
        <RedLayout>
            <Helmet>
                <title data-react-helmet="true">Department of Education awards CivicActions 5-year contract to advance adult literacy</title>
            </Helmet>
            <Hero
                title='Department of Education awards CivicActions 5-year contract to advance adult literacy'
                />
            <div className='single--press-releases--main'>
                <div className='inner'>
                    <span className='body'>Date: May 11, 2021</span>
                    <p className='body'><a href='/'>CivicActions</a> is pleased to announce that the Department of Education has awarded us an $8.1M contract to continue supporting its Literacy and Information Communication System (LINCS), which helps adult learners prepare for 21st century jobs.</p>
                    <p className='body'>This 5-year contract was awarded through our General Services Administration (GSA) Multiple Award Schedule (MAS) contract. Work is slated to begin in spring 2021. Under this contract we will maintain, develop, enhance, and update the LINCS websites, web-based tools, databases, database search engines, streaming media, and content management and learning management systems.</p>
                    <p className='body'>These systems support the work of a varied ecosystem of educational instructors, administrative leaders, researchers, curriculum developers, and learners. Modern technology is key to their success, and we are proud to apply agile and human-centered methodologies to the improvement of the platforms they rely on for learning and cross-agency collaboration.</p>
                    <p className='body'>Our previous work with the Department of Education has resulted in a fruitful partnership through which we provided consolidation and improvement of LINCS websites, DevOps processes for continuous testing and releasing, and friendly helpdesk support integrated with agile workflows for a truly user-centered process.</p>
                    <p className='body'>To learn more about how we’re advancing public service, read our <a href='/case-studies/'>latest case studies.</a></p>
                </div>
            </div>
            <PressPageCTA
                title='Inspired by newsworthy work?'
                subtitle='See what we can do together.'
                primaryButtonText='EXPLORE SERVICES'
                secondaryButtonText='CONTRACTING INFO'
            />
        </RedLayout>
    );
};



export default DeptEdRecomplete;
