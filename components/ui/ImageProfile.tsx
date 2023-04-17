import Image from 'next/image';
import { FC } from 'react';

interface Props {
  avatar_url: string;
  name: string;
  login: string;
}

export const ImageProfile: FC<Props> = ({ avatar_url, name, login }) => {
  return (
    <div className="rounded-lg overflow-hidden relative mx-10 sm:mx-24 md:mx-0">
      <Image
        src={avatar_url}
        alt="user profile picture"
        width={1000}
        height={1000}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 w-full bg-blue-gray-900/40 p-4">
        <h1 className="text-2xl text-blue-gray-200 font-bold">{name}</h1>
        <p className="text-blue-gray-200">{`@${login}`}</p>
      </div>
    </div>
  );
};

export default ImageProfile;
