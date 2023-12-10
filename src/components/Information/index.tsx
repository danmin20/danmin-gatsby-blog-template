import Image from '../Image';
import * as S from './styled';

const Information: React.FC = () => {
  return (
    <S.Wrapper>
      <S.ImageSection>
        <Image alt='profile' src='profile.png' width='100px' />
      </S.ImageSection>
      <S.TextSection>
        <div>Jeongmin Lee (Danmin)</div>
        <div>
          姃 <b>단</b>정할 <b>정</b>
        </div>
        <div>
          敏 <b>민</b>첩할 <b>민</b>
        </div>
      </S.TextSection>
    </S.Wrapper>
  );
};

export default Information;
