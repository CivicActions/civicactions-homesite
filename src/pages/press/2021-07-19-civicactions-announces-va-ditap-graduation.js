import '../../sass/styles.scss';
import React from 'react';
import RedLayout from '../../layouts/red';
import SEO from "../../components/seo";
import Hero from '../../components/hero.js';
import PrimaryPageCTA from "../../components/primary-page-cta";

const VADITAPGRAD = () => {

    return (
        <RedLayout>
            <SEO
                title='CivicActions announces 24 DITAP graduates from the Department of Veterans Affairs'
                description='Press release from civicactions.com'
            />
            <Hero
                title='CivicActions announces 24 DITAP graduates from the Department of Veterans Affairs'
                />
            <div className='single--press-releases--main'>
                <div className='inner'>
                    <span className='body'>Date: Monday, July 19, 2021</span>
                    <p className='body'>CivicActions is pleased to announce the graduation of its newest <a href='https://civicactions.com/services/ditap'>Digital IT Acquistion Professional (DITAP)</a> cohort, which included 24 procurement officers from the Department of Veteran Affairs.</p>
                    <p className='body'>DITAP was created to modernize how the federal government buys digital services. Specifically, it teaches students how to build flexible contracts that keep pace with changing technologies.</p>
                    <p className='body'>The six-month program starts by covering 21st century digital services — including agile software development, human-centered design, cloud computing and data management. Students then learn how to contract these services, and ensure their projects are successful.</p>
                    <p className='body'>DITAP also enables contracting officers to be business advisors and change agents within their own agencies. This serves DITAP’s bigger goal of building a culture of innovative acquisition across the federal government.</p>
                    <p className='body'>Upon DITAP graduation, students earn their Federal Acquisition Certification in Contracting Core-Plus Specialization in Digital Services (<a href='https://www.whitehouse.gov/wp-content/uploads/2018/05/fac_c_digital_services_05_12_18.pdf?utm_medium=email&utm_source=govdelivery'>FAC-C-DS</a>). By 2022, the FAC-C-DS will be required for all federal contracting officers who manage contracts of $7M or more.</p>
                    <p className='body'>With this cohort, CivicActions is pleased to congratulate the following DITAP graduates:</p>
                    <p className='body'><ul>
                            <li>Anthony Browner, Contract Specialist</li>
                            <li>Camille Dye, Contract Specialist</li>
                            <li>Chiffon Bradshaw, Procurement Analyst</li>
                            <li>Debra Bryce-Davis, Contract Specialist</li>
                            <li>Garret Holland, Contract Specialist</li>
                            <li>Ioannis Vardouniotis, Contract Specialist</li>
                            <li>James Cummiskey, Contract Specialist</li>
                            <li>James Morgan, Contract Specialist</li>
                            <li>John McDonnell, Contract Specialist</li>
                            <li>Joshua Hammill, Contract Officer</li>
                            <li>Kalil O'Neal, Contract Specialist</li>
                            <li>Kevin Andujar, Contract Specialist</li>
                            <li>Mary Accomando, Supervisory Contracting Officer</li>
                            <li>Mary Beth Hall, Contract Specialist</li>
                            <li>Michelle Policari, Contract Specialist</li>
                            <li>Mina Awad, Contract Specialist</li>
                            <li>Rene Brown, Procurement Analyst</li>
                            <li>Robert Robinson, Contract Specialist</li>
                            <li>Sarah Bach, Contract Specialist</li>
                            <li>Sharon Haywood, Contract Specialist</li>
                            <li>Shreeia Curry, Contract Specialist</li>
                            <li>Susan Meng, Management Analyst</li>
                            <li>Tasha Cheramie, Contract Specialist</li>
                        <li>Yash Dega, Contract Specialist</li>
                        </ul>
                    </p>
                    <p className='body'>CivicActions is proud to be the nation’s only small business that is fully-authorized  to provide DITAP training. For more information about our DITAP program, visit <a href='https://civicactions.com/services/ditap'>civicactions.com/services/ditap</a>. If you’d like to request training, please <a href='https://civicactions.com/services/ditap/register'>submit your request here</a>.</p>
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



export default VADITAPGRAD;
