import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';
import Layout from '@/components/ui/Layout';
import { useRouter } from 'next/router';
import { useUserByLogin } from '@/lib/hooks/useUsers';
import { useTheme } from 'next-themes';
import DescriptionUserCard from '@/components/ui/DescriptionUserCard';
import DetailsProfileCard from '@/components/ui/DetailsProfileCard';
import ImageProfile from '@/components/ui/ImageProfile';
import GitHubCalendar from 'react-github-calendar';
import Card from '@/components/ui/Card';
import Head from 'next/head';
import { LoaderIcon } from '@/components';

const UserPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { login } = router.query;
  const { theme } = useTheme();
  const { data, isLoading, isError, error } = useUserByLogin(login as string);

  if (isLoading)
    return (
      <div className="text-blue-gray-700 dark:text-blue-gray-300 absolute inset-0 grid place-content-center">
        <LoaderIcon />
      </div>
    );
  if (isError)
    return (
      <div className="text-blue-gray-700 dark:text-blue-gray-300 absolute inset-0 grid place-content-center">
        {`${error}`}
      </div>
    );

  return (
    <>
      <Head>
        <title>{data.login} - Github Finder</title>
      </Head>
      <div className="pb-10">
        <div className=" grid grid-cols-1 md:grid-cols-3 md:gap-5 my-4">
          <ImageProfile
            avatar_url={data.avatar_url}
            login={data.login}
            name={data.name}
          />

          <DetailsProfileCard
            bio={data.bio}
            blog={data.blog}
            hireable={data.hireable ? data.hireable : false}
            html_url={data.html_url}
            location={data.location}
            name={data.name}
            twitter_username={
              data.twitter_username ? data.twitter_username : ''
            }
            type={data.type}
            login={data.login}
            avatar_url={data.avatar_url}
          />
        </div>
        <DescriptionUserCard data={data} />
        <Card className="grid place-content-center py-4">
          <GitHubCalendar username={login as string} />
        </Card>
      </div>
    </>
  );
};

UserPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default UserPage;
