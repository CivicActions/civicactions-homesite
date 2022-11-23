// import React from "react"
// import {graphql, useStaticQuery} from "gatsby"
// import Layout from "../layouts/red"
//
// const data = useStaticQuery(blogListQuery);
// export default class BlogList extends React.Component {
//   render() {
//
//     const posts = data.allStrapiPressReleases.nodes
//     return (
//       <Layout>
//         {posts.map(({ node }) => {
//           const title = node.Title
//           return <div key={node.id}>{title}</div>
//         })}
//       </Layout>
//     )
//   }
// }
//
// export const blogListQuery = graphql`
//   query blogListQuery($skip: Int!, $limit: Int!) {
//     allStrapiPressRelease(
//       sort: {order: DESC, fields: Date}
//       limit: $limit
//       skip: $skip
//     ) {
//         nodes {
//           Title
//           Path
//           Date
//           Short_Description
//           id
//         }
//
//     }
//
//   }
// `