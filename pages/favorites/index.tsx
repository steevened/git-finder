import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';
import Layout from '@/components/ui/Layout';

const FavoritesPage: NextPageWithLayout = () => {
  return <div>index</div>;
};

FavoritesPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default FavoritesPage;
