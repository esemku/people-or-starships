import { Person } from './people';
import { Starship } from './starships';

export type IState = {
  people: IPeopleState;
  starships: IStarshipsState;
};

export type IPeopleState = Person[] | 'error';
export type IStarshipsState = Starship[] | 'error';
