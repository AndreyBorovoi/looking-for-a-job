import Container from '@mui/material/Container';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';

import { useVisibility } from '../../hooks/useVisibility';

import styles from './contacts.module.scss';

export const Contacts = () => {
  const visibility = useVisibility('Contacts', 0.3);

  return (
    <section id="Contacts" className={styles.section}>
      <Fade in={visibility} timeout={1500}>
        <Container fixed className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.text}>
              Не удивляйтесь тому, насколько ошеломляюще успешным может быть ваш
              проект,
              <br />
              когда наймете меня
            </div>
            <div className={styles.btnOuter}>
              <Button
                variant="contained"
                className={styles.button}
                target="_blank"
                href="https://t.me/AndreyBrv"
              >
                <div className={styles.text1}>Поработаем?</div>
                <div className={styles.text2}>Конечно!</div>
              </Button>
            </div>
          </div>
        </Container>
      </Fade>
    </section>
  );
};
