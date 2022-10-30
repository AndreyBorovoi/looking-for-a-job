import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import styles from './cards.module.scss';

import { projects } from '../data';
import clsx from 'clsx';

export const Cards = () => {
  return (
    <Container fixed className={styles.container}>
      {projects.map(({ title, description, href, inProgress }, i) => {
        return (
          <div className={styles.card} key={i}>
            <div className={styles.text}>
              <div className={styles.title}>{title}</div>
              <div className={styles.description}>{description}</div>
            </div>
            <div
              className={clsx(
                styles.buttonWrapper,
                inProgress && styles.buttonWrapperInProgress
              )}
            >
              {inProgress && (
                <div className={styles.inProgressText}>Не готово :(</div>
              )}
              <Button className={styles.button} variant="contained">
                Взглянуть
              </Button>
            </div>
          </div>
        );
      })}
    </Container>
  );
};
