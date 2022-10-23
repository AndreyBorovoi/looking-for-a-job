import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import { Card, CardProps } from './Card';
import { Eye, Folder, Paper } from './icons';
import styles from './skills.module.scss';

const cards: Omit<CardProps, 'translateY'>[] = [
  {
    icon: <Eye />,
    title: 'Личностные качества',
    description: '',
    list: [
      'Ответственность',
      'Целеустремленность',
      'Обучаемость',
      'Самостоятельность',
      'Стрессоустойчивость',
      'Трудолюбие',
    ],
  },
  {
    icon: <Paper />,
    title: 'Soft skills',
    description: '',
    list: [
      'Коммуникабельность',
      'Критическое мышление',
      'Креативность',
      'Работа в команде',
      'Лидерство',
      'Гибкость',
    ],
  },
  {
    icon: <Folder />,
    title: 'Hard skills',
    description: '',
    list: ['Frontend', 'Backend', 'REST API', 'Git', 'Graphql', 'CI/CD'],
  },
];

export const Skills = () => {
  const [translate, setTranslate] = useState(0);

  useEffect(() => {
    const callback = (event: Event) => {
      const elem = document.getElementById('Skills');
      const x = elem?.getBoundingClientRect().top;

      if (x && x >= 300) {
        setTranslate(0);
      }
      //Если расстояние от верхнего края окна
      //от 300 до -100 пикселей
      if (x && x < 300 && x > -100) {
        // переводим диапазон [300,-100], в [0,1]
        setTranslate((100 - (x + 100) / 4) / 100);
      }
    };
    window.addEventListener('scroll', callback);
    return () => window.removeEventListener('click', callback);
  }, []);

  const translateArray = [0, translate / 2, translate];

  return (
    <section id="Skills" className={styles.section}>
      <Container fixed className={styles.container}>
        {cards.map((card, index) => (
          <Card key={index} translateY={translateArray[index]} {...card} />
        ))}
      </Container>
    </section>
  );
};
