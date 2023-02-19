import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiTableHead: {
      styleOverrides: {
        root: {
          '& th': {
            backgroundColor: '#C6FFC8',
            borderRight: '1px solid',
            padding: '10px',
            fontWeight: '600',
            textAlign: 'center',
          },
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          width: '250',
          maxHeight: '300px',
          backgroundColor: '#C6FFC8',
        },
      },
    },
  },
  palette: {
    main: {
      white: '#fff',
      red: '#ff0000',
      blue: '#12a6eb',
      green: '#C6FFC8',
      darkBlue: '#1BA6E7',
      darkRed: '#D41922',
      darkGreen: '#AEE0B0',
    },
  },
});
