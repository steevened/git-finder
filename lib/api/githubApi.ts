import axios from 'axios';

export const githubApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_GITHUB_URL,
  headers: {
    Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
  },
});
