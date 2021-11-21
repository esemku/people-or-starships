import peopleSaga from '../people';

describe('sagas/people', () => {
  it('runs all sagas', () => {
    const saga = peopleSaga();

    saga.next();
    saga.next();
    expect(saga.next().done).toBeTruthy();
  });
});
