import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { hoverUnderline, MOBILE_MEDIA_QUERY } from '@/src/styles/const';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding-bottom: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray20};
  margin: 40px 0;
  word-break: keep-all;
`;

export const Emoji = styled.div`
  font-size: 78px;
  margin-bottom: 20px;
`;

export const Info = styled.div`
  display: flex;
  font-size: 15px;
  color: ${({ theme }) => theme.color.gray80};
  font-family: GmarketSansLight;
`;

export const Categories = styled.div`
  margin-bottom: 5px;
  font-size: 15px;
`;

export const Category = styled(Link)`
  margin-right: 4px;
  color: ${({ theme }) => theme.color.gray60};
  ${({ theme }) => hoverUnderline(theme)};
  &:after {
    background-color: ${({ theme }) => theme.color.gray60};
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 6px;
  line-height: 1.3;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 25px;
  }
`;
