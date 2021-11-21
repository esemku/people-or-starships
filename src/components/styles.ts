import { makeStyles } from '@mui/styles';

export default makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  drawButton: {
    marginTop: 60,
  },
  fightButton: {
    marginTop: 30,
  },
  winsCountersWrapper: {
    display: 'flex',
    minHeight: 24,
  },
  firstPlayerWinsCounter: {
    marginRight: 330,
  },
  secondPlayerWinsCounter: {
    marginLeft: 330,
  },
});
