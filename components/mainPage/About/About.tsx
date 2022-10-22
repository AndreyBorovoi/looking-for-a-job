import Container from '@mui/material/Container';
import { ReactNode } from 'react';
import styles from './about.module.scss';

type PointType = {
  key: number;
  number: string;
  text: string;
  description: ReactNode;
};

const points: PointType[] = [
  {
    key: 1,
    number: '3',
    text: 'Года опыта',
    description: 'Работал над различными проектами',
  },
  {
    key: 2,
    number: '2000+',
    text: 'Коммитов',
    description: 'Решил большое количество бизнес задач',
  },
  {
    key: 3,
    number: '5+',
    text: 'Лет обучения',
    description: <>Закончил бакалвриат, не&nbsp;закончил магистратуру</>,
  },
];

export const About = () => {
  return (
    <section className={styles.section}>
      <Container fixed className={styles.container}>
        <div className={styles.title}>
          <div className={styles.tag}>Опыт</div>
          <div className={styles.titleText}>
            Обладаю значительным опытом, который помогает мне выполнять
            поставленные бизнес задачи
          </div>
        </div>
        <div className={styles.points}>
          {points.map(({ key, number, text, description }: PointType) => {
            return (
              <div key={key} className={styles.point}>
                <div className={styles.pointNumber}>{number}</div>
                <div className={styles.pointText}>{text}</div>
                <div className={styles.pointDescription}>{description}</div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
