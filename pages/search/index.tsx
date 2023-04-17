import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';
import Layout from '@/components/ui/Layout';
import { useUsers } from '@/lib/hooks/useUsers';
import { useRouter } from 'next/router';
import { Button } from '@material-tailwind/react';
import LoadingCard from '@/components/ui/LoadingCard';
import UserCard from '@/components/ui/UserCard';

const SearchPage: NextPageWithLayout = () => {
  const router = useRouter();

  const searchText = router.query.q as string;

  const { data, isLoading, isError } = useUsers(searchText);

  return (
    <div className="my-10">
      <div className="grid grid-cols-1 gap-5 p-3 sm:grid-cols-2 md:grid-cols-3 place-items-center">
        {isLoading ? (
          <>
            {[...Array(30)].map((_, i) => (
              <LoadingCard key={i} />
            ))}
          </>
        ) : (
          data?.items.map((user) => <UserCard key={user.id} user={user} />)
        )}
      </div>
    </div>
  );
};

SearchPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default SearchPage;
