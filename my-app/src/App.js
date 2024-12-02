// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { FaUser, FaRobot } from 'react-icons/fa';
import logo from './logo.jpeg';
import Home from './Home';
import Drugs from './Drugs';
import OrderCoverage from './OrderCoverage';
import ContactHelp from './ContactHelp';
import User from './User'; // Import User component for login/register

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <img src={logo} alt="Logo" className="logo" />
          <div className="nav-buttons">
            <button onClick={() => window.location.href = '/'}>Home</button>
            <button onClick={() => window.location.href = '/drugs'}>Drugs</button>
            <button onClick={() => window.location.href = '/order-coverage'}>Order/Coverage</button>
            <button onClick={() => window.location.href = '/contact-help'}>Contact/Help</button>
          </div>
          <div className="nav-icons">
            <FaRobot className="icon" onClick={() => window.location.href = '/robot'} aria-hidden="true" />
            <FaUser className="icon" onClick={() => window.location.href = '/user'} aria-hidden="true" />
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drugs" element={<Drugs />} />
          <Route path="/order-coverage" element={<OrderCoverage />} />
          <Route path="/contact-help" element={<ContactHelp />} />
          <Route path="/user" element={<User />} /> {/* Add the /user route */}
          {/* Add routes for robot if you have them */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
