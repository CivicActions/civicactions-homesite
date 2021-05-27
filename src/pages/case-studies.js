import React, { useState } from 'react';
import '../sass/styles.scss';
import RedLayout from '../layouts/red';
import { graphql, useStaticQuery } from 'gatsby';
import {Helmet} from "react-helmet";
import Hero from '../components/hero.js';
import PrimaryPageCTA from "../components/primary-page-cta";



const CaseStudyPage = () => {
    const data = useStaticQuery(query);
    const caseStudies = data.allStrapiCaseStudy.nodes;
console.log(caseStudies);
    const categories = [
        {id: 1, value: 'Web & CMS', isChecked: false},
        {id: 2, value: 'IT & Service Modernization', isChecked: false},
        {id: 3, value: 'Product & Design', isChecked: false},
        {id: 4, value: 'Security & Compliance', isChecked: false},
        {id: 5, value: 'Data Services', isChecked: false},
        {id: 6, value: 'Workforce Development', isChecked: false}
    ];

    const [checkedState, setCheckedState] = useState(
        new Array(categories.length).fill(false)
    );
    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);



    };
    const getFilteredNodes = (position) => {
        let cases;
        
        if (checkedState[position]) {
            cases = caseStudies.filter((caseStudy) => caseStudy.Service_Category[position].Category === categories[position]);
        } else {
            cases = caseStudies;
        }
    };
    // console.log('test');
    // console.log(checkedState);
    // let team;
    // checkedState.map((item, index) => (
    // if (checkedState[index]) {
    //     team = caseStudies.filter((person) => person.Service_Category === checkedState);
    // } else {
    //     team = caseStudies;
    // }
    // ))

    // console.log();
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
                            name={categories[index].value}
                            value={categories[index].value}
                            onChange={() => handleOnChange(index)}
                        />{categories[index].value}
                    </li>
                ))}
            </ul>


            {checkedState.map((item, index) => (
             <div>
                 {checkedState[index] === true &&
                 <div>
                     {getFilteredNodes(index)}
                 </div>
                 }

                 {/* <CaseStudyTeser*/}

                 {/* />*/}
             </div>


            ))}
            // if nothing checked show all
            <pre>{JSON.stringify(data, null, 4)}</pre>

            // if filter checked show only those nodes.



            <PrimaryPageCTA
                title='Let’s build a public success story.'
                subtitle='Get in touch to start.'
                primaryButtonText='Put us to work'
                secondaryButtonText='Join our team'
            />
        </RedLayout>
    );

}
export const query = graphql`
  {
     allStrapiCaseStudy {
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
`;
export default CaseStudyPage;

