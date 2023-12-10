import React from 'react';

import PostClass from '@/src/models/post';

import * as S from './styled';

type FeaturedPostCardProps = {
  post: PostClass;
};

const FeaturedPostCard: React.FC<FeaturedPostCardProps> = ({ post }) => {
  const { id, slug, title, date, emoji } = post;

  return (
    <S.Wrapper>
      <S.PostCard key={id} to={slug}>
        {emoji && <S.Emoji>{emoji}</S.Emoji>}
        <S.Title className='title'>{title}</S.Title>
        <S.Date>{date}</S.Date>
      </S.PostCard>
    </S.Wrapper>
  );
};

export default FeaturedPostCard;
