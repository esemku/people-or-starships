import { rootReducer } from '../index';

describe('ducks/index', () => {
  it('creates global state', () => {
    expect(rootReducer({}, { type: 'ACTION' })).toBeDefined();
  });
});
