import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Main from './pages/Main';
import Search from './pages/Search';
import Explore from './pages/Explore';
import Messages from './pages/Messages';
import Notifications from './pages/Notifications';
import Create from './pages/Create';
import Profile from './pages/Profile';
import Login from './pages/LogIn';
import Register from './pages/Register';
import RouteRedirect from './components/RouteRedirect';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<RouteRedirect />} />

        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route path="/home" element={<Main />} />
            <Route path="/search" element={<Search />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/create" element={<Create />} />
            <Route path="/profile:id" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
