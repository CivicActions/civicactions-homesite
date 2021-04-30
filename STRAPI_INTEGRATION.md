## Single page integration

Use Gatsby's graphql to pull the data from the CMS i.e:

```js
export const query = graphql`
  query PressReleaseQuery($pagePath: String!) {
    allStrapiPressRelease(
      filter: { Path: { eq: $pagePath } }
      sort: { fields: Date, order: DESC }
    ) {
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
```

Parse the queried data using Gatsby's `useStaticQuery`

```js
import { graphql, useStaticQuery } from 'gatsby';
const Page = () => {
  const data = useStaticQuery(query);
  return (
  <pre>{JSON.stringify(data, null, 4)}</pre>
  );
};

`;
```

## Multi-page or Template Page integration using page generation

Import the path of the Content Type on the graphql query in the `gatsby-node.js` file

```js
const result = await graphql(
  `
    {
      pressReleases: allStrapiPressRelease {
        edges {
          node {
            Path
          }
        }
      }
    }
  `
);
`;
```

Parse the queried data, import the desired template and use Gatsby's createPage function to dynamically create the pages, pass the Strapi page path on the context param so it can be used within the template page to refine the query. i.e:

```js
const pressReleases = result.data.pressReleases.edges;
const PressReleaseTemplate = require.resolve(
  './src/templates/press-release.js'
);
pressReleases.forEach((release, index) => {
  createPage({
    path: `${release.node.Path}`,
    component: PressReleaseTemplate,
    context: {
      pagePath: release.node.Path,
    },
  });
});
```

Now, simply refine the query on the template page to point to the correct CMS record by filtering the query with the path param provided on the previous step

```js
export const query = graphql`
  query PressReleaseQuery($pagePath: String!) {
    allStrapiPressRelease(
      filter: { Path: { eq: $pagePath } }
      sort: { fields: Date, order: DESC }
    ) {
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
```

The final step is to parse the queried data. i.e:

```js
const PressReleaseTemplate = ({ data }) => {
  const pressRelease = data.allStrapiPressRelease.nodes[0];
  return <pre>{JSON.stringify(pressRelease, null, 4)}</pre>;
};
```
