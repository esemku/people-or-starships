import React from 'react';
import { render } from '@testing-library/react';

import OpponentsCardsWrapper from '../OpponentsCardsWrapper';

describe('<OpponentsCardsWrapper />', () => {
  it('renders correctly', () => {
    const { container } = render(
      <OpponentsCardsWrapper>
        <div>children</div>
      </OpponentsCardsWrapper>,
    );

    expect(container).toMatchSnapshot();
  });
});
