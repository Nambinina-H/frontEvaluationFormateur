import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from './components/authenfication/Login';


function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
    </Router>
    );
}
export default App;