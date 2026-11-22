import { Navigate } from 'react-router-dom';

function RouteRedirect() {
  const isAuthenticated = false; //  условно

  return isAuthenticated
    ? <Navigate to="/home" replace />
    : <Navigate to="/login" replace />;
}

export default RouteRedirect;