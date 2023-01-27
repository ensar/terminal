import { createBrowserRouter } from 'react-router-dom';
import Terminals from 'pages/Terminals';
import ErrorPage from 'pages/ErrorPage';

export const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Terminals />,
      },
    ],
  },
]);
