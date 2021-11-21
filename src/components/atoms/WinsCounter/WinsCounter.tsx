import React from 'react';

type WinsCounterProps = {
  totalWins: number;
  className: string;
};

const WinsCounter: React.FC<WinsCounterProps> = ({
  totalWins,
  className,
  ...rest
}: WinsCounterProps) => {
  return (
    <div className={className} {...rest}>
      Total wins: {totalWins || 0}
    </div>
  );
};

export default WinsCounter;
