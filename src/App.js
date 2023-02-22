import { ThemeProvider } from '@mui/material';
import { ToastProvider } from 'contexts/ToastContext';
import { RouterProvider } from 'react-router-dom';
import { router } from 'routes';
import { theme } from 'utils/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <RouterProvider router={router} />
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
