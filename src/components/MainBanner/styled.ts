import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { hoverUnderline, MOBILE_MEDIA_QUERY } from '@/src/styles/const';

const blinkingCursor = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin: 130px 0;
  font-family: GmarketSansLight;

  .react-rotating-text-cursor {
    animation: ${blinkingCursor} 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s infinite;
  }

  @media ${MOBILE_MEDIA_QUERY} {
    padding: 0 10px;
    margin-top: 80px;
    margin-bottom: 150px;
  }

  .gatsby-image-wrapper {
    position: absolute;
    right: 30px;
    top: -100px;
    width: 300px;
    @media ${MOBILE_MEDIA_QUERY} {
      position: absolute;
      right: 0;
      top: -20px;
      width: 100px;
    }
  }
`;

export const IntroWrapper = styled.div`
  white-space: nowrap;
  display: flex;
  justify-content: space-between;
  position: relative;
  font-size: 40px;
  line-height: 1.2;

  @media ${MOBILE_MEDIA_QUERY} {
    flex-direction: column;
  }

  strong {
    display: inline-block;
    font-family: GmarketSansMedium;
    .react-rotating-text-cursor {
      font-family: GmarketSansLight;
      font-size: 40px;

      @media ${MOBILE_MEDIA_QUERY} {
        font-size: 27px;
      }
    }
  }

  .react-rotating-text-cursor {
    animation: ${blinkingCursor} 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s infinite;
  }
`;

export const Title = styled.p`
  width: 100%;

  .react-rotating-text-cursor {
    font-size: 50px;
    line-height: 35px;
  }

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 27px;

    .react-rotating-text-cursor {
      font-size: 27px;
      line-height: 27px;
    }
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  @media ${MOBILE_MEDIA_QUERY} {
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 15px;
    margin-top: 10px;
  }
`;

export const SocialButton = styled.a`
  color: ${({ theme }) => theme.color.black100};
  font-size: 18px;
  ${({ theme }) => hoverUnderline(theme)};
`;

export const DropdownButton = styled.div`
  color: ${({ theme }) => theme.color.black100};
  font-size: 18px;
  position: absolute;
  height: 100px;
  bottom: -100px;
  & > div:first-of-type {
    cursor: pointer;
    ${({ theme }) => hoverUnderline(theme)};
  }
  @media ${MOBILE_MEDIA_QUERY} {
    left: 0px;
    align-items: flex-start;
    bottom: -110px;
  }
`;

export const Dropdown = styled.div`
  margin-top: 5px;
  position: absolute;
  gap: 2px;
  display: flex;
  flex-direction: column;
  top: 25px;
  right: 0;
  align-items: flex-end;
  z-index: 30;
  @media ${MOBILE_MEDIA_QUERY} {
    left: 0px;
    align-items: flex-start;
  }
`;

export const BuyMeACoffeeWrapper = styled.div`
  position: absolute;
  top: 300px;
  left: 0;
  z-index: 0;

  @media ${MOBILE_MEDIA_QUERY} {
    top: 270px;
    right: 0;
    left: auto;
  }
`;
