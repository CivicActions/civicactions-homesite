import '../../sass/styles.scss';
import React from 'react';
import RedLayout from '../../layouts/red';
import SEO from "../../components/seo";
import Hero from '../../components/hero.js';
import PrimaryPageCTA from "../../components/primary-page-cta";

const RyersonCivicactionsPartnership = () => {

    return (
        <RedLayout>
            <SEO
                title='Ryerson University partners with CivicActions to advance digital accessibility'
                description='Press release from civicactions.com'
            />
            <Hero
                title='Ryerson University partners with CivicActions to advance digital accessibility'
            />
            <div className='single--press-releases--main'>
                <div className='inner'>
                    <div className='body'>
                    
                      <span>Date: Thursday, April 21, 2022</span>
                        <p>CivicActions is pleased to announce that <a href="https://continuing.ryerson.ca/">The G. Raymond Chang School of Continuing Education (The Chang School) at Ryerson University</a> has partnered with us to support its Digital Accessibility Specialist Microcredential Program.</p>
                        <p>The program includes five micocedenitals that teach students how to identify and meet online accessibility requirements.</p>
                        <p>"The Chang School approached us to do this work because we have a strong reputation as a leader in digital accessibility — and we're incredibly proud of that," says Bill Ogilvie, CivicActions Vice President of Public Sector. "We're honored to have been invited to partner on this important work, and applaud the initiative." </p>
                        <p>The Government of Ontario Microcredentials Challenge Fund is sponsoring the program development, which is part of a $59.5 million investment to professional development throughout the province.</p>
                        <p>In addition to upskilling professionals, the program also aims to create a more inclusive workforce in Ontario, which is working to be fully accessible <a href="https://www.ontario.ca/page/path-2025-ontarios-accessibility-action-plan">by 2025</a>.</p>
                        <p>"We're committed to building a more accessible world through technology, and partnerships like these are one of the valuable ways we're making it happen," says Mike Gifford, Drupal accessibility maintainer and accessibility strategist at CivicActions.</p>
                        <p>The Chang School is committed to offering programs and support services that help learners build their capacity to integrate into a socially progressive innovation economy. The Digital Accessibility Specialist Microcredential Program will address the skills gap in digital accessibility and foster a more inclusive, barrier-free workforce.. A sample of open books released under a Creative Commons license include <a href="https://pressbooks.library.ryerson.ca/iwacc//">Introduction to Web Accessibility</a>,<a href="https://pressbooks.library.ryerson.ca/wafd/" Web Accessibility for Developers</a> and <a href="https://pressbooks.library.ryerson.ca/pwaa/">Professional Web Accessibility Auditing Made Easy.</a></p>
                        <p>To learn more about CivicActions' work, visit our <a href="https://accessibility.civicactions.com/">accessibility website</a>. To see how we're advancing public service, read our latest <a href="https://civicactions.com/case-studies">case studies</a>. </p>
                        
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



export default RyersonCivicactionsPartnership;
