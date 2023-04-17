import '@/styles/globals.css';
import { ThemeProvider } from '@material-tailwind/react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { ThemeProvider as ToggleTheme } from 'next-themes';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <ToggleTheme attribute="class" defaultTheme="system">
      <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
    </ToggleTheme>
  );
}
