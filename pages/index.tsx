import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import Layout from '@/components/ui/Layout';

const HomePage: NextPageWithLayout = () => {
  return <div className="">shjdkahdakjhdskaj</div>;
};

HomePage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default HomePage;
