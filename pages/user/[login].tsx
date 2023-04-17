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

const UserPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { login } = router.query;
  const { theme } = useTheme();
  const { data, isLoading, isError } = useUserByLogin(login as string);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 md:gap-5">
      {/* picture */}
      <div className="rounded-lg overflow-hidden relative mx-10 sm:mx-24 md:mx-0">
        <Image
          src={data.avatar_url}
          alt="user profile picture"
          width={1000}
          height={1000}
        />
        <div className="absolute inset-0 w-full bg-blue-gray-900/40 p-4">
          <h1 className="text-2xl text-white font-bold">{data.name}</h1>
          <p className="text-white">{`@${data.login}`}</p>
        </div>
      </div>
      {/* details */}
      <div className="col-span-2">
        <div className="mb-6 mt-3 ">
          <h1 className="text-2xl  card-title  gap-2 ">
            {data.name}
            <span className="rounded-full px-2 mx-2 bg-light-green-500 text-sm py-1 select-none shadow-md text-blue-gray-800 font-semibold">
              {data.type}
            </span>
            {data.hireable && (
              <div className="mx-1 badge badge-info">Hireable</div>
            )}
          </h1>
          <p className="mt-2">{data.bio ? data.bio : 'No bio yet'}</p>
          <Button variant="outlined" className="mt-2 p-0" color={'light-blue'}>
            <a
              href={data.html_url}
              target="_blank"
              rel="noreferrer"
              className=" flex items-center gap-2  p-2"
            >
              <GithubLogo />
              <span className="">Visit Profile</span>
            </a>
          </Button>
        </div>
        <div className="w-full flex flex-col lg:flex-row  shadow-lg bg-base-300 rounded-none stats">
          {location && (
            <div className="stat">
              <div className="stat-title text-md">Location</div>
              <div className="text-lg stat-value">{data.location}</div>
            </div>
          )}
          {data.blog && (
            <div className="stat">
              <div className="stat-title text-md">Website</div>
              <div className="text-lg stat-value">
                <a href={data.blog} target="_blank" rel="noreferrer">
                  {data.blog}
                </a>
              </div>
            </div>
          )}
          {data.twitter_username && (
            <div className="stat">
              <div className="stat-title text-md">Twitter</div>
              <div className="text-lg stat-value">
                <a
                  href={`https://twitter.com/${data.twitter_username}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.twitter_username}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

UserPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default UserPage;
