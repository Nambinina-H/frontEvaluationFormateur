import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Welcome from './components/Welcome';
import Login from './components/authenfication/Login';
import Registration from './components/authenfication/Registration';
import LoginFaciale from './components/authenfication/LoginFaciale';
import LoginQrCode from './components/authenfication/LoginQrCode';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './assets/main.js';


function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginFaciale" element={<LoginFaciale />} />
          <Route path="/loginQrCode" element={<LoginQrCode />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
    </Router>
    );
}
export default App;