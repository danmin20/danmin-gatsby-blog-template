import { useState } from 'react';
import ReactRotatingText from 'react-rotating-text';

import { Author } from '@/src/type';

import BuyMeACoffee from '../BuyMeACoffee';
import Image from '../Image';
import * as S from './styled';

type MainBannerProps = {
  author: Author;
};

const MainBanner: React.FC<MainBannerProps> = ({ author }) => {
  const { stack, social, name, nickname, legacyBlog } = author;

  const [isDropdownOpened, setIsDropdownOpened] = useState(false);

  return (
    <S.Wrapper>
      <S.IntroWrapper>
        <S.Title>
          안녕하세요!
          <br />
          <strong>
            <ReactRotatingText items={stack} />
          </strong>
          <span>를 좋아하는</span>
          <br />
          개발자{' '}
          <strong>
            <ReactRotatingText items={[name, nickname]} />
          </strong>
          입니다.
        </S.Title>
        <Image alt='thumbnail' src='thumbnail.png' />
        <S.SocialWrapper>
          {Object.keys(social).map(
            (link, index) =>
              social[link as keyof typeof social] && (
                <S.SocialButton key={index} target='_blank' href={social[link as keyof typeof social]}>
                  {link}
                </S.SocialButton>
              ),
          )}
          {/* space-between을 위한 빈 div */}
          <div />
          <S.LegacyBlogButton onMouseLeave={() => setIsDropdownOpened(false)}>
            <div onMouseEnter={() => setIsDropdownOpened(true)}>legacy blogs</div>
            {isDropdownOpened && (
              <S.Dropdown>
                {Object.keys(legacyBlog).map(
                  (link, index) =>
                    legacyBlog[link as keyof typeof legacyBlog] && (
                      <S.SocialButton key={index} target='_blank' href={legacyBlog[link as keyof typeof legacyBlog]}>
                        {link}
                      </S.SocialButton>
                    ),
                )}
              </S.Dropdown>
            )}
          </S.LegacyBlogButton>
        </S.SocialWrapper>
      </S.IntroWrapper>

      <S.BuyMeACoffeeWrapper>
        <BuyMeACoffee />
      </S.BuyMeACoffeeWrapper>
    </S.Wrapper>
  );
};

export default MainBanner;
