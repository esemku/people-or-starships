import rootSaga from '../index';

describe('sagas/index', () => {
  it('runs all sagas', () => {
    expect(rootSaga().next()).toBeDefined();
  });
});
