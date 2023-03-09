import { createBrowserRouter } from 'react-router-dom';
import Terminals from 'pages/Terminals';
import ErrorPage from 'pages/ErrorPage';
import TerminalLogin from 'pages/TerminalLogin';
import DefectList from 'pages/DefectList';
import DefectEntry from 'pages/DefectEntry';
import ProtectedRoute from 'components/ProtectedRoute';

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
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: '/terminal/defects',
            element: <DefectList />,
          },
          {
            path: '/terminal/defectentry/:depCode/:filterCode/:termId',
            element: <DefectEntry />,
          },
        ],
      },
    ],
  },
]);
