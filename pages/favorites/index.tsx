import { ReactElement, useEffect, useState } from 'react';
import { NextPageWithLayout } from '../_app';
import Layout from '@/components/ui/Layout';
import CardsGridContainer from '@/components/ui/CardsGridContainer';
import { UserOnFavorites } from '@/lib/interfaces/user.interface';
import { localFavourites } from '@/lib/utils';
import UserCard from '@/components/ui/UserCard';
import addFav from '../../public/addfav.png';
import Image from 'next/image';
import Head from 'next/head';

const FavoritesPage: NextPageWithLayout = () => {
  const [favorites, setFavorites] = useState<UserOnFavorites[]>([]);

  useEffect(() => {
    setFavorites(localFavourites.usersOnFavorites);
  }, []);

  return (
    <>
      <Head>
        <title>Favorites - Github Finder</title>
      </Head>
      <div className="my-10">
        {favorites.length === 0 && (
          <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto gap-5">
            <h3 className="text-2xl font-semibold text-center text-blue-gray-700 dark:text-blue-gray-200">
              Ready to add your favorite profiles? Simply click the start icon
              next to their name to save them to your favorites.
            </h3>
            <div className=" aspect-square w-full max-w-[200px] shadow-lg shadow-black/20 rounded-lg overflow-hidden">
              <Image src={addFav} alt="add favorites image" />
            </div>
          </div>
        )}
        <CardsGridContainer>
          {favorites.map((user) => (
            <UserCard
              avatar_url={user.avatar_url}
              login={user.login}
              type={user.type}
              key={user.login}
            />
          ))}
        </CardsGridContainer>
      </div>
    </>
  );
};

FavoritesPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default FavoritesPage;
