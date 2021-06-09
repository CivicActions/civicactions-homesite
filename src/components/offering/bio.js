import React from 'react'
import PropTypes from 'prop-types';

import linkedinIcon from "../../files/icons/linkedin.svg";

const Bio = ({ member }) => {
  let singleMember = member ? member.map((single) => {

    let { id, image, Name, Role, Body, Linkedin } = single
    return (
      <div key={id}>
        <img className='staff-image' src={image[0].url} alt={image[0].alternativeText} />
        <h2 className='h3 staff-name'>{Name}</h2>
        <a className='linkedin-icon' href={Linkedin}><img src={linkedinIcon} alt=''/></a>
        <p className='body staff-role'>{Role}</p>
        <div><p className='body staff-body'>{Body}</p></div>
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
