import { css, Theme } from '@emotion/react';

export const contentMaxWidth = '720px';

export const MOBILE_MAX_WIDTH = 768;
export const MOBILE_MEDIA_QUERY = `screen and (max-width: ${MOBILE_MAX_WIDTH}px)`;

export const lightTheme: Theme = {
  color: {
    black100: '#0F1010',
    black60: '#2C2D2E',
    black40: '#3C3D40',
    gray80: '#808388',
    gray60: '#989BA0',
    gray40: '#C0C5C9',
    gray20: '#EEEFF1',
    gray10: '#F7F8FA',
    white100: '#FFFFFF',
  },
};
export const darkTheme: Theme = {
  color: {
    black100: '#e6e6e6',
    black60: '#F7F8FA',
    black40: '#EEEFF1',
    gray80: '#b9bbc5',
    gray60: '#8e8f97',
    gray40: '#626368',
    gray20: '#3C3D40',
    gray10: '#2C2D2E',
    white100: '#232326',
  },
};

export const hoverUnderline = (theme: Theme) => css`
  display: inline-block;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: -1px;
    left: 0;
    background-color: ${theme.color.black100};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
    @media ${MOBILE_MEDIA_QUERY} {
      transform: scaleX(0);
    }
  }
`;
