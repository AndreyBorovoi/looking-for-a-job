import Container from '@mui/material/Container';
import Fade from '@mui/material/Fade';

import { useVisibility } from '../../hooks/useVisibility';
import styles from './location.module.scss';

export const Location = () => {
  const visibility = useVisibility('Location', 0.3);

  return (
    <section id="Location" className={styles.section}>
      <Fade in={visibility} timeout={1500}>
        <Container fixed className={styles.container}>
          <div className={styles.title}>
            <div className={styles.tag}>Локация</div>
            <div className={styles.titleText}>Готов работать где угодно</div>
          </div>
          <div className={styles.text}>
            Положительно отношусь к релокиции, готов переехать в любую точку
            земного шара. Есть заграничный паспорт. Нет проблем с удаленной
            работой, продолжительное время работал в таком режиме.
          </div>
        </Container>
      </Fade>
    </section>
  );
};
