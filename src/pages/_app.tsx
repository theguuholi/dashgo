import { theme } from "@/styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { Roboto } from "next/font/google";
import type { AppProps } from "next/app";
import { SidebarDrawerProvider } from "@/contexts/SidebarDrawerContext";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <main className={roboto.className}>
          <Component {...pageProps} />
        </main>
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
}
