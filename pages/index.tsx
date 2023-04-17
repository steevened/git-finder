import { ReactElement, useEffect, useState } from 'react';
import { NextPageWithLayout } from './_app';
import Layout from '@/components/ui/Layout';
import { Button } from '@material-tailwind/react';

const HomePage: NextPageWithLayout = () => {
  return (
    <div className="grid place-items-center">
      <Button
        variant="text"
        // role="button"
        className="flex items-center justify-center w-full max-w-xs rounded-lg shadow-lg bg-blue-gray-200 dark:bg-blue-gray-700 aspect-square"
      >
        <h2 className="text-3xl font-bold">Favorite Users</h2>
      </Button>
    </div>
  );
};

HomePage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default HomePage;
