import useMediaQuery from '@mui/material/useMediaQuery';

import { MobileList } from './MobileList';
import { DesktopList } from './DesktopList';

export const List = () => {
  const isDesktop = useMediaQuery('(min-width:900px)');

  return isDesktop ? <DesktopList /> : <MobileList />;
};
