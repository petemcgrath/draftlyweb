import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: 'Barlow',
    },
    h2: {
      fontFamily: 'Barlow',
    },
    h3: {
      fontFamily: 'Barlow',
      fontWeight: 'bold',
    },
    h4: {
      fontFamily: 'Barlow',
      fontWeight: 'bold',
    },
    h5: {
      fontFamily: 'Barlow',
    },
    h6: {
      fontFamily: 'Barlow',
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#25D9B9',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
      variants: [
        {
          props: { size: 'large' },
          style: {
            fontSize: '1.063rem',
            borderRadius: 36,
          },
        },
      ],
    },
  },
  palette: {
    primary: {
      main: '#3D25D9',
    },
    secondary: {
      main: '#FFF',
      contrastText: '#000',
    },
    text: {
      primary: '#fff',
    },
    divider: '#464646',
  },
});

export default theme;
