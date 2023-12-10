import { graphql } from 'gatsby';
import React from 'react';

import FeaturedPostColumn from '../components/FeaturedPostColumn';
import MainBanner from '../components/MainBanner';
import Seo from '../components/Seo';
import Layout from '../layout';
import PostClass from '../models/post';
import { AllMarkdownRemark, SiteMetadata } from '../type';

type HomeProps = {
  data: {
    site: { siteMetadata: SiteMetadata };
    allMarkdownRemark: AllMarkdownRemark;
  };
  location: Location;
};

const Home: React.FC<HomeProps> = ({ location, data }) => {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => new PostClass(node));
  const featuredPosts = posts.filter((node) => node.categories.find((category) => category === 'featured'));
  const { author } = data.site.siteMetadata;

  const recentPosts = posts.slice(0, 3);

  const internPosts = featuredPosts.filter((post) => post.categories.find((category) => category === '인턴회고'));
  const livePosts = featuredPosts.filter((post) => post.categories.find((category) => category === '회고'));
  const experiencePosts = featuredPosts.filter((post) => post.categories.find((category) => category === 'Experience'));

  return (
    <Layout location={location}>
      <Seo title='개발자 단민' />
      <MainBanner author={author} />

      <FeaturedPostColumn title='Recent Posts' posts={recentPosts} fill={false} />
      <FeaturedPostColumn title='인턴만 다섯 번을 한 사람이 있다?' posts={internPosts} />
      <FeaturedPostColumn title='LIFE' posts={livePosts} />
      <FeaturedPostColumn title='EXPERIENCE' posts={experiencePosts} />
    </Layout>
  );
};

export default Home;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          excerpt(pruneLength: 500, truncate: true)
          frontmatter {
            categories
            title
            emoji
            date(formatString: "YYYY.MM.DD")
          }
          fields {
            slug
          }
        }
      }
    }

    site {
      siteMetadata {
        siteUrl
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
          legacyBlog {
            velog
            tistory
          }
        }
      }
    }
  }
`;
