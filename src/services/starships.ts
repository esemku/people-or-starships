import { LoadStarshipsResponse } from 'sagas/starships';
import client from 'utils/client';

export const getStarships = async (): Promise<LoadStarshipsResponse> => {
  const response = await client({
    url: `/starships`,
    method: 'GET',
  });
  return response.data;
};
