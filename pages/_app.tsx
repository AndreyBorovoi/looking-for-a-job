import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { Language } from '../components/Language';

import createEmotionCache from '../utility/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Language>
          <Component {...pageProps} />
        </Language>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
