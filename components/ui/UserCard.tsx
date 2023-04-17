import { UserOnFavorites } from '@/lib/interfaces/user.interface';
import { User } from '@/lib/interfaces/users.interface';
import { Button } from '@material-tailwind/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC } from 'react';

interface Props {
  login: string;
  avatar_url: string;
  type: string;
}

export const UserCard: FC<Props> = ({ login, avatar_url, type }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push({
      pathname: `/user/${login}`,
    });
  };
  return (
    <Button
      onClick={handleClick}
      variant="text"
      className="
      w-[200px] 
      p-4 
      space-y-5 
      rounded-2xl 
    bg-white/95 
    dark:bg-white/5
      shadow-lg
    shadow-black/10
      isolate
      overflow-hidden 
"
    >
      <div className="relative h-24 overflow-hidden rounded-lg bg-blue-gray-900/10 dark:bg-gray-100/10 after:absolute after:inset-0 after:bg-blue-gray-900/40 ">
        <Image
          src={avatar_url}
          alt="github profile"
          className="object-cover w-full h-full "
          width="1000"
          height={'1000'}
        />
      </div>
      <div className="space-y-2 text-left">
        <div className="text-lg">
          <p>{login}</p>
        </div>
        <div className="text-opacity-10">
          <p className="">{type}</p>
        </div>
        <div className="">
          <p></p>
        </div>
      </div>
    </Button>
  );
};

export default UserCard;
