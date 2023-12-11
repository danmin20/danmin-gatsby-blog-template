import { ThemeManagerContext } from 'gatsby-emotion-dark-mode';
import React, { createRef, useContext, useEffect, useRef } from 'react';

import * as S from './styled';

const src = 'https://utteranc.es/client.js';
const branch = 'main';

type UtterancesProps = {
  repo: string;
  path: string;
};

const Utterances: React.FC<UtterancesProps> = ({ repo, path }) => {
  const rootElm = createRef<HTMLDivElement>();
  const isUtterancesLoaded = useRef(false);
  const theme = useContext(ThemeManagerContext);

  useEffect(() => {
    if (!rootElm.current) return;

    const utterances = document.createElement('script');
    const utterancesConfig: { [key: string]: unknown } = {
      src,
      repo,
      branch,
      'theme': theme.isDark ? 'photon-dark' : 'github-light',
      'label': 'comment',
      'async': true,
      'issue-term': 'pathname',
      'crossorigin': 'anonymous',
    };

    Object.keys(utterancesConfig).forEach((configKey) => {
      utterances.setAttribute(configKey, utterancesConfig[configKey] as string);
    });
    rootElm.current.appendChild(utterances);

    if (isUtterancesLoaded.current) {
      rootElm.current.replaceChild(utterances, rootElm.current.firstChild as Node);
    } else {
      isUtterancesLoaded.current = true;
    }
  }, [rootElm, path, theme.isDark]);

  return <S.Wrapper className='utterances' ref={rootElm} />;
};

export default Utterances;
