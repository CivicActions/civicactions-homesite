import '../../sass/styles.scss';
import React from 'react';
import RedLayout from '../../layouts/red';
import SEO from "../../components/seo";
import Hero from '../../components/hero.js';
import PrimaryPageCTA from "../../components/primary-page-cta";

const CivicactionsAccessibilityPledge = () => {

    return (
        <RedLayout>
            <SEO
                title='CivicActions Announces Accessibility Pledge on Global Accessibility Awareness Day'
                description='Press release from civicactions.com'
            />
            <Hero
                title='CivicActions Announces Accessibility Pledge on GAAD'
            />
            <div className='single--press-releases--main'>
                <div className='inner'>
                    <div className='body'>
                    
                      <span>Date: Tuesday, May 24, 2022</span>
                        <p>On Global Accessibility Awareness Day, CivicActions announce our <a href="https://accessibility.civicactions.com/posts/CivicActions-Accessibility-Pledge">Accessibility Pledge</a>.</p>
                        <p>As part of our committment to accessibility, our team is pledging to:</p>
                         <ul><li>build systems to continuously monitor our owrk
                             <li>actively engage new teams, partners, and clients in why accessibility matters
                             <li>set annual goals and report against publicly
                         </ul>
                        <p>As part of this we have also created a new Accessessibility Champions Program in which we will work to strengthen our approach to accessibility across all aspects of our work.  </p>
      
                        <p>To learn more about CivicActions' work, visit our <a href="https://accessibility.civicactions.com/">accessibility website</a>. To see how we're advancing public service, read our latest <a href="https://civicactions.com/case-studies">case studies</a>. </p>
                        
                    </div>
                </div>
            </div>
            <PrimaryPageCTA
                title='CivicActions Announces Accessibility Pledge'
                subtitle='on Global Accessibility Awareness Day'
                primaryButtonText='EXPLORE SERVICES'
                primaryButtonLink='/services'
                secondaryButtonText='CONTRACTING INFO'
                secondaryButtonLink='/contracting'
            />
        </RedLayout>
    );
};

export default CivicactionsAccessibilityPledge;
