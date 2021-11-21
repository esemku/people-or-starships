import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import OpponentsSelector from '../OpponentsSelector';

describe('<OpponentsSelector />', () => {
  it('renders correctly', () => {
    const { container } = render(<OpponentsSelector onChange={jest.fn} />);

    expect(container).toMatchSnapshot();
  });

  it('correctly selects clicked starships radio button on click', () => {
    render(<OpponentsSelector onChange={jest.fn} />);

    const starshipsRadioButton = screen
      .getByTestId('starshipsRadioButton')
      .querySelector('input[type="radio"]');

    fireEvent.click(screen.getByTestId('starshipsRadioButton'));

    expect(starshipsRadioButton).toHaveProperty('checked', true);
  });
});
