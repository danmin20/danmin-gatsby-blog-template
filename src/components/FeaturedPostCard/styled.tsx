import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { contentMaxWidth, MOBILE_MEDIA_QUERY } from '@/src/styles/const';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

export const PostCard = styled(Link)`
  display: flex;
  height: 100%;
  width: 100%;
  max-width: ${contentMaxWidth};
  border-radius: 10px;
  cursor: pointer;
  gap: 15px;
  align-items: center;
  padding-right: 15px;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray10};
    @media ${MOBILE_MEDIA_QUERY} {
      background-color: transparent;
    }
  }

  @media ${MOBILE_MEDIA_QUERY} {
    min-height: 50px;
    &:active {
      background-color: ${({ theme }) => theme.color.gray10};
    }
  }
`;

export const Emoji = styled.div`
  font-size: 40px;
  background-color: ${({ theme }) => theme.color.gray10};
  border-radius: 50%;
  width: 60px;
  min-width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
  box-sizing: border-box;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 30px;
    width: 50px;
    min-width: 50px;
    height: 50px;
  }
`;

export const Title = styled.div`
  font-size: 18px;
  word-break: break-all;
  line-height: 120%;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    word-break: break-word;
    line-height: 120%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const Date = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.color.gray60};
  font-family: GmarketSansLight;
  margin-top: 3px;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 10px;
    margin-left: auto;
  }
`;
