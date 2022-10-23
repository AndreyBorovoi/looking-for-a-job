import { ReactNode } from 'react';
import styles from './card.module.scss';

export type CardProps = {
  icon: ReactNode;
  title: ReactNode;
  description: ReactNode;
  list: ReactNode[];
  translateY: number;
};

export const Card = ({
  icon,
  title,
  description,
  list,
  translateY,
}: CardProps) => {
  return (
    <div
      className={styles.card}
      style={{ transform: `translateY(${translateY * 200}px)` }}
    >
      <div className={styles.icon}>{icon}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <ul className={styles.list}>
        {list.map((item, i) => {
          return (
            <li className={styles.listItem} key={i}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
