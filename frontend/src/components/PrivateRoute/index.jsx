import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
  const isAuthenticated = false; // пока условно

  return isAuthenticated
    ? <Outlet />
    : <Navigate to="/login" replace />;
}

export default PrivateRoute;