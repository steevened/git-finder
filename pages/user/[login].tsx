import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';
import Layout from '@/components/ui/Layout';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button } from '@material-tailwind/react';

import Image from 'next/image';
import { useUserByLogin } from '@/lib/hooks/useUsers';
import { GithubLogo } from '@/components';
import { useTheme } from 'next-themes';
import DescriptionUserCard from '@/components/ui/DescriptionUserCard';
import Card from '@/components/ui/Card';
import DetailsProfileCard from '@/components/ui/DetailsProfileCard';
import ImageProfile from '@/components/ui/ImageProfile';

const UserPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { login } = router.query;
  const { theme } = useTheme();
  const { data, isLoading, isError } = useUserByLogin(login as string);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-3 md:gap-5 my-4">
        <ImageProfile
          avatar_url={data.avatar_url}
          login={data.login}
          name={data.name}
        />

        <DetailsProfileCard data={data} />
      </div>
      <DescriptionUserCard data={data} />
    </>
  );
};

UserPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default UserPage;
