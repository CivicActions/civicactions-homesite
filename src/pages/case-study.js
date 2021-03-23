import React, { useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";

const CaseStudies = ({ data }) => {

};

export default CaseStudies;

// New_Style {
//     Preview_Image {
//       childImageSharp {
//         fixed(height: 150, width: 150) {
//           ...GatsbyImageSharpFixed_withWebp_noBase64
//         }
//       }
//     }
//   }
//   Old_Style {
//     Preview_Image {
//       childImageSharp {
//         fixed(height: 300, width: 300) {
//           ...GatsbyImageSharpFixed_withWebp_noBase64
//         }
//       }
//     }
//   }
