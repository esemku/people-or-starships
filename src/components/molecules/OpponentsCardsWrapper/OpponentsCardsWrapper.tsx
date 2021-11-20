import React, { ReactNode } from 'react';
import useStyles from './styles';

type OpponentsCardsWrapperProps = {
  children: ReactNode;
};

const OpponentsCardsWrapper: React.FC<OpponentsCardsWrapperProps> = ({
  children,
}: OpponentsCardsWrapperProps) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.cardsContainer}>{children}</div>
    </div>
  );
};

export default OpponentsCardsWrapper;
