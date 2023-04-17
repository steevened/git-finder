import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../api/githubApi';
import { UsersResponse } from '../interfaces/users.interface';
import { UserResponse } from '../interfaces/user.interface';

const getUsers = async (params: string): Promise<UsersResponse> => {
  const { data } = await githubApi.get(`/search/users?q=${params}`);
  return data;
};

const getUserByLogin = async (login: string): Promise<UserResponse> => {
  const { data } = await githubApi.get(`/users/${login}`);

  return data;
};

export const useUsers = (params: string) => {
  const usersQuery = useQuery(['users', params], () => getUsers(params));

  return usersQuery;
};

export const useUserByLogin = (login: string) => {
  const userQuery = useQuery(['user', login], () => getUserByLogin(login));
  return userQuery;
};

export default useUsers;
