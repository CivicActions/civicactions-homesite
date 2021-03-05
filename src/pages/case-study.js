import React, { useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";

const CaseStudies = ({ data }) => {
  return <pre>{JSON.stringify(data, null, 4)}</pre>;
};

export const query = graphql`
  {
    allStrapiCaseStudy(filter: { Featured: { eq: "True" } }) {
      nodes {
        id
        Path
        Style
        Title
        Client_Name
      }
    }
  }
`;

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
