import '../sass/styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby-link';
import ReactMarkdown from "react-markdown";

const PressReleaseGrid = ({ path, date, title, description, id, first, last }) => {
  return (
    <div className={`press-release--item${first ? ' first' : ''}${last ? ' last' : ''}`} key={id}>
      <span>News Release: {date}</span>
      <h2>{title}</h2>
      <ReactMarkdown className='body' children={description} />
      <p className='body'>Full Story: <Link to={path}>{title}</Link></p>
    </div>
  );
};

export default PressReleaseGrid;

PressReleaseGrid.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  first: PropTypes.bool,
  last: PropTypes.bool
};
