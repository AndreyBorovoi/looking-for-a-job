import type { AppProps } from 'next/app';
import { Layout } from '../components/Layout';
import { Language } from '../components/Language';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Language>
        <Component {...pageProps} />
      </Language>
    </Layout>
  );
}

export default MyApp;
