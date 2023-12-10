import styled from '@emotion/styled';

import { hoverUnderline, MOBILE_MEDIA_QUERY } from '@/src/styles/const';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.color.gray10};
  width: 381px;
  height: 317px;

  @media ${MOBILE_MEDIA_QUERY} {
    border-radius: 20px;
    width: 300px;
    height: 250px;
  }
`;

export const ImageSection = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  border-radius: 24px 24px 0 0;
  width: 100%;
  height: 216px;
  @media ${MOBILE_MEDIA_QUERY} {
    height: 188.74px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  @media ${MOBILE_MEDIA_QUERY} {
    padding: 21.4px 19.89px 24.02px 20.77px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  margin-top: 10px;
  font-weight: 600;
`;

export const Description = styled.div`
  margin-top: 5px;
`;

export const ProjectLinkList = styled.div`
  display: flex;
  margin-left: auto;
  gap: 10px;
  margin-top: 5px;
`;

export const ProjectLink = styled.a`
  font-size: 12px;
  ${({ theme }) => hoverUnderline(theme)};
`;

export const TechList = styled.div`
  display: flex;
  gap: 5px;
`;

export const Tech = styled.div`
  font-size: 10px;
  color: ${({ theme }) => theme.color.white100};
  background-color: ${({ theme }) => theme.color.black60};
  padding: 3px 8px;
  border-radius: 5px;
  margin-top: -10px;
`;
