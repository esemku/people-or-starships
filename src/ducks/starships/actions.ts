import { Starship } from 'types/starships';

export interface ActionLoadStarships {
  type:
    | typeof STARSHIPS_ACTION_TYPES.LOAD_STARSHIPS
    | typeof STARSHIPS_ACTION_TYPES.LOAD_STARSHIPS_SUCCESS
    | typeof STARSHIPS_ACTION_TYPES.LOAD_STARSHIPS_FAILURE;
  payload?: { starships: Starship[] };
}

export const STARSHIPS_ACTION_TYPES = {
  LOAD_STARSHIPS: 'swapi/starships/LOAD_STARSHIPS',
  LOAD_STARSHIPS_SUCCESS: 'swapi/starships/LOAD_STARSHIPS_SUCCESS',
  LOAD_STARSHIPS_FAILURE: 'swapi/starships/LOAD_STARSHIPS_FAILURE',
};

export const loadStarships = (): ActionLoadStarships => ({
  type: STARSHIPS_ACTION_TYPES.LOAD_STARSHIPS,
});

export const loadStarshipsSuccess = (
  starships: Starship[],
): ActionLoadStarships => ({
  type: STARSHIPS_ACTION_TYPES.LOAD_STARSHIPS_SUCCESS,
  payload: { starships },
});

export const loadStarshipsFailure = (): ActionLoadStarships => ({
  type: STARSHIPS_ACTION_TYPES.LOAD_STARSHIPS_FAILURE,
});
