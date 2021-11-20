import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export default makeStyles((theme: Theme) => ({
  root: {
    width: 400,
    marginLeft: 20,
    marginRight: 20,
    position: 'relative',
    overflow: 'visible !important',
  },
  rootWinner: {
    border: `1px solid ${theme.palette.success.light}`,
  },
  winnerText: {
    position: 'absolute',
    top: '-35px',
    left: '50%',
    transform: 'translate(-50%, 0)',
    fontSize: 21,
    color: theme.palette.success.light,
  },
}));
