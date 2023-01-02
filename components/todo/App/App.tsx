import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import store from '../store/store';
import { Provider } from 'react-redux';

import { Header } from '../Header';
import { Projects } from '../Projects';
import { TaskList } from '../TaskList';

const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  [theme.breakpoints.up('md')]: {
    minHeight: '100vh',
    minWidth: '100vw',
    height: '100vh',
    width: '100vw',
    maxHeight: '100vh',
    maxWidth: '100vw',
    overflow: 'hidden',
    flexWrap: 'wrap',
  },
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    height: 'calc( 100% - 60px)',
    flexGrow: 1,
    paddingBottom: '60px',
    maxHeight: '1000px',
  },
}));

export const App = () => {
  const isDesktop = useMediaQuery('(min-width:900px)');

  return (
    <Provider store={store}>
      <Root>
        <Header isDesktop={isDesktop} />
        <StyledContainer fixed>
          {isDesktop && <Projects />}
          <TaskList />
        </StyledContainer>
      </Root>
    </Provider>
  );
};
