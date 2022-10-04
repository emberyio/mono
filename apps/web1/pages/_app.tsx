import { AppProps } from "next/app";
import * as React from "react";
import { ChakraProvider } from "ui";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
