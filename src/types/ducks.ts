import { Person } from './people';
import { Starship } from './starships';

export type IState = {
  people: IPeopleState;
  starships: IStarshipsState;
};

export type IPeopleState = Person[];
export type IStarshipsState = Starship[];
