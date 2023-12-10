import React from 'react';

import { Project } from '@/src/type';

import Image from '../Image';
import * as S from './styled';

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <S.Wrapper>
      <S.ImageSection>
        <Image alt='project-image' src={`${project.thumbnailUrl}`} />
      </S.ImageSection>

      <S.Content>
        <S.TechList>
          {project.techStack.map((tech, index) => (
            <S.Tech key={index}>{tech}</S.Tech>
          ))}
        </S.TechList>

        <S.Title>{project.title}</S.Title>
        <S.Description>{project.description}</S.Description>

        <S.ProjectLinkList>
          {Object.keys(project.links).map(
            (link, index) =>
              project.links[link as keyof typeof project.links] && (
                <S.ProjectLink key={index} target='_blank' href={project.links[link as keyof typeof project.links]}>
                  {link}
                </S.ProjectLink>
              ),
          )}
        </S.ProjectLinkList>
      </S.Content>
    </S.Wrapper>
  );
};

export default ProjectCard;
