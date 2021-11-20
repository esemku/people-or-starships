import client from 'utils/client';

export const getPeople = async () => {
  const response = await client({
    url: `/people`,
    method: 'GET',
  });
  return response.data;
};
