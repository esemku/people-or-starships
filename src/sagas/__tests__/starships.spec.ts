import starshipsSaga from '../starships';

describe('sagas/starships', () => {
  it('runs all sagas', () => {
    const saga = starshipsSaga();

    saga.next();
    saga.next();
    expect(saga.next().done).toBeTruthy();
  });
});
