import { loadPeople, getPeople } from 'ducks/people';
import { loadStarships, getStarships } from 'ducks/starships';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Person } from 'types/people';
import { Starship } from 'types/starships';
import { OpponentsSelector } from './molecules/OpponentsSelector';
import { OpponentsCardsWrapper } from './molecules/OpponentsCardsWrapper';
import useStyles from './styles';
import { OpponentCard, WinsCounter } from './atoms';

export type OpponentsKind = 'people' | 'starships';
export type Opponents = {
  firstOpponent: Person | Starship;
  secondOpponent: Person | Starship;
};

export type OpponentsWins = {
  firstOpponent: number;
  secondOpponent: number;
};

const App = () => {
  const dispatch = useDispatch();
  const people = useSelector(getPeople);
  const starships = useSelector(getStarships);
  const styles = useStyles();

  const [opponentsKind, setOpponentsKind] = useState<OpponentsKind>();
  const [opponents, setOpponents] = useState<Opponents>({
    firstOpponent: undefined,
    secondOpponent: undefined,
  });
  const [showWinner, setShowWinner] = useState<boolean>(false);
  const [winsCounter, setWinsCounter] = useState<OpponentsWins>({
    firstOpponent: undefined,
    secondOpponent: undefined,
  });

  useEffect(() => {
    dispatch(loadPeople());
    dispatch(loadStarships());
  }, []);

  const getTwoRandomNumbers = (arrayLength: number) => {
    const firstRandomNumber = Math.floor(Math.random() * arrayLength) + 0;
    let secondRandomNumber = Math.floor(Math.random() * arrayLength) + 0;
    while (firstRandomNumber === secondRandomNumber) {
      secondRandomNumber = Math.floor(Math.random() * arrayLength) + 0;
    }
    return { firstRandomNumber, secondRandomNumber };
  };

  const drawOpponents = () => {
    if (opponentsKind === 'people') {
      const twoRandomNumbers = getTwoRandomNumbers(people.length);
      setOpponents({
        firstOpponent: people[twoRandomNumbers.firstRandomNumber],
        secondOpponent: people[twoRandomNumbers.secondRandomNumber],
      });
    } else {
      const twoRandomNumbers = getTwoRandomNumbers(starships.length);
      setOpponents({
        firstOpponent: starships[twoRandomNumbers.firstRandomNumber],
        secondOpponent: starships[twoRandomNumbers.secondRandomNumber],
      });
    }
  };

  const isFirstOpponentWinner = () => {
    if (opponentsKind === 'people') {
      if (
        parseInt((opponents.firstOpponent as Person).mass, 10) >
        parseInt((opponents.secondOpponent as Person).mass, 10)
      ) {
        return true;
      }
      return false;
    }
    if (
      parseInt((opponents.firstOpponent as Starship).crew, 10) >
      parseInt((opponents.secondOpponent as Starship).crew, 10)
    ) {
      return true;
    }
    return false;
  };

  const handleDrawButtonClick = () => {
    drawOpponents();
    setShowWinner(false);
  };

  const handleOpponentsSelectorChange = (value: OpponentsKind) => {
    setOpponentsKind(value);
    setOpponents({
      firstOpponent: undefined,
      secondOpponent: undefined,
    });
  };

  const handleFightButtonClick = () => {
    setShowWinner(true);
    if (isFirstOpponentWinner()) {
      setWinsCounter({
        ...winsCounter,
        firstOpponent: winsCounter.firstOpponent
          ? winsCounter.firstOpponent + 1
          : 1,
      });
    } else {
      setWinsCounter({
        ...winsCounter,
        secondOpponent: winsCounter.secondOpponent
          ? winsCounter.secondOpponent + 1
          : 1,
      });
    }
  };

  return (
    <>
      <main className={styles.root}>
        <OpponentsSelector onChange={handleOpponentsSelectorChange} />
        {opponentsKind && (
          <LoadingButton
            variant="outlined"
            onClick={handleDrawButtonClick}
            loading={!people || !starships}
            className={styles.drawButton}
            data-testid="drawButton"
          >
            Draw {opponentsKind}
          </LoadingButton>
        )}
        {(winsCounter.firstOpponent || winsCounter.secondOpponent) && (
          <div
            className={styles.winsCountersWrapper}
            data-testid="winsCounterWrapper"
          >
            <WinsCounter
              totalWins={winsCounter.firstOpponent}
              className={styles.firstPlayerWinsCounter}
              data-testid="firstPlayerWinsCounter"
            />
            <WinsCounter
              totalWins={winsCounter.secondOpponent}
              className={styles.secondPlayerWinsCounter}
              data-testid="secondPlayerWinsCounter"
            />
          </div>
        )}
        {opponents.firstOpponent && (
          <>
            <OpponentsCardsWrapper>
              <OpponentCard
                opponent={opponents.firstOpponent}
                opponentsKind={opponentsKind}
                isWinner={showWinner && isFirstOpponentWinner()}
                data-testid="firstOpponentCard"
              />
              VS
              <OpponentCard
                opponent={opponents.secondOpponent}
                opponentsKind={opponentsKind}
                isWinner={showWinner && !isFirstOpponentWinner()}
              />
            </OpponentsCardsWrapper>
            <Button
              variant="outlined"
              className={styles.fightButton}
              onClick={handleFightButtonClick}
              size="large"
              color="warning"
              disabled={showWinner}
              data-testid="fightButton"
            >
              Fight!
            </Button>
          </>
        )}
      </main>
    </>
  );
};

export default App;
