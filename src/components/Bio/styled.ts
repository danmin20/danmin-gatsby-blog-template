import styled from '@emotion/styled';

import { MOBILE_MEDIA_QUERY } from '@/src/styles/const';

export const Wrapper = styled.div`
  width: 100%;
  font-family: GmarketSansLight;
  margin-bottom: 50px;

  @media ${MOBILE_MEDIA_QUERY} {
    line-height: 130%;
    font-size: 15px;
    margin-bottom: 30px;
    padding: 0 10px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Info = styled.div`
  strong {
    font-family: GmarketSansMedium;
  }
`;
