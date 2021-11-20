import client from 'utils/client';

export const getStarships = async () => {
  const response = await client({
    url: `/starships`,
    method: 'GET',
  });
  return response.data;
};
