import { ReactNode } from 'react';

type ProjectType = {
  title: ReactNode;
  description: ReactNode;
  href: string;
  inProgress: boolean;
};

export const projects: ProjectType[] = [
  {
    title: 'Todo list',
    description: (
      <>
        Hello world из мира фронтенда. Передлагаю взглянуть на миллион первую
        реализацию.
      </>
    ),
    href: '#',
    inProgress: true,
  },
  {
    title: 'Погода',
    description: (
      <>
        Не менее легендарное приложение, без него невозможно узнать, что
        происходит снаружи.
      </>
    ),
    href: '#',
    inProgress: true,
  },
  {
    title: 'Чат бот',
    description: <>Хотите пообщаться с искусственным интеллектом?</>,
    href: '#',
    inProgress: true,
  },
  // {
  //   title: 'Засекречено',
  //   description:'Нужно дождаться анонса',
  //   href: '#',
  //   inProgress: true
  // },
  // {
  //   title: 'Засекречено',
  //   description:'Нужно дождаться анонса',
  //   href: '#',
  //   inProgress: true
  // },
  // {
  //   title: 'Засекречено',
  //   description:'Нужно дождаться анонса',
  //   href: '#',
  //   inProgress: true
  // },
];
