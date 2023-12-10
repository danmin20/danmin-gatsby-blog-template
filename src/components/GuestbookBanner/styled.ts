import styled from '@emotion/styled';

import { MOBILE_MEDIA_QUERY } from '@/src/styles/const';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 70px;
  padding-bottom: 30px;
  font-size: 18px;
  gap: 10px;
  & > div:first-of-type {
    font-size: 30px;
  }
  @media ${MOBILE_MEDIA_QUERY} {
    padding-top: 50px;
    padding-bottom: 20px;
    font-size: 15px;
    & > div:first-of-type {
      font-size: 27px;
    }
  }
`;
