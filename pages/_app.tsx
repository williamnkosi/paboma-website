import Layout from "@/components/layout";
import { store } from "@/state/store";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Provider } from "react-redux";

const excludedRoutes = ['/auth/signin', '/auth/signup'];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const excludeLayout = excludedRoutes.includes(router.pathname);

  return (
    <>
      <Provider store={store}>
        <ChakraProvider>
          {
            excludeLayout ? <Component {...pageProps} /> : <Layout>
              <Component {...pageProps} />
            </Layout>
          }
        </ChakraProvider>
      </Provider>
    </>
  );
}
