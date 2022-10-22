import type { NextPage } from 'next';
import { Header } from '../components/Header';
import { Banner } from '../components/mainPage/Banner';
import { About } from '../components/mainPage/About';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <About />
    </>
  );
};

export default Home;
