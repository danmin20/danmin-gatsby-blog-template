import styled from '@emotion/styled';

import { MOBILE_MEDIA_QUERY } from '@/src/styles/const';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

export const Title = styled.div<{ fill: 'true' | 'false' }>`
  font-size: 20px;
  width: fit-content;
  padding: 10px;
  background-color: ${({ theme, fill }) => (fill === 'true' ? theme.color.black40 : theme.color.white100)};
  color: ${({ theme, fill }) => (fill === 'true' ? theme.color.white100 : theme.color.black40)};
  margin-bottom: 25px;
  border: 1px solid ${({ theme, fill }) => (fill === 'true' ? theme.color.white100 : theme.color.black40)};

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 17px;
    padding: 8px 10px;
  }
`;
