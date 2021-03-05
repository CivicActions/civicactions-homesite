import React, { useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";

const Team = ({ data }) => {
  return <pre>{JSON.stringify(data, null, 4)}</pre>;
};

export const query = graphql`
  {
    allStrapiStaffProfile {
      nodes {
        id
        Name
        Pronunciation
        Personal_Pronouns
        Role
        Path
        Location
        Quote
        Social {
          Title
          Url
        }
        Specialty {
          Specialty
          id
        }
        Body
      }
    }
  }
`;

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
