import styled from '@emotion/styled';

import { MOBILE_MEDIA_QUERY } from '@/src/styles/const';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
  font-family: GmarketSansLight;
  white-space: nowrap;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 15px;
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 0 10px;
`;

export const Timestamp = styled.div`
  display: flex;
  justify-items: center;
  width: 100%;
  margin-left: 5px;
  padding: 10px 0;
  border-left: 1px solid ${({ theme }) => theme.color.gray40};

  &:first-of-type {
    padding-top: 7px;
  }

  &:last-child {
    padding-bottom: 7px;
  }

  &::before {
    position: relative;
    left: -1px;
    content: '';
    align-self: center;
    width: 5px;
    height: 5px;
    background-color: ${({ theme }) => theme.color.white100};
    border-radius: 5px;
    transform: translatex(-50%);
    border: 1px solid ${({ theme }) => theme.color.gray40};
  }
`;

export const Date = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  width: 200px;
  color: ${({ theme }) => theme.color.gray80};
  align-self: center;

  @media ${MOBILE_MEDIA_QUERY} {
    width: 100px;
    min-width: 100px;
    white-space: pre-line;
    line-height: 120%;
  }
`;

export const Title = styled.div`
  display: flex;
  line-height: 16px;
  a {
    margin-left: 5px;
  }

  @media ${MOBILE_MEDIA_QUERY} {
    flex-direction: column;
  }
`;

export const TitleEn = styled.div`
  font-family: GmarketSansMedium;
  font-size: 16px;
  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 13px;
  }
`;

export const TitleKr = styled.div`
  font-size: 13px;
  margin-left: 5px;
  display: flex;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 10px;
    margin-left: 0;
    .link-icon {
      width: 10px;
    }
  }
`;

export const Info = styled.div`
  margin-top: 5px;
  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 10px;
    margin-top: 3px;
  }
`;
