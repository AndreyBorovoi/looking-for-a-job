import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { css } from '@emotion/react';

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

const StyledRoot = styled(Root)`
  *::-webkit-scrollbar {
    background: none;
    width: 5px;
  }
  *::-webkit-scrollbar-track {
    background: none;
  }

  *::-webkit-scrollbar-thumb {
    background: #cccccc;
    border-radius: 10px;
  }
`;

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    height: 'calc( 100% - 60px)',
    flexGrow: 1,
    paddingBottom: '60px',
  },
}));

export const App = () => {
  const isDesktop = useMediaQuery('(min-width:900px)');

  return (
    <Provider store={store}>
      <StyledRoot>
        <Header isDesktop={isDesktop} />
        <StyledContainer fixed>
          {isDesktop && <Projects />}
          <TaskList />
        </StyledContainer>
      </StyledRoot>
    </Provider>
  );
};
