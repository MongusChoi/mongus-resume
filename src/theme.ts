import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h4: {
      fontSize: '3rem',
      fontWeight: 700,
      marginBottom: '1rem',
      display: 'block',
      color: '#333',
    },
    h5: {
      fontSize: '1.5rem',
      marginBottom: '1rem',
      display: 'block',
      color: '#666',
    }
  },
});

export default theme; 