import React, { useState, useEffect } from 'react';
import '../sass/styles.scss';
import RedLayout from '../layouts/red';
import { graphql, useStaticQuery } from 'gatsby';
import Hero from '../components/hero.js';
import PrimaryPageCTA from '../components/primary-page-cta';
import dataServicesIcon from '../files/icons/data-services-icon.svg';
import itModernizationIcon from '../files/icons/it-modernization-icon.svg';
import productDesignIcon from '../files/icons/product-design-icon.svg';
import securityComplianceIcon from '../files/icons/security-compliance-icon.svg';
import webCmsIcon from '../files/icons/web-cms-icon.svg';
import workforceDevelopmentIcon from '../files/icons/workforce-dev-icon.svg';
import SEO from '../components/seo';
import { Link } from 'gatsby';
import CaseStudyTeaser from '../components/case-study-teaser.js';

const CaseStudyPage = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiCaseStudy(sort: { fields: Sort_Order }) {
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
          Summary
          id
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
  let checked;
  // Handle onChange from Filters
  const callback = (e) => {
    checked = e.target.checked;
    if (e.target.name !== 'undefined') {
      if (!filterState.includes(e.target.name)) {
        // If the filter has not been selected, add it to the array of selected items.
        setFilterState([...filterState, e.target.name]);
        checked = false;
      } else {
        // If the filter has already been selected, remove it from the array
        filterState.splice(filterState.indexOf(e.target.name), 1);
        setFilterState([...filterState]);
        checked = true;
      }
    }
  };

  // Re-renders when filter is clicked and state is updated because useState is async.
  useEffect(() => {}, [filterState.length]);

  let cases;
  const caseStudies = data.allStrapiCaseStudy.nodes;

  if (caseStudies) {
    // If no filters are selected show all case studies
    if (!filterState.length) {
      cases = caseStudies;
    } else {
      /// For each case study, loop through the selected filters and only
      // return results that match the selected categories.
      cases = caseStudies.filter((caseStudy) => {
        for(var i = 0; i < caseStudy.Service_Category.length; i++) {
          let category = caseStudy.Service_Category[i].Category;
          for (let filter of filterState) {
            if (category === filter) {
              return true;
            }
          }
        }
      });
    }
  }

  return (
    <RedLayout>
      <SEO
        title='Case Studies'
        description="From large-scale federal CMS modernization to automating security compliance, see how we've helped government deliver better services to the public."
      />
      <Hero
        title='Work that makes a difference'
        description='Our work impacts the daily lives of millions of people. See how we’ve helped agencies build resilient services at scale.'
      />
      <section className='section--case-studies--filter'>
        <div className='inner'>
        <h2 className='body'>Filter by service category</h2>
        <div className={`checkboxes ${filterState}`}>
          {categories.map((item, index) => {
            const { id, name, value } = item;

            return (
              <div key={id} className='checkbox body'>
                <input
                  type='checkbox'
                  id={id}
                  name={name}
                  value={value}
                  onChange={(e) => {
                    callback(e);
                  }}
                  className={checked && 'checked'}
                />
                <label htmlFor={categories[index].id}>
                  {categories[index].value}
                </label>
              </div>
            );
          })}
        </div></div>
      </section>
      <section className='section--case-studies--teasers'>
        <div className='inner'>
          <CaseStudyTeaser cases={cases} />
        </div>
      </section>
      <section className={`section--more-clients ${filterState}`}>
        <h2>More clients</h2>
        <div className='inner'>
          <div className='web-cms'>
            <img alt='' className='case-studies--icon' src={webCmsIcon} />
            <label>Web & CMS</label>
            <ul className='body'>
              <li>Defense Security Cooperation Agency</li>
              <li>U.S. Executive Office of the President</li>
              <li>U.S. House of Representatives</li>
              <li>U.S. Department of the Interior</li>
              <li>California Polytechnic State University</li>
              <li>San Francisco Department of the Environment</li>
              <li>City of Los Angeles</li>
              <li>Doctors Without Borders</li>
            </ul>
          </div>
          <div className='it-service'>
            <img
              alt=''
              className='case-studies--icon'
              src={itModernizationIcon}
            />
            <label>IT & Service Modernization</label>
            <ul className='body'>
              <li>U.S. Department of Veterans Affairs</li>
              <li>General Services Administration (data.gov)</li>
              <li>California Health and Human Services Agency</li>
              <li>California Department of Motor Vehicles</li>
              <li>California Child Welfare Digital Services</li>
              <li>City of Los Angeles</li>
            </ul>
          </div>
          <div className='product-design'>
            <img
              alt=''
              className='case-studies--icon'
              src={productDesignIcon}
            />
            <label>Product & Design</label>
            <ul className='body'>
              <li>Defense Security Cooperation Agency</li>
              <li>U.S. Executive Office of the President</li>
              <li>U.S. House of Representatives</li>
              <li>Doctors Without Borders</li>
              <li>City and County of San Francisco Human Services Agency</li>
              <li>San Francisco Department of the Environment</li>
              <li>City of Los Angeles</li>
              <li>Southern Poverty Law Center</li>
            </ul>
          </div>
          <div className='security'>
            <img
              alt=''
              className='case-studies--icon'
              src={securityComplianceIcon}
            />
            <label>Security & Compliance</label>
            <ul className='body'>
              <li>Centers for Medicare and Medicaid Services</li>
              <li> Defense Security Cooperation Agency</li>
              <li>Federal Communications Commission</li>
              <li>U.S. Department of Veterans Affairs</li>
              <li>U.S. Department of Justice</li>
              <li>General Services Administration (data.gov)</li>
              <li>California Department of Technology</li>
            </ul>
          </div>
          <div className='data-services'>
            <img alt='' className='case-studies--icon' src={dataServicesIcon} />
            <label>Data Services</label>
            <ul className='body'>
              <li>U.S. Department of Agriculture</li>
              <li>State of North Dakota</li>
              <li>State of Rhode Island</li>
              <li>Georgia Governor’s Office of Student Achievement</li>
              <li>Centers for Medicare and Medicaid Services</li>
            </ul>
          </div>
          <div className='development'>
            <img
              alt=''
              className='case-studies--icon'
              src={workforceDevelopmentIcon}
            />
            <label>Workforce Development</label>
            <ul className='body'>
              <li>U.S. Department of Veterans Affairs</li>
              <li>U.S. Department of Housing and Urban Development</li>
              <li>U.S. Department of Energy</li>
              <li>U.S. Department of Homeland Security</li>
              <li>Federal Acquisitions Institute</li>
              <li>U.S. Citizenship and Immigration Services</li>
              <li>California Department of General Services</li>
              <li>California Department of Technology</li>
              <li>Transport Canada</li>
            </ul>
          </div>
        </div>
      </section>

      <PrimaryPageCTA
          title='Let’s build a public success story.'
          subtitle='Get in touch to start.'
      />
    </RedLayout>
  );
};
export default CaseStudyPage;
