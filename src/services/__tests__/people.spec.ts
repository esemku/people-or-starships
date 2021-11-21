import { PeopleMock } from 'mocks/people.mock';
import httpClient from 'utils/client';
import * as peopleService from '../people';

jest.mock('utils/client', () => jest.fn());

describe('services/people', () => {
  it('retrives available people', async () => {
    (httpClient as unknown as jest.Mock).mockResolvedValue({
      success: true,
      data: {
        results: PeopleMock,
      },
    });

    const response = await peopleService.getPeople();

    expect(httpClient).toHaveBeenCalled();
    expect(response.results).toBe(PeopleMock);
  });
});
