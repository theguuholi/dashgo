import { theme } from "@/styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { Roboto } from "next/font/google";
import type { AppProps } from "next/app";
import { SidebarDrawerProvider } from "@/contexts/SidebarDrawerContext";
import { makeServer } from "@/services/mirage";
import { QueryClientProvider } from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import { queryClient } from "@/services/queryClient";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

if (process.env.NODE_ENV === "development") {
  makeServer();
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <main className={roboto.className}>
            <Component {...pageProps} />
          </main>
        </SidebarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
