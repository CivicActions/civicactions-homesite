import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description, image, article, isExternalImage }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);
  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata;

  // If the OG image is in the static folder, remove the first slash, 
  // if it is an external image, print the full image URL
  // if none of the above, use the default OG Image.
  let ogImage =
    image && !(isExternalImage) ? image.slice(1)
      : image && isExternalImage ? image
        : defaultImage;

  // If the OGImage is stored externally (eg. cover images in case studies), do not add the site url to the image path.
  let ogImagePath = image && isExternalImage ? ogImage : `${siteUrl}${ogImage}`

  const seo = {
    title: (`${title || defaultTitle} | CivicActions`),
    description: description || defaultDescription,
    image: ogImagePath,
    url: `${siteUrl}${pathname.slice(1)}`,
  };
};
export default SEO;

export const Head = () => (
  <>
    <title>{seo.title}</title>
    <meta name='description' content={seo.description} />
    <meta name='image' content={seo.image} />
    {seo.url && <meta property='og:url' content={seo.url} />}
    {(article ? true : null) && <meta property='og:type' content='article' />}
    {seo.title && <meta property='og:title' content={seo.title} />}
    {seo.description && (
      <meta property='og:description' content={seo.description} />
    )}
    {seo.image && <meta property='og:image' content={seo.image} />}
    <meta name='twitter:card' content='summary_large_image' />
    {twitterUsername && (
      <meta name='twitter:creator' content={twitterUsername} />
    )}
    {seo.title && <meta name='twitter:title' content={seo.title} />}
    {seo.description && (
      <meta name='twitter:description' content={seo.description} />
    )}
    {seo.image && <meta name='twitter:image' content={seo.image} />}
  </>
)

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
