import { UserResponse } from '@/lib/interfaces/user.interface';
import { Button, Tooltip } from '@material-tailwind/react';
import { FC, useState } from 'react';
import { GithubLogo, StartIcon, StartIconOut } from './Svgs';
import Card from './Card';
import { localFavourites } from '@/lib/utils';

interface Props {
  // data: UserResponse;
  name: string;
  type: string;
  hireable?: boolean;
  bio: string;
  html_url: string;
  location: string;
  blog: string;
  twitter_username: string;
  login: string;
  avatar_url: string;
}

const DetailsProfileCard: FC<Props> = ({
  name,
  type,
  hireable,
  bio,
  html_url,
  location,
  blog,
  twitter_username,
  login,
  avatar_url,
}) => {
  const toFavorite = {
    avatar_url,
    login,
    type,
  };
  const [isFavorite, setIsFavorite] = useState(
    localFavourites.isOnFavorites(toFavorite)
  );

  // console.log(localFavourites.usersOnFavorites());

  const handleFavorite = () => {
    localFavourites.toggleFavorite({ avatar_url, login, type });
    setIsFavorite(!isFavorite);
  };
  return (
    <div className="col-span-2 ">
      <div className="mb-6 mt-3 md:mt-0">
        <div className=" flex flex-col md:flex-row gap-y-2">
          <h1 className="text-2xl  card-title  gap-2 grow">
            {name}
            <span className="rounded-full px-2 mx-2 bg-light-green-500 text-sm py-1 select-none shadow-md text-blue-gray-800 font-semibold ">
              {type}
            </span>
            {hireable && (
              <span className="rounded-full px-2 mx-2 bg-light-blue-500 text-sm py-1 select-none shadow-md text-blue-gray-800 font-semibold ">
                Hireable
              </span>
            )}
          </h1>
          <div>
            <Tooltip
              content={
                isFavorite ? 'Remove from favorites' : 'Add to favorites'
              }
            >
              <Button
                size="sm"
                variant="text"
                color="orange"
                className="flex items-center gap-1"
                onClick={handleFavorite}
              >
                {isFavorite ? (
                  <>
                    <StartIconOut />
                  </>
                ) : (
                  <>
                    <StartIcon />
                  </>
                )}
              </Button>
            </Tooltip>
          </div>
        </div>

        <p className="mt-2">{bio ? bio : 'No bio yet'}</p>
        <Button variant="outlined" className="mt-2 p-0" color={'light-blue'}>
          <a
            href={html_url}
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
        {location && (
          <div className="">
            <div className="text-md text-blue-gray-600  dark:text-blue-gray-300 font-semibold">
              Location
            </div>
            <div className="text-lg text-blue-gray-800 dark:text-blue-gray-100 font-semibold">
              {location}
            </div>
          </div>
        )}
        {blog && (
          <div className="pt-2">
            <div className="text-md text-blue-gray-600 dark:text-blue-gray-300 font-semibold">
              Website
            </div>
            <div className="text-lg  font-semibold whitespace-normal">
              <a
                href={blog}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                {blog}
              </a>
            </div>
          </div>
        )}
        {twitter_username && (
          <div className="pt-2 ">
            <div className="text-md text-blue-gray-600 dark:text-blue-gray-300 font-semibold">
              Twitter
            </div>
            <div className="text-lg  font-semibold whitespace-normal">
              <a
                href={`https://twitter.com/${twitter_username}`}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                {twitter_username}
              </a>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default DetailsProfileCard;
