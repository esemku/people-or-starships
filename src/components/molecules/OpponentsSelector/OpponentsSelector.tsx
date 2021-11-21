import React, { ChangeEvent } from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@mui/material';
import { OpponentsKind } from 'components/App';
import useStyles from './styles';

type OpponentsSelectorProps = {
  onChange: (value: OpponentsKind) => void;
};

const OpponentsSelector: React.FC<OpponentsSelectorProps> = ({
  onChange,
}: OpponentsSelectorProps) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Fight between:</FormLabel>
        <RadioGroup
          row
          aria-label="gender"
          name="row-radio-buttons-group"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value as OpponentsKind)
          }
        >
          <FormControlLabel
            value="people"
            control={<Radio data-testid="peopleRadioButton" />}
            label="People"
          />
          <FormControlLabel
            value="starships"
            control={<Radio data-testid="starshipsRadioButton" />}
            label="Starships"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default OpponentsSelector;
