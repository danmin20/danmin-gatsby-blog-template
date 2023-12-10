import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { ThemeManagerContext } from 'gatsby-emotion-dark-mode';
import { useContext } from 'react';

import * as S from './styled';

const ThemeToggle: React.FC = () => {
  const theme = useContext(ThemeManagerContext);

  return (
    <S.Wrapper onClick={() => theme.toggleDark()} isDark={theme.isDark}>
      {theme.isDark ? <SunIcon className='theme-icon' /> : <MoonIcon className='theme-icon' />}
    </S.Wrapper>
  );
};

export default ThemeToggle;
