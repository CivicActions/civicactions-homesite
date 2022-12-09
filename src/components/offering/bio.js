import React from 'react'
import PropTypes from 'prop-types';

import linkedinIcon from "../../files/icons/linkedin.svg";
import linkedinIconBlue from "../../files/icons/linkedin-blue.svg";

const Bio = ({ member }) => {
  let singleMember = member ? member.map((single) => {

    let { id, image, Name, Role, Body, Linkedin } = single
    return (
      <div key={id}>
        <div className='staff-details--wrapper'><div className='staff-image--wrapper'>
        <img className='staff-image' src={image[0].url} alt={image[0].alternativeText} /></div>
        <div className='staff-info--wrapper'>
        <h1 className='h3 staff-name'>{Name}</h1>
          <a className='linkedin-icon' href={Linkedin} aria-label={`linkedin profile for ${Name}`}>
              <img className='black-icon' alt='black linkedin icon' src={linkedinIcon}/>
              <img className='blue-icon' alt='blue linkedin icon' src={linkedinIconBlue}/>
          </a>
          <p className='body staff-role'>{Role}</p></div></div>
        <div className='staff-body--wrapper'><p className='body staff-body'>{Body}</p></div>
      </div>
    )
  }) : null

  return singleMember

}

export default Bio;

Bio.propTypes = {
  id: PropTypes.string,
  image: PropTypes.any,
  Name: PropTypes.string,
  Role: PropTypes.string,
  Body: PropTypes.string,
  Linked: PropTypes.string,
};
