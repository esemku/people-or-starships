import { StarshipsMock } from 'mocks/starships.mock';
import httpClient from 'utils/client';
import * as starshipsService from '../starships';

jest.mock('utils/client', () => jest.fn());

describe('services/starships', () => {
  it('retrives available starships', async () => {
    (httpClient as unknown as jest.Mock).mockResolvedValue({
      success: true,
      data: {
        results: StarshipsMock,
      },
    });

    const response = await starshipsService.getStarships();

    expect(httpClient).toHaveBeenCalled();
    expect(response.results).toBe(StarshipsMock);
  });
});
