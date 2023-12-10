import { Link2Icon } from '@radix-ui/react-icons';
import React from 'react';

import { Timestamp } from '@/src/type';

import AboutTitle from '../AboutTitle';
import * as S from './styled';

type TimestampsProps = {
  title: string;
  timestamps: Timestamp[];
};

const Timestamps: React.FC<TimestampsProps> = ({ title, timestamps }) => {
  return (
    <S.Wrapper>
      <AboutTitle title={title} />
      <S.Content>
        {timestamps.map((timestamp, index) => (
          <S.Timestamp key={index}>
            <S.Date>{timestamp.date}</S.Date>
            <div>
              <S.Title>
                <S.TitleEn>{timestamp.en}</S.TitleEn>
                <S.TitleKr>
                  {timestamp.kr}
                  {'link' in timestamp && timestamp.link && (
                    <a href={timestamp.link} target='_blank'>
                      <Link2Icon className='link-icon' />
                    </a>
                  )}
                </S.TitleKr>
              </S.Title>
              <S.Info>{timestamp.info}</S.Info>
            </div>
          </S.Timestamp>
        ))}
      </S.Content>
    </S.Wrapper>
  );
};

export default Timestamps;
