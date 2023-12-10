import PostClass from '@/src/models/post';

import FeaturedPostCard from '../FeaturedPostCard';
import * as S from './styled';

type FeaturedPostColumnProps = {
  title: string;
  posts: PostClass[];
  fill?: boolean;
};

const FeaturedPostColumn: React.FC<FeaturedPostColumnProps> = ({ title, posts, fill = true }) => {
  return (
    <S.Wrapper>
      <S.Title fill={fill ? 'true' : 'false'}>{title}</S.Title>
      {posts.map((post, index) => (
        <FeaturedPostCard key={index} post={post} />
      ))}
    </S.Wrapper>
  );
};

export default FeaturedPostColumn;
