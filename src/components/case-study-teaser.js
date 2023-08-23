import '../sass/styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const CaseStudyTeaser = ({ cases }) => {
  return cases.map((item) => {
    const { Title, Client_Name, Sort_Order, Summary, id, Cover_Image, Path } = item;
    return (
      <Link key={id} to={Path}>
        <div className={`wrapper--case-study--teaser ${Sort_Order} `}>
          <GatsbyImage image={getImage(Cover_Image.localFile.childImageSharp.gatsbyImageData)} aria-label={Cover_Image.alternativeText} />
          <div className='teaser-content'>
            <div className='title-wrapper'>
              <span className='client-name'>{Client_Name}</span>
              <h2 className='h3'>{Title}</h2>
            </div>
          </div>
          <p className='summary body'>
            {Summary}
          </p>
        </div>
      </Link>
    );
  });
};

export default CaseStudyTeaser;

CaseStudyTeaser.propTypes = {
  cases: PropTypes.array
};
