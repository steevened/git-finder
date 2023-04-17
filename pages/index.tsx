import { ReactElement, useEffect, useState } from 'react';
import { NextPageWithLayout } from './_app';
import Layout from '@/components/ui/Layout';
import { Button } from '@material-tailwind/react';
import LoadingCard from '@/components/ui/LoadingCard';
import Head from 'next/head';

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Github Finder</title>
      </Head>
      <div className="grid place-items-center h-[calc(100vh-140px)]">
        <div
          role="button"
          className="flex items-center justify-center w-full max-w-xs rounded-lg shadow-lg bg-blue-gray-200 dark:bg-blue-gray-700 aspect-square uppercase relative overflow-hidden hover:scale-105 duration-200"
        >
          <h2 className="text-3xl font-bold text-center text-blue-500 pointer-events-none z-20">
            Favorite Profiles
          </h2>
          <div className="absolute grid grid-cols-2 inset-0 gap-5  scale-110 -rotate-45">
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
          </div>
        </div>
      </div>
    </>
  );
};

HomePage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default HomePage;
