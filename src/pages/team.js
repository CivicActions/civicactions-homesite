import '../sass/styles.scss';
import React from 'react';
import GeneralLayout from '../layouts/general';
import { graphql, useStaticQuery } from 'gatsby';

const TeamPage = () => {
  const data = useStaticQuery(query);
  return (
    <GeneralLayout>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </GeneralLayout>
  );
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

export default TeamPage;
