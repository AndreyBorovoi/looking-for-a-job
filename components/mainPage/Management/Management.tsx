import Container from '@mui/material/Container';
import Fade from '@mui/material/Fade';

import { useVisibility } from '../../hooks/useVisibility';
import styles from './management.module.scss';

export const Management = () => {
  const visibility = useVisibility('Management');

  return (
    <section id="Management" className={styles.section}>
      <Fade in={visibility} timeout={1500}>
        <Container fixed className={styles.container}>
          <div className={styles.title}>
            <div className={styles.tag}>Лидерство</div>
            <div className={styles.titleText}>
              Есть опыт в управлении коллективом
            </div>
          </div>
          <div className={styles.text}>
            Под руководством была команда из 5 человек. Занимался менторингом,
            проводил code review. Инициировал и проводил изменения процессов
            взаимодействия как внутри команды, так и снаружи для увеличения
            эффективности работы. Составлял план развития проекта.
          </div>
        </Container>
      </Fade>
    </section>
  );
};
