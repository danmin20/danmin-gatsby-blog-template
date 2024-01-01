import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import kakaoIcon from '@/assets/kakao_icon.svg';
import tossIcon from '@/assets/toss_icon.svg';

import Image from '../Image';
import * as S from './styled';

const BuyMeACoffee: React.FC = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            remittances {
              toss {
                link
                qrCode
              }
              kakaopay {
                qrCode
              }
            }
          }
        }
      }
    `,
  );

  const remittance = site.siteMetadata.remittances;
  const { toss, kakaopay } = remittance;

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
                {toss.link && (
                  <S.List>
                    <div>토스 익명송금</div>
                    <a href={toss.link}>toss.me/danmin</a>
                  </S.List>
                )}
                <S.List>
                  <div>송금 QR</div>
                  <S.Qr style={{ width: 30 }}>
                    {kakaopay.qrCode && (
                      <div>
                        <img src={kakaoIcon} />
                        <Image alt='kakaopay' src={kakaopay.qrCode} />
                      </div>
                    )}
                    {toss.qrCode && (
                      <div>
                        <img src={tossIcon} />
                        <Image alt='toss' src={toss.qrCode} />
                      </div>
                    )}
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
