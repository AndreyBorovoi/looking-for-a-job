import type { NextPage } from 'next';
import { Header } from '../components/Header';
import { Banner } from '../components/mainPage/Banner';
import { About } from '../components/mainPage/About';
import { Skills } from '../components/mainPage/Skills';
import { Technologies } from '../components/mainPage/Technologies';
import { Contacts } from '../components/mainPage/Contacts';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Skills />
      <Technologies />
      <Contacts />
    </>
  );
};

export default Home;
