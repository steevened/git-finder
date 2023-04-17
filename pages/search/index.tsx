import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';
import Layout from '@/components/ui/Layout';
import { githubApi } from '@/lib/api/githubApi';
import { useQuery } from '@tanstack/react-query';

const getUsers = async (params: string) => {
  const { data } = await githubApi.get(`/search/users?q=${params}`);

  return data;
};

const SearchPage: NextPageWithLayout = () => {
  const { data, error } = useQuery(['users'], () => getUsers('a'));

  console.log(data, error);

  return <div>Search</div>;
};

SearchPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default SearchPage;
