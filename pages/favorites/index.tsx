import { ReactElement, useEffect, useState } from 'react';
import { NextPageWithLayout } from '../_app';
import Layout from '@/components/ui/Layout';
import CardsGridContainer from '@/components/ui/CardsGridContainer';
import { UserOnFavorites } from '@/lib/interfaces/user.interface';
import { localFavourites } from '@/lib/utils';
import UserCard from '@/components/ui/UserCard';

const FavoritesPage: NextPageWithLayout = () => {
  const [favorites, setFavorites] = useState<UserOnFavorites[]>([]);

  useEffect(() => {
    setFavorites(localFavourites.usersOnFavorites);
  }, []);

  return (
    <div className="my-10">
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
  );
};

FavoritesPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default FavoritesPage;
