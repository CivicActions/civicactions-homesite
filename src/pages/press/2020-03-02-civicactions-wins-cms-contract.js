import '../../sass/styles.scss';
import React from 'react';
import RedLayout from '../../layouts/red';
import SEO from "../../components/seo";
import Hero from '../../components/hero.js';
import PrimaryPageCTA from "../../components/primary-page-cta";

const CMSContract = () => {

    return (
        <RedLayout>
            <SEO
                title='CivicActions wins $18M contract to redesign, migrate CMS websites'
                description='Press release from civicactions.com'
            />
            <Hero
                title='CivicActions wins $18M contract to redesign, migrate CMS websites'
            />
            <div className='single--press-releases--main'>
                <div className='inner'>
                    <div className='body'>
                        <span>Date: Monday, March 2, 2020</span>
                        <p><strong>Lafayette, Calif.</strong> - The Centers for Medicare and Medicaid Services on Feb. 28 awarded CivicActions a $18.25 million contract for Web Experience and Content Management Services (WECMS), according to USASpending.gov.</p>
                        <p>The contract calls for a redesign of CMS.gov and Medicare.gov, as well as migrating the agency’s open data portals to new sites using DKAN, a free and open source open data platform.</p>
                        <p>The digital services agency, which started in 2004, specializes in user centered design, Drupal development, security and compliance, open data, and DevOps. CivicActions is also the core maintainer of DKAN.</p>
                        <p>The contract starts on March 2, 2020 and has two, one-year options to extend the project to June 1, 2023, up to a total of $18.25M.</p>
                        <p>Earlier this year, the firm was named to the GovTech Top 100 list for the fourth year in a row.</p>
                        <p>CivicActions is also a founding member of the Digital Services Coalition, a group of 16 companies dedicated to bringing the innovation and agility that has become the backbone of commercial digital services to the government.</p>
                        <p>For this contract, CivicActions is partnering with Fearless, another Digital Services Coalition member firm, in a Contractor Teaming Arrangement.</p>
                        <p><a href='https://www.usaspending.gov/#/award/CONT_AWD_75FCMC20F0025_7530_GS35F337BA_4732'>Award information on USASpending.gov</a></p>
                    </div>
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



export default CMSContract;
