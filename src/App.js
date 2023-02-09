import { ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { router } from 'routes';
import { theme } from 'utils/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
