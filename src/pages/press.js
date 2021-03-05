import React, { useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";

const Press = ({ data }) => {
  return <pre>{JSON.stringify(data, null, 4)}</pre>;
};

export const query = graphql`
  {
    allStrapiPress(sort: { fields: Date, order: DESC }) {
      nodes {
        Body
        Date
        Link
        Link_Text
        Path
        Publication
        Title
      }
    }
  }
`;

export default Press;
