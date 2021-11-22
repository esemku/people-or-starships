import React, { ChangeEvent } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Person } from 'types/people';
import { Starship } from 'types/starships';
import { PEOPLE_RESOURCES, STARSHIPS_RESOURCES } from 'utils/resources';
import { nanoid } from 'nanoid';
import useStyles from './styles';

type SelectProps = {
  options: typeof PEOPLE_RESOURCES | typeof STARSHIPS_RESOURCES;
  onChange: (value: keyof Person | keyof Starship) => void;
  value: keyof Person | keyof Starship;
};

const FormSelect: React.FC<SelectProps> = ({
  options,
  onChange,
  value,
}: SelectProps) => {
  const styles = useStyles();

  return (
    <FormControl>
      <InputLabel id="demo-simple-select-label" className={styles.inputLabel}>
        {value}
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value as keyof Person | keyof Starship)
        }
        className={styles.select}
      >
        {options.map((option) => (
          <MenuItem value={option.name} key={nanoid()}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FormSelect;
