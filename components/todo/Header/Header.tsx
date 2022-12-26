import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import { Projects } from '../Projects';

import { useAppSelector, useAppDispatch } from '../store/hooks';
import { closeDrawer, openDrawer } from '../store/drawerSlice';

const StyledHeader = styled(Container)(({ theme }) => ({
  height: '40px',
  display: 'flex',
  flexDirection: 'row-reverse',
  [theme.breakpoints.up('md')]: {
    height: '60px',
    minHeight: '60px',
  },
}));

export const Header = ({ isDesktop }: { isDesktop: boolean }) => {
  const { isOpen } = useAppSelector((state) => state.drawer);
  const dispatch = useAppDispatch();

  return (
    <StyledHeader fixed>
      {isDesktop ? null : (
        <>
          <IconButton onClick={() => dispatch(openDrawer())}>
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            anchor="left"
            open={isOpen}
            onClose={() => dispatch(closeDrawer())}
            onOpen={() => null}
          >
            <Projects />
          </SwipeableDrawer>
        </>
      )}
    </StyledHeader>
  );
};
