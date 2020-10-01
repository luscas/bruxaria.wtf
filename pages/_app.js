import React from 'react';
import Head from 'next/head';
import {
  ChakraProvider,
  CSSReset,
} from "@chakra-ui/core";

import customTheme from '../theme';
import '../assets/scss/app.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <Head>
        <meta
          property="og:image"
          content="/avatar.jpg"
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>github/luscas</title>
      </Head>

      <Component {...pageProps} />
    </ChakraProvider>
  );
}