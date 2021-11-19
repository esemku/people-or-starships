import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          height: '100%',
          width: '100%',
          scrollbarColor: '#999997 #999997',
          scrollbarWidth: 'thin',
        },
        '*::-webkit-scrollbar': {
          width: '0.4em',
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: '#999997',
          borderRadius: '2px 0px 0px 2px',
        },
        '*, *::before, *::after': {
          boxSizing: 'border-box',
        },
        body: {
          overflow: 'hidden',
          width: '100%',
          height: '100%',
          fontFamily: 'Poppins, sans-serif',
          backgroundColor: '#151521',
        },
        button: {
          fontFamily: 'Poppins, sans-serif',
        },
        ul: {
          listStyleType: 'none',
          margin: 0,
          padding: 0,
        },
        input: {
          fontFamily: 'Poppins, sans-serif',
          outline: 'none',
          '&:focus': {
            outline: 'none',
          },
          '&[type=number]': {
            '-webkit-appearance': 'textfield',
            '-moz-appearance': 'textfield',
          },
        },
        a: {
          textDecoration: 'none',
        },
      },
    },
  },
  shape: {
    borderRadius: 6,
  },
});

export default theme;
