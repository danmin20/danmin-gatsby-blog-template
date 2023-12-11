import { graphql } from 'gatsby';
import React from 'react';

import Bio from '../components/Bio';
import MainBanner from '../components/MainBanner';
import Seo from '../components/Seo';
import Timestamps from '../components/Timestamps';
import Layout from '../layout';
import { SiteMetadata, Timestamp } from '../type';

type AboutProps = {
  data: {
    site: { siteMetadata: SiteMetadata };
  };
  location: Location;
};

const About: React.FC<AboutProps> = ({ location, data }) => {
  const metaData = data.site.siteMetadata;
  const { author, timestamps } = metaData;

  const stamps = timestamps.reduce((acc, cur) => {
    return {
      ...acc,
      [cur.category]: [...(acc[cur.category] || []), cur],
    };
  }, {} as Record<string, Timestamp[]>);

  return (
    <Layout location={location}>
      <Seo title='개발자 단민 | About' />
      <MainBanner author={author} />
      <Bio bio={author.bio} />

      {Object.keys(stamps).map((key) => (
        <Timestamps key={key} title={key} timestamps={stamps[key]} />
      ))}
    </Layout>
  );
};

export default About;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        language
        author {
          name
          nickname
          stack
          bio {
            email
            residence
            bachelorDegree
          }
          social {
            github
            linkedIn
            resume
          }
          dropdown {
            velog
            tistory
          }
        }
        timestamps {
          category
          date
          en
          kr
          info
          link
        }
      }
    }
  }
`;
