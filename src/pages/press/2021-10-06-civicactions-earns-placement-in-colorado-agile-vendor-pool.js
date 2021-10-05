import '../../sass/styles.scss';
import React from 'react';
import RedLayout from '../../layouts/red';
import SEO from "../../components/seo";
import Hero from '../../components/hero.js';
import PrimaryPageCTA from "../../components/primary-page-cta";

const ColoradoAgilePool = () => {

    return (
        <RedLayout>
            <SEO
                title='CivicActions Earns Placement in Colorado Agile Technology Services Vendor Pool'
                description='Press release from civicactions.com'
            />
            <Hero
                title='CivicActions Earns Placement in Colorado Agile Technology Services Vendor Pool'
                />
            <div className='single--press-releases--main'>
                <div className='inner'>
                    <span className='body'>Date: Wednesday, October 6, 2021</span>
                    <p className='body'>CivicActions is pleased to announce that we have been awarded a spot in the State of Colorado’s Agile Technology Services Vendor Pool, giving us the opportunity to support the state’s <a href='https://reimagineit.state.co.us/'>IT modernization programs</a> in collaboration with the Colorado Office of Information Technology (OIT) and our fellow digital services vendors.</p>
                    <p className='body'>The agile vendor pool helps the state “establish a group of companies that can consistently meet the needs” of IT transformation programs by limiting the competing contractors to a select group who are “native to modern software development practices, product management, and user experience design,” according to OIT.</p>
                    <p className='body'>Companies that win a place in the vendor pool are expected to apply the principles of the U.S. Digital Services Playbook and modern software development practices into the government context to improve services for the people of Colorado.</p>
                    <p className='body'>Vendors awarded under this solicitation will enter into a Master Task Order contract with OIT. A Master Task Order contract is a zero-dollar/indefinite delivery-indefinite quantity type contract.  There is no known expectation for the number of project requests, the size or budget of the requests, or any similar project-specific information at this time.</p>
                    <p className='body'>“We look forward to working with OIT and its customer agencies to plan and develop digital products that will make the best use of taxpayer dollars and streamline the delivery of services for thousands of Colorado residents,” said Bill Ogilvie, VP of Public Sector at CivicActions.</p>
                    <p className='body'>The awarding of a place in this vendor pool is a positive reflection on a contractor’s track record of bringing modern digital services to the public sector. To learn more about our past performance, <a href='https://civicactions.com/case-studies'>read our case studies.</a></p>
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



export default ColoradoAgilePool;
