import { graphql } from 'gatsby';
import React from 'react';

import AdsenseInArticle from '@/src/components/AdsenseInArticle';
import BuyMeACoffee from '@/src/components/BuyMeACoffee';
import PostHeader from '@/src/components/PostHeader';
import PostNavigator from '@/src/components/PostNavigator';
import Seo from '@/src/components/Seo';
import Utterances from '@/src/components/Utterances';
import Layout from '@/src/layout';
import PostClass from '@/src/models/post';
import { Post, SiteMetadata } from '@/src/type';

import * as S from './styled';

type PostTemplateProps = {
  location: Location;
  data: { prev: Post; next: Post; cur: Post; site: { siteMetadata: SiteMetadata }; markdownRemark: Post };
};

const PostTemplate: React.FC<PostTemplateProps> = ({ location, data }) => {
  const curPost = new PostClass(data.cur);
  const prevPost = data.prev && new PostClass(data.prev);
  const nextPost = data.next && new PostClass(data.next);
  const utterancesRepo = data.site.siteMetadata.comments.utterances.repo;

  return (
    <Layout location={location}>
      <PostHeader post={curPost} />
      <AdsenseInArticle />
      <S.PostContent>
        <div className='markdown' dangerouslySetInnerHTML={{ __html: curPost.html }} />
      </S.PostContent>
      <AdsenseInArticle />
      <S.BuyMeACoffeeWrapper>
        <div>👇 도움이 되셨다면 👇</div>
        <BuyMeACoffee />
      </S.BuyMeACoffeeWrapper>
      <PostNavigator prevPost={prevPost} nextPost={nextPost} />
      <Utterances repo={utterancesRepo} path={curPost.slug} />
    </Layout>
  );
};

export default PostTemplate;

export const Head = ({ data }: { data: PostTemplateProps['data'] }) => (
  <Seo title={`개발자 단민 | ${data.cur.frontmatter.title}`} description={data.cur.excerpt} />
);

export const pageQuery = graphql`
  query ($slug: String, $nextSlug: String, $prevSlug: String) {
    cur: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt(pruneLength: 500, truncate: true)
      frontmatter {
        date(formatString: "YYYY.MM.DD")
        title
        categories
        emoji
      }
      fields {
        slug
      }
    }

    next: markdownRemark(fields: { slug: { eq: $nextSlug } }) {
      id
      html
      frontmatter {
        date(formatString: "YYYY.MM.DD")
        title
        categories
        emoji
      }
      fields {
        slug
      }
    }

    prev: markdownRemark(fields: { slug: { eq: $prevSlug } }) {
      id
      html
      frontmatter {
        date(formatString: "YYYY.MM.DD")
        title
        categories
        emoji
      }
      fields {
        slug
      }
    }

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
