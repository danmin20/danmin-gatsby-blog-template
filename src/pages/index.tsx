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

  const { author, featured } = data.site.siteMetadata;

  const recentPosts = posts.slice(0, 3);

  const featuredPosts = featured.map(({ title, category }) => {
    const filteredPosts = posts.filter((post) => post.categories.find((c) => c === category));
    return { title, posts: filteredPosts };
  });

  return (
    <Layout location={location}>
      <Seo title='개발자 단민' />
      <MainBanner author={author} />

      <FeaturedPostColumn title='Recent Posts' posts={recentPosts} fill={false} />

      {featuredPosts.map(({ title, posts }, i) => (
        <FeaturedPostColumn key={i} title={title} posts={posts} />
      ))}
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
          dropdown {
            velog
            tistory
          }
        }
        featured {
          title
          category
        }
      }
    }
  }
`;
