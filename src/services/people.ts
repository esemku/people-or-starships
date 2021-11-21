import { LoadPeopleResponse } from 'sagas/people';
import client from 'utils/client';

export const getPeople = async (): Promise<LoadPeopleResponse> => {
  const response = await client({
    url: `/people`,
    method: 'GET',
  });
  return response.data;
};
