import '../../sass/styles.scss';
import React from 'react';
import RedLayout from '../../layouts/red';
import {Helmet} from "react-helmet";
import Hero from '../../components/hero.js';
import { Link } from 'gatsby';
import PrimaryPageCTA from "../../components/primary-page-cta";

const CertDeliverDitap = () => {

    return (
        <RedLayout>
            <Helmet>
                <title data-react-helmet="true">CivicActions certified to deliver DITAP training to federal acquisition professionals</title>
            </Helmet>
            <Hero
                title='CivicActions certified to deliver DITAP training to federal acquisition professionals'
            />
            <div className='single--press-releases--main'>
                <div className='inner'>
                    <span className='body'>Date: Friday, August 14, 2020</span>
                    <p className='body'><strong>Lafayette, Calif.</strong> - CivicActions has been officially certified as a FAC-C-DS Core Plus Training Provider to deliver modern digital service procurement education and training to federal contracting officers, according to the <a href='https://techfarhub.cio.gov/initiatives/ditap/'>TechFAR Hub.</a></p>
                    <p className='body'>The training is part of the Digital IT Acquisition Professional (DITAP) initiative, an effort by the U.S. Digital Service (USDS) and the Office of Federal Procurement Policy to equip contracting officers with the knowledge and skills to make smart IT purchasing decisions and lead innovation in government digital services acquisitions within the constraints of current federal procurement practices.</p>
                    <p className='body'>Starting in 2022, all federal acquisition professionals managing contracts of $7 million or greater will be required to have FAC-C-DS certification, reflecting their understanding of modern digital service procurement. The training will be available through approved vendors or the Federal Acquisition Institute. CivicActions is the second company to become a certified vendor of the training, following the joint development of the curriculum by USDS and global consulting firm ICF.</p>
                    <p className='body'>CivicActions specializes in services that are central to the DITAP curriculum such as human centered design, free and open source software development, security and compliance, Agile and Lean Startup methodologies, and DevOps. By helping acquisition professionals align their contracting processes with these practices through which modern software is built, the DITAP program aims to increase the number and percentage of successful digital service acquisitions across the federal government.</p>
                    <p className='body'>Over the past 18 months, CivicActions has trained three cohorts of acquisition professionals, encompassing more than 70 learners from 20 different federal agencies. 100% of participants reported “clear takeaways from the course” and 92% would recommend the training to a colleague. DITAP alumni will continue to be supported by others in the acquisition community as leaders for change within their organizations.</p>
                    <p className='body'><ul>
                            <li><Link to='/ditap'>Request DITAP training</Link></li>
                            <li>Reflections on DITAP: <a href='https://medium.com/civicactions/what-we-learned-from-training-procurement-officers-to-buy-modern-government-it-cc6309df4103'>What we learned from training procurement officers to buy modern government IT</a></li>
                        <li>Learn more about DITAP at the <a href='https://techfarhub.cio.gov/initiatives/ditap/'>TechFAR Hub</a></li>
                        </ul>
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



export default CertDeliverDitap;
