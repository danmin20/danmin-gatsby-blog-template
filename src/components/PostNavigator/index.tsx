import React from 'react';

import PostClass from '@/src/models/post';

import * as S from './styled';

type PostNavigatorProps = {
  prevPost: PostClass;
  nextPost: PostClass;
};

const PostNavigator: React.FC<PostNavigatorProps> = ({ prevPost, nextPost }) => {
  return (
    <S.Wrapper>
      <div>
        {nextPost && (
          <S.PostCard className='prev' key={nextPost.id} to={nextPost.slug}>
            <S.Direction>이전 글</S.Direction>
            <S.Title>{nextPost.title}</S.Title>
          </S.PostCard>
        )}
      </div>
      <div>
        {prevPost && (
          <S.PostCard className='next' key={prevPost.id} to={prevPost.slug}>
            <S.Direction>다음 글</S.Direction>
            <S.Title>{prevPost.title}</S.Title>
          </S.PostCard>
        )}
      </div>
    </S.Wrapper>
  );
};

export default PostNavigator;
