import { createBrowserRouter } from 'react-router-dom';
import Terminals from 'pages/Terminals';
import ErrorPage from 'pages/ErrorPage';
import TerminalLogin from 'pages/TerminalLogin';

export const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Terminals />,
      },
      {
        path: '/terminal/:depCode/:filterCode',
        element: <TerminalLogin />,
      },
    ],
  },
]);