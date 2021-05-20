import '../sass/styles.scss';
import React from 'react';
import RedLayout from '../layouts/red';
import {Helmet} from "react-helmet";
import Hero from "../components/hero";
import {servicesData} from "../data";
import {Sections} from "../components/sections";

const PressReleases = () => {

    return (
        <RedLayout>
            <Helmet>
                <title data-react-helmet="true">Press Releases Landing page </title>
            </Helmet>
            <Hero
                title='This work is worth talking about.'
                description='When government invests in smart technology and thoughtful design of services, millions of people stand to benefit for years to come. We are honored to be part of this work.'
            />
            <section className='temp-press-releases--main-section'>
                <div className='inner'>
                    <div className='press-release--items'>
                        <span>News Release: May 3, 2021</span>
                        <h2 className='h4'>NSF awards CivicActions $44M contract for CMS support and improvement of federal science research website</h2>
                        <p className='body'>We are delighted to be continuing our partnership with the National Science Foundation through a newly awarded 5-year contract. Our research-based approach to the improvement of NSF’s website helps science researchers obtain funding for world-changing work.</p>
                        <p className='body'>Full story: <a href=''>NSF Awards CivicActions $44M Contract for CMS Support and Improvement of Federal Science Research Website</a>
                        </p>
                    </div>
                    <div className='press-release--items'>
                        <span>FCW: March 22, 2021</span>
                        <h2 className='h4'>Recommendations for a Federal Compliance Library</h2>
                        <p className='body'>To help federal agencies achieve security compliance faster, a systems-thinking approach is required. CivicActions Director of Federal Strategy Mary Lazzeri shows how a library of reusable components can save time and money on the ATO process.</p>
                        <p className='body'>Full story: <a href=''>ATO ASAP: Streamlining government security with a Federal Compliance Library</a>
                        </p>
                    </div>
                    <div className='press-release--items'>
                        <span>FCW: February 4, 2021</span>
                        <h2 className='h4'>Recommendations for a Federal Compliance Library</h2>
                        <p className='body'>To help federal agencies achieve security compliance faster, a systems-thinking approach is required. CivicActions Director of Federal Strategy Mary Lazzeri shows how a library of reusable components can save time and money on the ATO process.</p>
                        <p className='body'>Full story: <a href=''>ATO ASAP: Streamlining government security with a Federal Compliance Library</a>
                        </p>
                    </div>
                    <div className='press-release--items'>
                        <span>FCW: February 4, 2021</span>
                        <h2 className='h4'>Fixing government security compliance with rapid ATO</h2>
                        <p className='body'>The process to get an Authority to Operate is outdated and is causing security risks to the federal government. Director of Federal Strategy Mary Lazerri shows the way toward a modern and agile approach to ATO.</p>
                        <p className='body'>Full story: <a href=''>ATO ASAP: Let’s finally fix the security compliance problem</a>
                        </p>
                    </div>
                    <div className='press-release--items'>
                        <span>News Release: January 7, 2021</span>
                        <h2 className='h4'>CivicActions named to 2021 GovTech 100 top government technology companies list</h2>
                        <p className='body'>For the fifth year in a row, we’re honored to be listed among leading digital services firms serving state and local agencies during these unprecedented times — when modern and accessible government services matter more than ever.</p>
                        <p className='body'>Full story: <a href=''>2021 GovTech 100 List</a>
                        </p>
                    </div>
                    <div className='press-release--items'>
                        <span>News Release: November 6, 2020</span>
                        <h2 className='h4'>CivicActions expands accessibility capabilities with OpenConcept</h2>
                        <p className='body'>With the acquisition of OpenConcept, an industry leader in web accessibility through open source, we are increasing our commitment and ability to create government digital services that are accessible to people of all abilities.</p>
                        <p className='body'>Full story: <a href=''>CivicActions Expands Accessibility Capabilities With OpenConcept</a>
                        </p>
                    </div>
                    <div className='press-release--items'>
                        <span>News Release: August 16, 2020</span>
                        <h2 className='h4'>CivicActions certified to deliver DITAP training to federal acquisition professionals</h2>
                        <p className='body'>As an approved certified vendor of the Digital IT Acquisition Professional (DITAP) training, we are thrilled to be helping federal contracting officers learn how to effectively buy modern IT services that best serve government and the public in today’s digital world.</p>
                        <p className='body'>Full story: <a href=''>CivicActions Certified to Deliver DITAP Procurement Training to Federal Acquisition Professionals</a>
                        </p>
                    </div>
                    <div className='press-release--items'>
                        <span>News Release: March 3, 2020</span>
                        <h2 className='h4'>CivicActions wins $18M contract to migrate and redesign CMS websites</h2>
                        <p className='body'>We are excited to be working with the Centers for Medicare & Medicaid Services to provide user centered design, agile development, and open data to improve the online health care experience for millions of people.</p>
                        <p className='body'>Full story: <a href=''>CivicActions Wins $18M Contract to Migrate, Redesign CMS Websites</a>
                        </p>
                    </div>

                </div>
            </section>
        </RedLayout>
    );
};


export default PressReleases;
