import '../sass/styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const CaseStudyTeaser = ({ cases }) => {
  return cases.map((item, index) => {
    const { Title, Client_Name, Sort_Order, Summary, id, Cover_Image, Path } = item;
    return (
        <Link to={Path}>
          <div key={id} className={`wrapper--case-study--teaser ${Sort_Order} `}>
            {Cover_Image.url ?
                <img src={Cover_Image.url} alt={Cover_Image.alternativeText} /> : <div className='no-img-teaser'></div>
            }

            <div className='teaser-content'>
              <div className='title-wrapper'>
                <span className='client-name'>{Client_Name}</span>
                <h2 className='h3'>{Title}</h2>
              </div>
            </div>
            <p aria-label='summary' className='summary body'>
              {Summary}
            </p>
          </div></Link>
    );
  });
};

export default CaseStudyTeaser;

CaseStudyTeaser.propTypes = {
  cases: PropTypes.array
};
