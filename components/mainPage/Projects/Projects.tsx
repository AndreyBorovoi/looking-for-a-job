import Fade from '@mui/material/Fade';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';

import { useVisibility } from '../../hooks/useVisibility';
import styles from './projects.module.scss';

import { Slider } from './Slider';
import { Cards } from './Cards';

export const Projects = () => {
  const visibility = useVisibility('Projects', 0.3);
  const isDesk = useMediaQuery('(min-width:900px)');

  return (
    <section id="Projects" className={styles.section}>
      <Fade in={visibility} timeout={1500}>
        <div>
          <Container fixed>
            <div className={styles.title}>
              <div className={styles.tag}>Pet проекты</div>
              <div className={styles.titleText}>
                Можно посмотреть на реализацию популярных задачек
              </div>
            </div>
          </Container>

          {isDesk ? <Cards /> : <Slider />}
        </div>
      </Fade>
    </section>
  );
};
