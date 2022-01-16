import './App.scss';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


import Home from './pages/home/home';
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import Login from './pages/login/Login';

const App = () => {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ user ? <Home /> : <Navigate to="/register" replace />}/>
        {user && <>
          <Route path="/movies" element={<Home type="movies"/>} />
          <Route path="/series" element={<Home type="series"/>} />
          <Route path="/watch" element={<Watch />} />
        </>}
        <Route path="/register" element={ !user ? <Register /> : <Navigate to="/" replace />} />
        <Route path="/Login" element={ !user ? <Login /> : <Navigate to="/" replace />} />
        <Route exact path="*" element={ user ? <Home /> : <Navigate to="/register" replace />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
