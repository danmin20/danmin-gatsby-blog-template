import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React, { useMemo } from 'react';

type ImageNode = {
  childImageSharp?: {
    gatsbyImageData: IGatsbyImageData;
  };
  publicURL: string;
  extension: string;
  relativePath: string;
};

const Image = ({ src, ...rest }: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { sourceInstanceName: { eq: "assets" }, extension: { ne: "svg" } }) {
        edges {
          node {
            relativePath
            extension
            publicURL
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
      svgs: allFile(filter: { sourceInstanceName: { eq: "assets" }, extension: { eq: "svg" } }) {
        edges {
          node {
            relativePath
            extension
            publicURL
          }
        }
      }
    }
  `);

  const match = useMemo(
    () => [...data.images.edges, ...data.svgs.edges].find(({ node }: { node: ImageNode }) => src === node.relativePath),
    [data, src],
  );

  if (!match) return null;

  const {
    node: { childImageSharp, publicURL },
  }: { node: ImageNode } = match;

  if (!childImageSharp) {
    return <img src={publicURL} alt={publicURL} {...rest} />;
  }

  return <GatsbyImage image={childImageSharp.gatsbyImageData} alt={publicURL} />;
};

export default Image;
