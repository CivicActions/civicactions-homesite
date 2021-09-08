import '../../sass/styles.scss';
import React from 'react';
import RedLayout from '../../layouts/red';
import SEO from "../../components/seo";
import Hero from '../../components/hero.js';
import PrimaryPageCTA from "../../components/primary-page-cta";

const DITAPSEPT2021 = () => {

    return (
        <RedLayout>
            <SEO
                title='CivicActions announces 13 DITAP graduates across seven federal agencies'
                description='Press release from civicactions.com'
            />
            <Hero
                title='CivicActions announces 13 DITAP graduates acrross seven federal agencies'
                />
            <div className='single--press-releases--main'>
                <div className='inner'>
                    <span className='body'>Date: Wednesday, September 8, 2021</span>
                    <p className='body'>CivicActions is pleased to announce the graduation of its newest <a href='https://civicactions.com/services/ditap'>Digital IT Acquisition Professional (DITAP)</a> cohort, which included 13 procurement officers from seven federal agencies.</p>
                    <p className='body'>DITAP was created to modernize how the federal government buys digital services. Specifically, it teaches students how to build flexible contracts that keep pace with changing technologies.</p>
                    <p className='body'>“The coursework has been dynamic and relevant. It will empower us as acquisition professionals to be agile ambassadors and digital diplomats,” said DITAP graduate Rodney-Daryl Jones, who serves as the Director of Information Technology Acquisition for the Environmental Protection Agency (EPA).</p>
                    <p className='body'>He shared his commentary during the DITAP graduation ceremony on Aug. 30, adding that he hoped his fellow graduates would see themselves as change agents for better government.</p>
                    <p className='body'>“We’re now a national resource to help modernize and protect the United States government so that our nation can thrive,” he said.</p>
                    <p className='body'>The six-month DITAP program starts by covering 21st century digital services — including agile software development, human-centered design, cloud computing and data management. Students then learn how to contract these services, and ensure their projects are successful.</p>
                    <p className='body'>DITAP also enables contracting officers to be business advisors and change agents within their own agencies. This serves DITAP’s bigger goal of building a culture of innovative acquisition across the federal government.</p>
                    <p className='body'>Upon DITAP graduation, students earn their Federal Acquisition Certification in Contracting Core-Plus Specialization in Digital Services (<a href='https://www.whitehouse.gov/wp-content/uploads/2018/05/fac_c_digital_services_05_12_18.pdf?utm_medium=email&utm_source=govdelivery'>FAC-C-DS</a>). By 2022, the FAC-C-DS will be required for all federal contracting officers who manage contracts of $7M or more.</p>
                    <p className='body'>With this cohort, CivicActions is pleased to congratulate the following DITAP graduates, which are listed by their agency:</p>
                    <br/>
                    <h3>Department of Transportation (DOT)</h3>
                    <p className='body'><ul>
                            <li>Kyle Griggs, Contract Specialist</li>
                          </ul>
                          </p>
                    <br/>
                    <h3>Environmental Protection Agency (EPA)</h3>
                    <p className='body'><ul>
                            <li>Christopher Davis, Contracting Officer</li>
                            <li>Darren Gann, Contracting Officer</li>
                            <li>Rodney-Daryl Jones, Director, Information Technology Acquisition</li>
                          </ul>
                          </p>
                    <br/>
                    <h3>Federal Energy Regulatory Commission (FERC)</h3>
                    <p className='body'><ul>
                            <li>Yolanda Cooper, Contracting Officer</li>
                          </ul>
                          </p>
                    <br/>
                    <h3>Health and Human Services (HHS)</h3>
                    <p className='body'><ul>
                            <li>Jennifer Browning, Branch Chief</li>
                          </ul>
                          </p>
                    <br/>
                    <h3>Social Security Administration (SSA)</h3>
                    <p className='body'><ul>
                            <li>Katie Cooney, Division Director, IT Hardware and Maintenance</li>
                          </ul>
                          </p>
                    <br/>
                    <h3>National Nuclear Security Administration (NNSA)</h3>
                    <p className='body'><ul>
                            <li>Yolanda Robinson-Freeman, Manager, Specialty Acquisition Branch</li>
                            <li>Ernesto Jayme, Contract Specialist</li>
                          </ul>
                          </p>
                    <br/>
                    <h3>United States Department of Agriculture (USDA)</h3>
                    <p className='body'><ul>
                            <li>Matthew Carnes, Contracting Officer</li>
                            <li>Robert Cortez, Contracting Officer</li>
                            <li>Scott Beckstrand, Chief, Strategic Acquisitions Division</li>
                            <li>Stuart	Christianson, Contract Specialist</li>
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



export default DITAPSEPT2021;
