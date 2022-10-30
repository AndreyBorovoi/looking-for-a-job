import Button from '@mui/material/Button';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import styles from './slider.module.scss';

import { projects } from '../data';

export const Slider = () => {
  return (
    <Swiper slidesPerView={'auto'} className={styles.slider} loop={true}>
      {projects.map(({ title, description, href, inProgress, color }, i) => {
        return (
          <SwiperSlide key={i}>
            <div
              className={styles.slide}
              // style={{backgroundColor: color}}
            >
              <div className={styles.text}>
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>{description}</div>
              </div>
              <Button className={styles.button} disabled={inProgress}>
                {inProgress ? 'В разработке' : 'Взглянуть'}
              </Button>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
