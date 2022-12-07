import { Container } from '@mui/material';

import store from '../store/store';
import { Provider } from 'react-redux';

import { Projects } from '../Projects';
import { List } from '../List';

export const App = () => {
  return (
    <Provider store={store}>
      <Container fixed>
        <Projects />
        <List />
      </Container>
    </Provider>
  );
};
