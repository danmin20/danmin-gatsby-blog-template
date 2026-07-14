import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

type SeoProps = {
  description?: string;
  title: string;
  children?: React.ReactNode;
};

const Seo: React.FC<SeoProps> = ({ description, title, children }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author {
            name
            nickname
          }
          ogImage
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;

  return (
    <>
      <html lang='en' />
      <title>{title || site.siteMetadata.title}</title>
      <meta property='og:title' content={title} />
      <meta property='og:site_title' content={title} />
      <meta name='description' content={metaDescription} />
      <meta property='og:description' content={metaDescription} />
      <meta property='og:author' content={site.siteMetadata.author.name} />
      <meta property='og:author' content={site.siteMetadata.author.nickname} />
      <meta property='og:image' content={site.siteMetadata.ogImage} />
      <meta property='og:type' content='website' />
      {children}
    </>
  );
};

export default Seo;
