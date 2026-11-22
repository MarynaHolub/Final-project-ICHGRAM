import { Navigate, Outlet } from 'react-router-dom';

function PublicRoute() {
  const isAuthenticated = false; // пока условно

  return isAuthenticated
    ? <Navigate to="/home" replace />
    : <Outlet />;  // Место для дочернего компонента
}

export default PublicRoute;

// isAuthenticated  получать состояние авторизации из одного источника- Redux (useSelector).Не нужно делать отдельную проверку токена в каждом компоненте. Лучше централизовать состояние авторизации в Redux.