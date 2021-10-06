import '../../sass/styles.scss';
import React from 'react';
import RedLayout from '../../layouts/red';
import SEO from "../../components/seo";
import Hero from '../../components/hero.js';
import PrimaryPageCTA from "../../components/primary-page-cta";

const CMSVPAT = () => {

    return (
        <RedLayout>
            <SEO
                title='GSA Engages CivicActions to Modernize VPAT to Improve Digital Accessibility'
                description='Press release from civicactions.com'
            />
            <Hero
                title='GSA Engages CivicActions to Modernize VPAT to Improve Digital Accessibility'
            />
            <div className='single--press-releases--main'>
                <div className='inner'>
                    <div className='body'>
                        <span>Date: Thursday, July 8, 2021</span>
                        <p>CivicActions is excited to announce a new contract with General Services Administration (GSA) to reimagine the Voluntary Product Accessibility Template® (VPAT®) into a modernized format to support better accessibility for digital products.</p>
                        <p>The VPAT currently exists as a lengthy Word document that lists accessibility requirements for technology products, such as software and hardware. It’s often used by vendors during the proposal process to demonstrate the accessibility of their digital products — but the outdated format of the VPAT hinders its effectiveness.</p>
                        <p>CivicActions will help the GSA convert its VPAT to a machine-readable format, called the Open Product Accessibility Template (OPAT). This will be an open standard used by vendors to produce compliance reports just as they do currently with VPAT — but with the improved template, the reports will be in structured digital files that are easier to validate and update.</p>
                        <p>This work will result in:</p>
                        <p>
                            <ul>
                                <li>Better understanding of the accessibility of digital products</li>
                                <li>Stronger consideration for accessibility in procurement processes</li>
                                <li>Easier management of accessibility reporting by agency staff in accordance with best practices</li>
                            </ul>
                        </p>
                        <p>GSA is setting a new standard for making digital accessibility a meaningful part of IT procurement. We are proud to be part of this work, which will lead to building government digital services that better serve people of all abilities.</p>
                        <p>To learn more about how we’re advancing accessibility in government, visit our <a href='https://accessibility.civicactions.com/'>Accessibility Community of Practice</a>.</p>
                        <p><strong>More on this topic</strong></p>
                        <p>
                            <ul>
                                <li><a href='https://gcn.com/articles/2021/02/04/accessibility-compliance-as-code.aspx'>The need for accessibility compliance as code</a></li>
                                <li><a href='https://medium.com/civicactions/4-ways-to-improve-government-accessibility-through-open-source-8e20fabc7281'>How open source tools improve accessibility for government</a></li>
                                <li><a href='https://medium.com/civicactions/whitehouse-gov-makes-an-accessibility-statement-5de37580209'>Accessibility initiatives from the White House</a></li>
                            </ul>
                        </p>
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



export default CMSVPAT;
