import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import styles from './contacts.module.scss';
import { useState } from 'react';
import { createStyleRegistry } from 'styled-jsx';

export const Contacts = () => {
  const [text, setText] = useState('Поработаем?');

  const onMouseOver = () => {
    setText('Конечно!');
  };
  const onMouseOut = () => {
    setText('Поработаем?');
  };

  return (
    <section className={styles.section}>
      <Container fixed className={styles.container}>
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
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            target="_blank"
            href="https://t.me/AndreyBrv"
          >
            <div className={styles.text1}>Поработаем?</div>
            <div className={styles.text2}>Конечно!</div>
          </Button>
        </div>
      </Container>
    </section>
  );
};
