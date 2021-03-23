import React, { useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";

const Team = ({ data }) => {
  return <h3>Team</h3>;
};

export default Team;

// Image {
//     childImageSharp {
//       fixed(height: 144, width: 144) {
//         ...GatsbyImageSharpFixed_withWebp_noBase64
//       }
//     }
//   }
//   Audio {
//     publicURL
//   }
