import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Only import Routes
import './App.css';
import { FaUser, FaRobot } from 'react-icons/fa'; 
import logo from './logo.jpeg'; 
import aboutImage from './about.jpeg'; 
import Home from './Home'; 
import Drugs from './Drugs'; 
import OrderCoverage from './OrderCoverage'; 
import ContactHelp from './ContactHelp'; 

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

        <Routes> {/* Use Routes here instead of Switch */}
          <Route path="/" element={<Home />} />
          <Route path="/drugs" element={<Drugs />} />
          <Route path="/order-coverage" element={<OrderCoverage />} />
          <Route path="/contact-help" element={<ContactHelp />} />
          {/* Add routes for robot and user if you have them */}
        </Routes>

        <section id="about" className="section about-section fade-in">
          <div className="about-content">
            <div className="about-text">
              <h2>About Us</h2>
              <p>Welcome to our application! We are dedicated to providing the best service to help you manage your pharmaceutical needs.</p>
              <p>Our team consists of experienced professionals committed to excellence and innovation in the field.</p>
            </div>
            <img src={aboutImage} alt="About Us" className="about-image" />
          </div>
        </section>
      </div>
    </Router>
  );
}

export default App;
