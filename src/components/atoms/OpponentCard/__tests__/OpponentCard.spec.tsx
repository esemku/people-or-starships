import React from 'react';
import { render, screen } from '@testing-library/react';

import { PersonMock } from 'mocks/people.mock';
import { ThemeProvider } from '@mui/material';
import theme from 'theme';
import { StarshipMock } from 'mocks/starships.mock';
import OpponentCard from '../OpponentCard';

describe('<OpponentCard />', () => {
  it('renders correctly', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <OpponentCard
          opponent={PersonMock}
          isWinner={false}
          opponentsKind="people"
        />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
  it('renders winnerText when isWinner is true', () => {
    render(
      <ThemeProvider theme={theme}>
        <OpponentCard
          opponent={StarshipMock}
          isWinner
          opponentsKind="starships"
        />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('winnerText')).toBeInTheDocument();
  });
});
