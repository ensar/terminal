import { useLocalStorage } from 'hooks/useLocalStorage';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
  const user = useLocalStorage().get('terminalUser');

  return user ? <Outlet /> : <Navigate to={-1} />;
};

export default ProtectedRoute;
