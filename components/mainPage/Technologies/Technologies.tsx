import useMediaQuery from '@mui/material/useMediaQuery';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import Img from 'next/future/image';

import emotion from '../../../public/Technologies/emotion.png';
import gastby from '../../../public/Technologies/gastby.png';
import git from '../../../public/Technologies/git.png';
import github from '../../../public/Technologies/github.png';
import gitlab from '../../../public/Technologies/gitlab.png';
import google from '../../../public/Technologies/google.png';
import graphql from '../../../public/Technologies/graphql.png';
import js from '../../../public/Technologies/js.png';
import mui from '../../../public/Technologies/mui.png';
import next from '../../../public/Technologies/next.png';
import npm from '../../../public/Technologies/npm.png';
import react from '../../../public/Technologies/react.png';
import redux from '../../../public/Technologies/redux.png';
import sass from '../../../public/Technologies/sass.png';
import styled_component from '../../../public/Technologies/styled_component.png';
import ts from '../../../public/Technologies/ts.png';
import vscode from '../../../public/Technologies/vscode.png';
import webpack from '../../../public/Technologies/webpack.png';

import docker from '../../../public/Technologies/docker.png';
import go from '../../../public/Technologies/go.png';
import k8s from '../../../public/Technologies/k8s.png';
import mongo from '../../../public/Technologies/mongo.png';
import nest from '../../../public/Technologies/nest.png';
import nginx from '../../../public/Technologies/nginx.png';
import node from '../../../public/Technologies/node.png';
import python from '../../../public/Technologies/python.png';
import redis from '../../../public/Technologies/redis.png';
import strapi from '../../../public/Technologies/strapi.png';

import styles from './technologies.module.scss';

const first = [
  <Image src={emotion} alt={'logo'} />,
  <Image src={gastby} alt={'logo'} />,
  <Image src={git} alt={'logo'} />,
  <Image src={github} alt={'logo'} />,
  // <Image src={google} alt={"logo"} />,
  <Image src={graphql} alt={'logo'} />,
  <Image src={js} alt={'logo'} />,
  <Image src={mui} alt={'logo'} />,
  <Image src={next} alt={'logo'} />,
  <Image src={npm} alt={'logo'} />,
  <Image src={react} alt={'logo'} />,
  <Image src={gitlab} alt={'logo'} />,
  <Image src={sass} alt={'logo'} />,
  <Image src={redux} alt={'logo'} />,
  <Image src={ts} alt={'logo'} />,
  <Image src={vscode} alt={'logo'} />,
  <Image src={styled_component} alt={'logo'} />,
  <Image src={webpack} alt={'logo'} />,
];

const second = [
  <Img src={docker} alt={'logo'} className={styles.img} />,
  <Img src={go} alt={'logo'} className={styles.img} />,
  <Img src={k8s} alt={'logo'} className={styles.img} />,
  <Img src={mongo} alt={'logo'} className={styles.img} />,
  <Img src={nest} alt={'logo'} className={styles.img} />,
  <Img src={nginx} alt={'logo'} className={styles.img} />,
  <Img src={node} alt={'logo'} className={styles.img} />,
  <Img src={python} alt={'logo'} className={styles.img} />,
  <Img src={redis} alt={'logo'} className={styles.img} />,
  <Img src={strapi} alt={'logo'} className={styles.img} />,
];

export const Technologies = () => {
  const mobile = useMediaQuery('(max-width:900px)');
  return (
    <section className={styles.section}>
      <Marquee gradient={!mobile} speed={100} className={styles.line}>
        {first.map((item, index) => (
          <div key={index} className={styles.item}>
            {item}
          </div>
        ))}
      </Marquee>
      <Marquee
        gradient={!mobile}
        direction="right"
        speed={100}
        className={styles.line}
      >
        {second.map((item, index) => (
          <div key={index} className={styles.imgItem}>
            {item}
          </div>
        ))}
      </Marquee>
    </section>
  );
};
