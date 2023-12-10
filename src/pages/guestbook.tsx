import { graphql } from 'gatsby';
import React from 'react';

import GuestbookBanner from '../components/GuestbookBanner';
import Seo from '../components/Seo';
import Utterances from '../components/Utterances';
import Layout from '../layout';
import { SiteMetadata } from '../type';

type GuestbookProps = {
  data: {
    site: { siteMetadata: SiteMetadata };
  };
  location: Location;
};

const Guestbook: React.FC<GuestbookProps> = ({ location, data }) => {
  const utterancesRepo = data.site.siteMetadata.comments.utterances.repo;

  return (
    <Layout location={location}>
      <Seo title='개발자 단민 | Guestbook' />
      <GuestbookBanner />
      <Utterances repo={utterancesRepo} path='guestbook' />
    </Layout>
  );
};

export default Guestbook;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        comments {
          utterances {
            repo
          }
        }
      }
    }
  }
`;
