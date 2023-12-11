import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import React from 'react';

import ProjectCard from '../components/ProjectCard';
import Seo from '../components/Seo';
import Layout from '../layout';
import { MOBILE_MEDIA_QUERY } from '../styles/const';
import { SiteMetadata } from '../type';

type PlaygroundProps = {
  data: {
    site: { siteMetadata: SiteMetadata };
  };
  location: Location;
};

const Playground: React.FC<PlaygroundProps> = ({ location, data }) => {
  const metaData = data.site.siteMetadata;
  const { projects } = metaData;

  return (
    <Layout location={location}>
      <Seo title='개발자 단민 | Playground' />
      <Title>Enjoying making fun things</Title>
      <ProjectCardsWrapper>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </ProjectCardsWrapper>
    </Layout>
  );
};

export default Playground;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        projects {
          title
          description
          techStack
          thumbnailUrl
          links {
            post
            github
            demo
            googlePlay
            appStore
          }
        }
      }
    }
  }
`;

const Title = styled.div`
  font-size: 20px;
  margin-top: 50px;
  font-weight: 800;
`;

const ProjectCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 29px;
  margin-top: 60px;
  row-gap: 64px;
  @media ${MOBILE_MEDIA_QUERY} {
    display: flex;
    flex-direction: column;
    gap: 26px;
    margin-top: 26px;
  }
`;
