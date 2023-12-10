import React from 'react';

import PostClass from '@/src/models/post';

import * as S from './styled';

type PostHeaderProps = {
  post: PostClass;
};

const PostHeader: React.FC<PostHeaderProps> = ({ post }) => {
  return (
    <S.Header>
      {post.emoji && <S.Emoji>{post.emoji}</S.Emoji>}
      <S.Categories>
        {post.categories.map((category) => (
          <S.Category key={category} to={`/posts/${category}`}>
            {category}
          </S.Category>
        ))}
      </S.Categories>

      <S.Title>{post.title}</S.Title>
      <S.Info>{post.date}</S.Info>
    </S.Header>
  );
};
export default PostHeader;
