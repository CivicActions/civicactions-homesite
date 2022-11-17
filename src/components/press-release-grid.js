import '../sass/styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import ReactMarkdown from "react-markdown";

const PressReleaseGrid = ({ path, date, title, description }) => {
  // Will need to change the shortDescription when we add this field in Strapi
  const shortDescription = description.substring(0, 100);
  return (
    <div className='press-release--item'>
      <span><strong>New Release: {date}</strong></span>
      <Link to={path}><h2 className='h4'>{title}</h2></Link>
      <ReactMarkdown className='body' children={shortDescription} />
    <hr/>
    </div>
  );
};

export default PressReleaseGrid;

PressReleaseGrid.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};
