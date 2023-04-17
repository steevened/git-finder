import { FC } from 'react';
import { GistIcon, GroupIcon, RepoIcon, UsersIcon } from './Svgs';
import { UserResponse } from '@/lib/interfaces/user.interface';
import Card from './Card';

interface Props {
  data: UserResponse;
}

const DescriptionUserCard: FC<Props> = ({ data }) => {
  return (
    <Card className="w-full  my-5 flex flex-col md:flex-row justify-between gap-2 divide-y divide-blue-gray-600/20 dark:divide-blue-gray-100/20 md:divide-y-0 md:divide-x">
      <div className=" flex justify-between items-center flex-1 md:px-1 lg:px-3">
        <div>
          <div className="text-md text-blue-gray-600  dark:text-blue-gray-300 font-semibold">
            Followers
          </div>
          <div className="text-2xl text-blue-gray-800 dark:text-blue-gray-100 font-semibold">
            {data.followers}
          </div>
        </div>
        <div className="text-blue-gray-800 dark:text-blue-gray-100 ">
          <UsersIcon />
        </div>
      </div>
      {/* end of stat */}
      <div className=" flex justify-between items-center flex-1 md:px-1 lg:px-3">
        <div>
          <div className="text-md text-blue-gray-600  dark:text-blue-gray-300 font-semibold">
            Following
          </div>
          <div className="text-2xl text-blue-gray-800 dark:text-blue-gray-100 font-semibold">
            {data.following}
          </div>
        </div>
        <div className="text-blue-gray-800 dark:text-blue-gray-100 ">
          <GroupIcon />
        </div>
      </div>
      {/* end of stat */}
      <div className=" flex justify-between items-center flex-1 md:px-1 lg:px-3">
        <div>
          <div className="text-md text-blue-gray-600  dark:text-blue-gray-300 font-semibold">
            Public Repos
          </div>
          <div className="text-2xl text-blue-gray-800 dark:text-blue-gray-100 font-semibold">
            {data.public_repos}
          </div>
        </div>
        <div className="text-blue-gray-800 dark:text-blue-gray-100 ">
          {/* <RiGitRepositoryLine className="text-3xl md:text-5xl" /> */}
          <RepoIcon />
        </div>
      </div>
      {/* end of repos */}
      <div className=" flex justify-between items-center flex-1 md:px-1 lg:px-3">
        <div>
          <div className="text-md text-blue-gray-600  dark:text-blue-gray-300 font-semibold">
            Public Gists
          </div>
          <div className="text-2xl text-blue-gray-800 dark:text-blue-gray-100 font-semibold">
            {data.public_gists}
          </div>
        </div>
        <div className="text-blue-gray-800 dark:text-blue-gray-100 ">
          <GistIcon />
        </div>
      </div>
      {/* end of gists */}
    </Card>
  );
};

export default DescriptionUserCard;
