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
  <Image key={1} src={gastby} alt={'logo'} />,
  <Image key={2} src={git} alt={'logo'} />,
  // <Image src={google} alt={"logo"} />,
  <Image key={3} src={graphql} alt={'logo'} />,
  <Image key={4} src={js} alt={'logo'} />,
  <Image key={5} src={mui} alt={'logo'} />,
  <Image key={6} src={next} alt={'logo'} />,
  <Image key={7} src={emotion} alt={'logo'} />,
  <Image key={8} src={github} alt={'logo'} />,
  <Image key={9} src={npm} alt={'logo'} />,
  <Image key={10} src={react} alt={'logo'} />,
  <Image key={11} src={gitlab} alt={'logo'} />,
  <Image key={12} src={sass} alt={'logo'} />,
  <Image key={13} src={redux} alt={'logo'} />,
  <Image key={14} src={ts} alt={'logo'} />,
  <Image key={15} src={vscode} alt={'logo'} />,
  <Image key={16} src={styled_component} alt={'logo'} />,
  <Image key={17} src={webpack} alt={'logo'} />,
];

const second = [
  <Img key={1} src={docker} alt={'logo'} className={styles.img} />,
  <Img key={2} src={go} alt={'logo'} className={styles.img} />,
  <Img key={3} src={k8s} alt={'logo'} className={styles.img} />,
  <Img key={4} src={mongo} alt={'logo'} className={styles.img} />,
  <Img key={5} src={nest} alt={'logo'} className={styles.img} />,
  <Img key={6} src={nginx} alt={'logo'} className={styles.img} />,
  <Img key={7} src={node} alt={'logo'} className={styles.img} />,
  <Img key={8} src={python} alt={'logo'} className={styles.img} />,
  <Img key={9} src={redis} alt={'logo'} className={styles.img} />,
  <Img key={10} src={strapi} alt={'logo'} className={styles.img} />,
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
