import styled from '@emotion/styled';

import { contentMaxWidth, MOBILE_MEDIA_QUERY } from '@/src/styles/const';

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const CategoryTitle = styled.div`
  width: fit-content;
  margin-bottom: 15px;
  font-size: 30px;
  text-align: center;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 25px;
  }
`;

export const CategorySubtitle = styled.div`
  padding-bottom: 10px;
  font-size: 20px;
  text-align: center;
  font-family: GmarketSansLight;
`;

export const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  top: 0px;
  width: 100%;
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: ${contentMaxWidth} + 40px;
  margin-bottom: 12px;
  gap: 24px;
  overflow-y: hidden;
  overflow-x: scroll;
  @media ${MOBILE_MEDIA_QUERY} {
    justify-content: flex-start;
  }
  padding: 0 15px;
`;

export const Tab = styled.div<{ isSelected: 'true' | 'false' }>`
  font-size: 17px;
  cursor: pointer;
  line-height: 50px;
  color: ${({ isSelected, theme }) => (isSelected === 'true' ? theme.color.black100 : theme.color.gray60)};
`;

export const PostCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
