import React from 'react';

import * as S from './styled';

type AboutTitleProps = {
  title: string;
};

const AboutTitle: React.FC<AboutTitleProps> = ({ title }) => {
  return (
    <S.Wrapper>
      <h2>{title}</h2>
    </S.Wrapper>
  );
};

export default AboutTitle;
