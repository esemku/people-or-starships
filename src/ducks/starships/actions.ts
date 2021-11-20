export const STARSHIPS_ACTION_TYPES = {
  LOAD_STARSHIPS: 'swapi/starships/LOAD_STARSHIPS',
  LOAD_STARSHIPS_SUCCESS: 'swapi/starships/LOAD_STARSHIPS_SUCCESS',
  LOAD_STARSHIPS_FAILURE: 'swapi/starships/LOAD_STARSHIPS_FAILURE',
};

export const loadStarships = () => ({
  type: STARSHIPS_ACTION_TYPES.LOAD_STARSHIPS,
});

export const loadStarshipsSuccess = (starships) => ({
  type: STARSHIPS_ACTION_TYPES.LOAD_STARSHIPS_SUCCESS,
  payload: { starships },
});

export const loadStarshipsFailure = () => ({
  type: STARSHIPS_ACTION_TYPES.LOAD_STARSHIPS_FAILURE,
});
