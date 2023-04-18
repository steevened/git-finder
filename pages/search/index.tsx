import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';
import Layout from '@/components/ui/Layout';
import { useUsers } from '@/lib/hooks/useUsers';
import { useRouter } from 'next/router';
import { Button } from '@material-tailwind/react';
import LoadingCard from '@/components/ui/LoadingCard';
import UserCard from '@/components/ui/UserCard';
import CardsGridContainer from '@/components/ui/CardsGridContainer';
import Head from 'next/head';

const SearchPage: NextPageWithLayout = () => {
  const router = useRouter();

  const searchText = router.query.q as string;

  const { data, isLoading, isError, error } = useUsers(searchText);

  console.log(error);

  if (isError)
    return (
      <div className="text-blue-gray-700 dark:text-blue-gray-300 absolute inset-0 grid place-content-center">
        {`${error}`}
      </div>
    );

  return (
    <>
      <Head>
        <title>Search - Github Finder</title>
      </Head>
      <div className="my-10">
        <CardsGridContainer>
          {isLoading ? (
            <>
              {[...Array(30)].map((_, i) => (
                <LoadingCard key={i} />
              ))}
            </>
          ) : (
            data?.items.map((user) => (
              <UserCard
                key={user.id}
                avatar_url={user.avatar_url}
                login={user.login}
                type={user.type}
              />
            ))
          )}
        </CardsGridContainer>
      </div>
    </>
  );
};

SearchPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default SearchPage;
