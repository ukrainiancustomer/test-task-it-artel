import { Header } from "@/components";
import "@/styles/globals.css";
import { ChakraProvider, Container } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "highlight.js/styles/github.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <link
          rel="icon"
          href="https://it-artel.ua/wp-content/uploads/2021/01/cropped-favicon-it-artel-02-150x150.png"
          sizes="32x32"
        />
      </Head>
      <Header />
      <Container maxW="1200px" py={4}>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}
