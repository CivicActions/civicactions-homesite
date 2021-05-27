import React, { useState } from 'react';
import '../sass/styles.scss';
import RedLayout from '../layouts/red';
import { graphql, useStaticQuery } from 'gatsby';
import {Helmet} from "react-helmet";
import Hero from '../components/hero.js';
import PrimaryPageCTA from "../components/primary-page-cta";

const CaseStudyPage = () => {

    const data = useStaticQuery(graphql`
      {
         allStrapiCaseStudy{
            nodes {
              Title
              Cover_Image {
                url
                alternativeText
                caption
              }
              Client_Name
              Path
              Service_Category {
                Category
              }
              Sort_Order

            }
         }
      }
    `);

    const caseStudies = data.allStrapiCaseStudy.nodes;


    const categories = [
        {id: 1, value: 'Web & CMS', name:'Web_CMS', isChecked: false},
        {id: 2, value: 'IT & Service Modernization', name:'IT_Service_Modernization', isChecked: false},
        {id: 3, value: 'Product & Design', name:'Product_Design', isChecked: false},
        {id: 4, value: 'Security & Compliance', name:'Security_Compliance', isChecked: false},
        {id: 5, value: 'Data Services', name:'Data_Services', isChecked: false},
        {id: 6, value: 'Workforce Development', name: 'Workforce_Development', isChecked: false}
    ];

    const [filterState, setFilterState] = useState(null);

    const callback = (e) => {
        console.log(e);

        if (e.target.name !== 'undefined') {
            if (filterState === e.target.name) {
                // The button was already selected.
                setFilterState(null);
            } else {
                setFilterState(e.target.name);
            }
        }
    };
    let cases;
    if (filterState) {
        caseStudies.filter((caseStudy) => caseStudy.Service_Category.map(category => category.Category === (filterState)));
    } else {
        cases = caseStudies;
    }

    return (

        <RedLayout>

            <Hero
                title='Work that makes a difference'
                description='Our work impacts the daily lives of millions of people. See how we’ve helped agencies build resilient services at scale.'
            />
            <Helmet>
                <title data-react-helmet="true">Case Study Landing page</title>
            </Helmet>

            <ul>
                {categories.map((item, index) => (
                    <li>
                        <input
                            type="checkbox"
                            id={categories[index].id}
                            name={categories[index].name}
                            value={categories[index].value}
                            onChange={(e) => {
                                callback(e);
                            }}
                        />{categories[index].value}
                    </li>
                ))}
            </ul>
            <CaseStudyTeasers
                cases={cases}
                />

            <PrimaryPageCTA
                title='Let’s build a public success story.'
                subtitle='Get in touch to start.'
                primaryButtonText='Put us to work'
                secondaryButtonText='Join our team'
            />
        </RedLayout>
    );

};
//
const CaseStudyTeasers = ( {cases} ) => {
        return cases.map((item, index) => {
            const { Title, Client_Name, Sort_Order, Service_Category, Image } = item;
            return (
                <div>
                    {Title}
                </div>
            );
        });
};
export default CaseStudyPage;

