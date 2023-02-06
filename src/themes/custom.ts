import { createTheme, ThemeOptions } from '@mui/material';

export const customTheme: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#353547',
      main: '#46b2f6',
      dark: '#1e1d1e',
    },
    background: {
      paper: '#353547',
      default: '#1e1d1e',
    },
  },
});

// #353547 grey
// #46b2f6 blue
// #1e1d1e black
