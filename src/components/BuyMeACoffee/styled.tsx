import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { MOBILE_MEDIA_QUERY } from '@/src/styles/const';

export const Wrapper = styled.div``;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const shake = keyframes`
  0% {
    transform: translateX(0) rotate(8deg);
  }
  50% {
    transform: translateX(4px) rotate(-3deg);
  }

  100% {
    transform: translateX(0) rotate(6deg);
  }
`;

export const Button = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #3c3d40;
  border-radius: 5px;
  position: relative;
  width: 260px;
  height: 50px;
  border-radius: 10px;
  &:hover {
    opacity: 0.9;
    @media ${MOBILE_MEDIA_QUERY} {
      opacity: 1;
    }
  }
  &:active {
    opacity: 0.9;
  }
  @media ${MOBILE_MEDIA_QUERY} {
    width: 180px;
    height: 40px;
  }
`;

export const Text = styled.div`
  display: flex;
  position: absolute;
  font-size: 30px;
  text-shadow: 2px 2px black;
  font-family: 'Anton', sans-serif;
  font-weight: 800;
  top: 12px;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 20px;
    top: 11px;
  }

  p {
    &:nth-of-type(1n) {
      transform: rotate(8deg);
      animation: ${shake} 0.5s ease infinite;
      color: #f7ea25;
    }
    &:nth-of-type(2n) {
      transform: rotate(5deg);
      animation: ${shake} 0.5s ease-out infinite reverse;
      color: #fff;
    }
    &:nth-of-type(3n) {
      transform: rotate(-2deg);
      animation: ${shake} 0.5s 0.1s ease infinite;
    }
    &:nth-of-type(4n) {
      transform: rotate(-5deg);
      animation: ${shake} 0.5s ease-in infinite reverse;
    }
  }
`;

export const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.white100}, 0.4;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  animation: ${fadeIn} 0.5s ease both;
  backdrop-filter: blur(5px);
`;

export const Modal = styled.div`
  background-color: ${({ theme }) => theme.color.white100};
  border-radius: 15px;
  box-shadow: 0 5px 30px 0 rgb(0 0 0 / 0.2);
  animation: ${fadeIn} 0.5s ease both;
`;

export const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  padding: 30px;
`;

export const Content = styled.div`
  padding: 30px 40px;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 210px;

  & > a {
    color: #1b64da;
  }

  & > div:first-of-type {
    font-weight: bold;
  }
`;

export const Qr = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;

    & > img:first-of-type {
      width: 30px;
    }
    & > img:last-child {
      width: 100px;
    }
  }
`;
