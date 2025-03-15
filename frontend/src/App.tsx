import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import RaceInfo from './components/RaceInfo';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#e10600', // F1 red
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#121212', // Dark background
      paper: '#1e1e1e',   // Slightly lighter dark
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h4: {
      fontWeight: 700,
    },
    h6: {
      fontSize: '1rem',
      color: '#ffffff',
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: '#1e1e1e',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
          },
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1) !important',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RaceInfo />
    </ThemeProvider>
  );
}

export default App;