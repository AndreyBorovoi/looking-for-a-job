import Container, { ContainerProps } from '@mui/material/Container';
import { styled } from '@mui/material/styles';

import store from '../store/store';
import { Provider } from 'react-redux';

import { Header } from '../Header';
import { Projects } from '../Projects';
import { TaskList } from '../TaskList';

const StyledContainer = styled(Container)<ContainerProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <StyledContainer fixed>
        <Projects />
        <TaskList />
      </StyledContainer>
    </Provider>
  );
};
