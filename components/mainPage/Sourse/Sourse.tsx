import { Github } from './Github';
import styles from './sourse.module.scss';

export const Sourse = () => {
  return (
    <section className={styles.section}>
      <a
        target={'_blank'}
        href="https://github.com/AndreyBorovoi/looking-for-a-job" rel="noreferrer"
      >
        <Github className={styles.icon} />
      </a>
    </section>
  );
};
