import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Person } from 'types/people';
import { OpponentsKind } from 'components/App';
import { PEOPLE_CARD_ITEMS, STARSHIPS_CARD_ITEMS } from 'utils/cardItems';
import { Starship } from 'types/starships';
import clsx from 'clsx';
import { nanoid } from 'nanoid';
import useStyles from './styles';

type OpponentCardProps = {
  opponent: Person | Starship;
  isWinner: boolean;
  opponentsKind: OpponentsKind;
};

const OpponentCard: React.FC<OpponentCardProps> = ({
  opponent,
  isWinner,
  opponentsKind,
  ...rest
}: OpponentCardProps) => {
  const styles = useStyles();

  return (
    <Card
      className={clsx(styles.root, isWinner && styles.rootWinner)}
      {...rest}
    >
      {isWinner && (
        <div className={styles.winnerText} data-testid="winnerText">
          WINNER!
        </div>
      )}
      <CardContent>
        {(opponentsKind === 'people'
          ? PEOPLE_CARD_ITEMS
          : STARSHIPS_CARD_ITEMS
        ).map((cardItem) => {
          if (cardItem.parameter === 'name') {
            return (
              <Typography variant="body1" gutterBottom noWrap key={nanoid()}>
                {`${cardItem.label}: ${opponent[cardItem.parameter]}`}
              </Typography>
            );
          }
          return (
            <Typography
              variant="body2"
              color="text.secondary"
              gutterBottom
              noWrap
              key={nanoid()}
            >
              {`${cardItem.label}: ${opponent[cardItem.parameter]}`}
            </Typography>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default OpponentCard;
