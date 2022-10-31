import useMediaQuery from '@mui/material/useMediaQuery';

import { MobileProjects } from './MobileProjects';
import { DesktopProjects } from './DesktopProjects';

export const Projects = () => {
  const isDesktop = useMediaQuery('(min-width:900px)');

  return isDesktop ? <DesktopProjects /> : <MobileProjects />;
};
