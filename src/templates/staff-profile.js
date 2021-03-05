import React, { useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";

const StaffProfileTemplate = ({ data }) => {
  const staffProfile = data.allStrapiStaffProfile.nodes[0];
  return <pre>{JSON.stringify(staffProfile, null, 4)}</pre>;
};

export const query = graphql`
  query StaffProfileQuery($pagePath: String!) {
    allStrapiStaffProfile(filter: { Path: { eq: $pagePath } }) {
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

export default StaffProfileTemplate;
