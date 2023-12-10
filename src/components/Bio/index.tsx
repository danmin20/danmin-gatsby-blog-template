import * as React from 'react';

import { Bio as BioType } from '@/src/type';
import { capitalize } from '@/src/utils/capitalize';

import * as S from './styled';

type BioProps = {
  bio: BioType;
};

const Bio: React.FC<BioProps> = ({ bio }) => {
  return (
    <S.Wrapper>
      <S.InfoWrapper>
        {Object.entries(bio).map(([key, value]) => (
          <S.Info key={key}>
            <strong>{capitalize(key)}.</strong> {value}
          </S.Info>
        ))}
      </S.InfoWrapper>
    </S.Wrapper>
  );
};

export default Bio;
