import { Container } from '@mui/material';

import { Projects } from '../Projects';
import { List } from '../List';

export const App = () => {
  return (
    <Container fixed>
      <Projects />
      <List />
    </Container>
  );
};
