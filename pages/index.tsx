import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/Header';
import { Banner } from '../components/mainPage/Banner';
import { About } from '../components/mainPage/About';
import { Skills } from '../components/mainPage/Skills';
import { Technologies } from '../components/mainPage/Technologies';
import { Management } from '../components/mainPage/Management';
import { Contacts } from '../components/mainPage/Contacts';
import { Sourse } from '../components/mainPage/Sourse';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Frontend developer</title>
      </Head>
      <Header />
      <Banner />
      <About />
      <Skills />
      <Technologies />
      <Management />
      <Contacts />
      <Sourse />
    </>
  );
};

export default Home;
