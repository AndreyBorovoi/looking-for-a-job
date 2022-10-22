import { ReactNode, useEffect, useState } from 'react';

import Container from '@mui/material/Container';
import Fade from '@mui/material/Fade';

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
    description: <>Закончил бакалавриат, не&nbsp;закончил магистратуру</>,
  },
];

export const About = () => {
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    let options = {
      root: null,
      threshold: 0.5,
    };

    const callback = (entries: any, observer: any) => {
      if (entries[0].isIntersecting) {
        setVisibility(true);
      }
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(document.getElementById('About') as Element);
  }, []);

  return (
    <section id="About" className={styles.section}>
      <Fade in={visibility} timeout={1500}>
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
      </Fade>
    </section>
  );
};
