import type { NextPage } from 'next';
import Head from 'next/head';
import { App } from '../components/todo/App';

const Todo: NextPage = () => {
  return (
    <>
      <Head>
        <title>Todo App</title>
      </Head>
      <App />
    </>
  );
};

export default Todo;
