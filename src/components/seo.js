import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description, image, article }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);
  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata;

  const seo = {
    title: (`${title || defaultTitle} | CivicActions`),
    description: description || defaultDescription,
    image: image ? image : defaultImage,
    url: `${siteUrl.replace(/\/$/, '')}${pathname}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name='description' content={seo.description} />
      <meta name="image" property="og:image" content={seo.image} />
      {seo.url && <meta property='og:url' content={seo.url} />}
      <meta property='og:type' content={(article ? 'article' : 'website')} />
      {seo.title && <meta property='og:title' content={seo.title} />}
      {seo.description && (
        <meta property='og:description' content={seo.description} />
      )}
      <meta name='twitter:card' content='summary_large_image' />
      {twitterUsername && (
        <meta name='twitter:creator' content={twitterUsername} />
      )}
      {seo.title && <meta name='twitter:title' content={seo.title} />}
      {seo.description && (
        <meta name='twitter:description' content={seo.description} />
      )}
      {seo.image && <meta name='twitter:image' content={seo.image} />}
      <link rel="canonical" href={seo.url} />
    </>
  )
};

export default SEO;
SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`;
