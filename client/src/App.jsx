import './App.scss';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { AuthContext } from './context/authContext/AuthContext';
import Home from './pages/home/home';
import Watch from './pages/watch/Watch';
import User from './pages/user/User';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { useContext } from 'react';

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/register" replace />} />
        {user && <>
          <Route path="/movies" element={<Home type="movie" />} />
          <Route path="/series" element={<Home type="series" />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/user" element={<User />} />
        </>}
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" replace />} />
        <Route path="/Login" element={!user ? <Login /> : <Navigate to="/" replace />} />
        <Route exact path="*" element={user ? <Home /> : <Navigate to="/register" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
