import { UserOnFavorites } from '../interfaces/user.interface';

const toggleFavorite = (user: UserOnFavorites) => {
  let favorites: UserOnFavorites[] = JSON.parse(
    localStorage.getItem('favorites') || '[]'
  );

  for (let favorite of favorites) {
    if (favorite.login === user.login) {
      favorites = favorites.filter(
        (userLogin) => userLogin.login !== user.login
      );
      localStorage.setItem('favorites', JSON.stringify(favorites));
      return;
    }
  }

  favorites.push(user);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const isOnFavorites = (user: UserOnFavorites): boolean => {
  if (typeof window === 'undefined') return false;

  const favorites: UserOnFavorites[] = JSON.parse(
    localStorage.getItem('favorites') || '[]'
  );

  for (let favorite of favorites) {
    if (favorite.login === user.login) {
      return true;
    }
  }

  return false;
};

const usersOnFavorites = (): UserOnFavorites[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
};

export default {
  isOnFavorites,
  usersOnFavorites,
  toggleFavorite,
};
