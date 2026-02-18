import React from 'react';
import { graphql } from 'gatsby';
import GeneralLayout from '../layouts/general';

const StaffProfileTemplate = ({ data }) => {

  const staffProfile = data.allStrapiStaffProfile.nodes[0];
  return (
    <GeneralLayout>
      <pre>{JSON.stringify(staffProfile, null, 4)}</pre>
    </GeneralLayout>
  );
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
        Body {
          data {
            Body
          }
        }
      }
    }
  }
`;

export default StaffProfileTemplate;
