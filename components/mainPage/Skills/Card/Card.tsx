import useMediaQuery from '@mui/material/useMediaQuery';
import { ReactNode } from 'react';
import styles from './card.module.scss';

export type CardProps = {
  icon: ReactNode;
  title: ReactNode;
  description: ReactNode;
  list: ReactNode[];
  translateY: number;
  color: string;
};

export const Card = ({
  icon,
  title,
  description,
  list,
  translateY,
  color,
}: CardProps) => {
  const mobile = useMediaQuery('(max-width:900px)');
  return (
    <div
      className={styles.card}
      style={{
        transform: `translateY(${!mobile ? translateY * 200 : 0}px)`,
        backgroundColor: color,
      }}
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
