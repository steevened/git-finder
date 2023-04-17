import { UserResponse } from '@/lib/interfaces/user.interface';
import { Button } from '@material-tailwind/react';
import { FC } from 'react';
import { GithubLogo, StartIcon } from './Svgs';
import Card from './Card';

interface Props {
  data: UserResponse;
}

const DetailsProfileCard: FC<Props> = ({ data }) => {
  return (
    <div className="col-span-2 ">
      <div className="mb-6 mt-3 md:mt-0">
        <div className=" flex flex-col md:flex-row gap-y-2">
          <h1 className="text-2xl  card-title  gap-2 grow">
            {data.name}
            <span className="rounded-full px-2 mx-2 bg-light-green-500 text-sm py-1 select-none shadow-md text-blue-gray-800 font-semibold ">
              {data.type}
            </span>
            {data.hireable && (
              <span className="rounded-full px-2 mx-2 bg-light-blue-500 text-sm py-1 select-none shadow-md text-blue-gray-800 font-semibold ">
                Hireable
              </span>
            )}
          </h1>
          <div>
            <Button
              size="sm"
              variant="text"
              color="orange"
              className="flex items-center gap-1"
            >
              <StartIcon />
              add to favorites
            </Button>
          </div>
        </div>

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
      {/* card details */}
      <Card className="w-full grid grid-cols-1  divide-y divide-blue-gray-600/20 dark:divide-blue-gray-100/20   whitespace-normal overflow-x-auto">
        {data.location && (
          <div className="">
            <div className="text-md text-blue-gray-600  dark:text-blue-gray-300 font-semibold">
              Location
            </div>
            <div className="text-lg text-blue-gray-800 dark:text-blue-gray-100 font-semibold">
              {data.location}
            </div>
          </div>
        )}
        {data.blog && (
          <div className="pt-2">
            <div className="text-md text-blue-gray-600 dark:text-blue-gray-300 font-semibold">
              Website
            </div>
            <div className="text-lg  font-semibold whitespace-normal">
              <a
                href={data.blog}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                {data.blog}
              </a>
            </div>
          </div>
        )}
        {data.twitter_username && (
          <div className="pt-2 ">
            <div className="text-md text-blue-gray-600 dark:text-blue-gray-300 font-semibold">
              Twitter
            </div>
            <div className="text-lg  font-semibold whitespace-normal">
              <a
                href={`https://twitter.com/${data.twitter_username}`}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                {data.twitter_username}
              </a>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default DetailsProfileCard;
