import React, { useState, useEffect } from 'react';
import '../sass/styles.scss';
import RedLayout from '../layouts/red';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import Hero from '../components/hero.js';
import PrimaryPageCTA from '../components/primary-page-cta';

const CaseStudyPage = () => {
  const data = useStaticQuery(graphql`
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
  `);

  const categories = [
    { id: 1, value: 'Web & CMS', name: 'Web_CMS', isChecked: false },
    {
      id: 2,
      value: 'IT & Service Modernization',
      name: 'IT_Service_Modernization',
      isChecked: false,
    },
    {
      id: 3,
      value: 'Product & Design',
      name: 'Product_Design',
      isChecked: false,
    },
    {
      id: 4,
      value: 'Security & Compliance',
      name: 'Security_Compliance',
      isChecked: false,
    },
    { id: 5, value: 'Data Services', name: 'Data_Services', isChecked: false },
    {
      id: 6,
      value: 'Workforce Development',
      name: 'Workforce_Development',
      isChecked: false,
    },
  ];

  const [filterState, setFilterState] = useState([]);

  // Handle onChange from Filters
  const callback = (e) => {
    if (e.target.name !== 'undefined') {
      if (!(filterState.includes(e.target.name))) {
        // If the filter has not been selected, add it to the array of selected items.
        setFilterState([...filterState, e.target.name]);
      } else {
        // If the filter has already been selected, remove it from the array
        filterState.splice(filterState.indexOf(e.target.name), 1)
        setFilterState([...filterState]);
      }
    }
  };

  // Re-renders when filter is clicked and state is updated because useState is async.
  useEffect(() => { }, [filterState.length]);

  let cases;
  const caseStudies = data.allStrapiCaseStudy.nodes;

  if (caseStudies) {
    // If no filters are selected show all case studies
    if (!filterState.length) {
      cases = caseStudies;
    } else {
      cases = caseStudies.filter((caseStudy) => {
        let category = caseStudy.Service_Category[0].Category;
        // For each case study, loop through the selected filters and only 
        // return results that match the selected categories.
        for (let filter of filterState) {
          if (category === filter) {
            return true
          }
        }
      });
    }
  }

  return (
    <RedLayout>
      <Hero
        title='Work that makes a difference'
        description='Our work impacts the daily lives of millions of people. See how we’ve helped agencies build resilient services at scale.'
      />
      <Helmet>
        <title data-react-helmet='true'>Case Study Landing page</title>
      </Helmet>

      <ul>
        {categories.map((item, index) => (
          <li>
            <input
              type='checkbox'
              id={categories[index].id}
              name={categories[index].name}
              value={categories[index].value}
              onChange={(e) => {
                callback(e);
              }}
            />
            {categories[index].value}
          </li>
        ))}
      </ul>
      <CaseStudyTeasers cases={cases} />

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
const CaseStudyTeasers = ({ cases }) => {
  return cases.map((item, index) => {
    const { Title, Client_Name, Sort_Order, Service_Category } = item;
    return <div className={Sort_Order}>
      <img src={item.Cover_Image[0].url} alt={item.Cover_Image[0].alternativeText} />
      <h2 className='h3'>{Title}</h2>
      <span>{Client_Name}</span>
    </div>;
  });
};
export default CaseStudyPage;
