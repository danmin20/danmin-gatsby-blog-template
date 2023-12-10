import { useMediaQuery } from 'react-responsive';

import { MOBILE_MAX_WIDTH } from '../styles/const';

const useDeviceType = () => {
  const isMobile = useMediaQuery({ query: `(max-width: ${MOBILE_MAX_WIDTH}px)` });

  return { isMobile };
};

export default useDeviceType;
