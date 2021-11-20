import { loadPeople, getPeople } from 'ducks/people';
import { loadStarships, getStarships } from 'ducks/starships';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const people = useSelector(getPeople);
  const starships = useSelector(getStarships);

  console.log('people: ', people);
  console.log('starships: ', starships);

  useEffect(() => {
    dispatch(loadPeople());
    dispatch(loadStarships());
  }, []);

  return <div>App</div>;
};

export default App;
