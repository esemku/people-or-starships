import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { PeopleMock } from 'mocks/people.mock';
import { StarshipsMock } from 'mocks/starships.mock';
import theme from 'theme';
import { ThemeProvider } from '@mui/material';
import { Person } from 'types/people';
import { Starship } from 'types/starships';
import App from '../App';

const mockStore = configureStore();

describe('<App />', () => {
  const store = mockStore({
    people: PeopleMock,
    starships: StarshipsMock,
  });
  it('renders correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
  it('renders opponent card after drawButton click, renders counter after fightButton click', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>,
    );

    expect(screen.queryByTestId('drawButton')).not.toBeInTheDocument();
    fireEvent.click(screen.getByTestId('starshipsRadioButton'));
    const drawButton = screen.getByTestId('drawButton');
    expect(drawButton).toBeInTheDocument();

    expect(screen.queryByTestId('firstOpponentCard')).not.toBeInTheDocument();
    fireEvent.click(drawButton);
    expect(screen.getByTestId('firstOpponentCard')).toBeInTheDocument();

    const fightButton = screen.getByTestId('fightButton');
    expect(
      screen.queryByTestId('firstPlayerWinsCounter'),
    ).not.toBeInTheDocument();
    fireEvent.click(fightButton);
    expect(screen.getByTestId('firstPlayerWinsCounter')).toBeInTheDocument();
  });

  it('disabling and enabling fight button when toggling between fight and draw button', () => {
    const tempPeopleMock: Person[] = [
      {
        birth_year: 'unknown',
        created: '2014-12-10T15:57:50.959000Z',
        edited: '2014-12-20T21:17:50.321000Z',
        eye_color: 'red',
        films: ['https://swapi.dev/api/films/1/'],
        gender: 'n/a',
        hair_color: 'n/a',
        height: '97',
        homeworld: 'https://swapi.dev/api/planets/1/',
        mass: '90',
        name: 'R5-D4',
        skin_color: 'white, red',
        species: ['https://swapi.dev/api/species/2/'],
        starships: [],
        url: 'https://swapi.dev/api/people/8/',
        vehicles: [],
      },
      {
        birth_year: 'unknown',
        created: '2014-12-10T15:57:50.959000Z',
        edited: '2014-12-20T21:17:50.321000Z',
        eye_color: 'red',
        films: ['https://swapi.dev/api/films/1/'],
        gender: 'n/a',
        hair_color: 'n/a',
        height: '97',
        homeworld: 'https://swapi.dev/api/planets/1/',
        mass: '60',
        name: 'R5-D4',
        skin_color: 'white, red',
        species: ['https://swapi.dev/api/species/2/'],
        starships: [],
        url: 'https://swapi.dev/api/people/8/',
        vehicles: [],
      },
    ];

    const tempStore = mockStore({
      people: tempPeopleMock,
      starships: StarshipsMock,
    });

    render(
      <Provider store={tempStore}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>,
    );

    fireEvent.click(screen.getByTestId('peopleRadioButton'));

    const drawButton = screen.getByTestId('drawButton');
    fireEvent.click(drawButton);
    const fightButton = screen.getByTestId('fightButton');
    fireEvent.click(fightButton);
    fireEvent.click(drawButton);
    fireEvent.click(fightButton);
    fireEvent.click(drawButton);
    fireEvent.click(fightButton);
    expect(fightButton).toHaveAttribute('disabled');
    fireEvent.click(drawButton);
    expect(fightButton).not.toHaveAttribute('disabled');
    fireEvent.click(fightButton);
    expect(fightButton).toHaveAttribute('disabled');
  });

  it('renders opponent card after drawButton click, renders counter after fightButton click with starships kind choosen', () => {
    const tempStarshipsMock: Starship[] = [
      {
        MGLT: '10',
        cargo_capacity: '1000000000000',
        consumables: '3 years',
        cost_in_credits: '1000000000000',
        created: '2014-12-10T16:36:50.509000Z',
        crew: '2',
        edited: '2014-12-20T21:26:24.783000Z',
        films: ['https://swapi.dev/api/films/1/'],
        hyperdrive_rating: '4.0',
        length: '120000',
        manufacturer:
          'Imperial Department of Military Research, Sienar Fleet Systems',
        max_atmosphering_speed: 'n/a',
        model: 'DS-1 Orbital Battle Station',
        name: 'Death Star',
        passengers: '843,342',
        pilots: [],
        starship_class: 'Deep Space Mobile Battlestation',
        url: 'https://swapi.dev/api/starships/9/',
      },
      {
        MGLT: '10',
        cargo_capacity: '1000000000000',
        consumables: '3 years',
        cost_in_credits: '1000000000000',
        created: '2014-12-10T16:36:50.509000Z',
        crew: '5',
        edited: '2014-12-20T21:26:24.783000Z',
        films: ['https://swapi.dev/api/films/1/'],
        hyperdrive_rating: '4.0',
        length: '120000',
        manufacturer:
          'Imperial Department of Military Research, Sienar Fleet Systems',
        max_atmosphering_speed: 'n/a',
        model: 'DS-1 Orbital Battle Station',
        name: 'Death Star',
        passengers: '843,342',
        pilots: [],
        starship_class: 'Deep Space Mobile Battlestation',
        url: 'https://swapi.dev/api/starships/9/',
      },
    ];

    const tempStore = mockStore({
      people: PeopleMock,
      starships: tempStarshipsMock,
    });

    render(
      <Provider store={tempStore}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>,
    );

    fireEvent.click(screen.getByTestId('starshipsRadioButton'));

    const drawButton = screen.getByTestId('drawButton');
    fireEvent.click(drawButton);
    const fightButton = screen.getByTestId('fightButton');
    fireEvent.click(fightButton);
    fireEvent.click(drawButton);
    fireEvent.click(fightButton);
    fireEvent.click(drawButton);
    fireEvent.click(fightButton);
    fireEvent.click(drawButton);
    fireEvent.click(fightButton);
    expect(fightButton).toHaveAttribute('disabled');
  });
});
