import '@/styles/globals.css';
import { ThemeProvider } from '@material-tailwind/react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { ThemeProvider as ToggleTheme } from 'next-themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const queryClient = new QueryClient();
  return (
    <ToggleTheme attribute="class" defaultTheme="system">
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          {getLayout(<Component {...pageProps} />)}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </ToggleTheme>
  );
}
