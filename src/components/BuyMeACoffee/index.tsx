import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import kakaoIcon from '@/assets/kakao_icon.svg';
import kakaoQr from '@/assets/kakao_qr.svg';
import tossIcon from '@/assets/toss_icon.svg';
import tossQr from '@/assets/toss_qr.svg';

import * as S from './styled';

const BuyMeACoffee: React.FC = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [html, setHtml] = useState<HTMLHtmlElement | null>(null);

  useEffect(() => {
    setHtml(document.querySelector('html'));
  }, []);

  const openModal = () => {
    setIsModalOpened(true);
    html?.classList.add('scroll-locked');
  };

  const closeModal = () => {
    setIsModalOpened(false);
    html?.classList.remove('scroll-locked');
  };

  return (
    <>
      <S.Button onClick={openModal}>
        <S.Text>
          {'BuyMeACoffee☕️'.split('').map((char, index) => (
            <p key={index}>{char}</p>
          ))}
        </S.Text>
      </S.Button>

      {isModalOpened &&
        createPortal(
          <S.ModalBackground onClick={closeModal}>
            <S.Modal>
              <S.Title>Buy Me A Coffee ☕️</S.Title>
              <S.Content>
                <S.List>
                  <div>⓵ 토스 익명송금</div>
                  <a href='https://toss.me/danmin'>toss.me/danmin</a>
                </S.List>
                <S.List>
                  <div>② 송금 QR</div>
                  <S.Qr style={{ width: 30 }}>
                    <div>
                      <img src={kakaoIcon} />
                      <img src={kakaoQr} />
                    </div>
                    <div>
                      <img src={tossIcon} />
                      <img src={tossQr} />
                    </div>
                  </S.Qr>
                </S.List>
              </S.Content>
            </S.Modal>
          </S.ModalBackground>,
          document.body,
        )}
    </>
  );
};

export default BuyMeACoffee;
