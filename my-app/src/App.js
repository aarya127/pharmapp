import React from 'react';
import './App.css';
import { FaUser, FaRobot } from 'react-icons/fa'; // Ensure you have this package installed
import logo from '/Users/aaryas127/Documents/GitHub/pharmapp/my-app/src/logo.jpeg'; // Replace with the actual path to your logo image
import aboutImage from '/Users/aaryas127/Documents/GitHub/pharmapp/my-app/src/about.jpeg'; // Import your about image
import React, { useEffect, useState } from 'react';


function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" /> {/* Logo on the far left */}
        <div className="nav-buttons">
          <button onClick={() => document.getElementById('home').scrollIntoView()}>Home</button>
          <button onClick={() => document.getElementById('drugs').scrollIntoView()}>Drugs</button>
          <button onClick={() => document.getElementById('order-coverage').scrollIntoView()}>Order/Coverage</button>
          <button onClick={() => document.getElementById('contact-help').scrollIntoView()}>Contact/Help</button>
        </div>
        <div className="nav-icons">
          <FaRobot className="icon" />
          <FaUser className="icon" /> {/* Human icon on the far right */}
        </div>
      </nav>

      <section id="about" className="section about-section fade-in">
        <div className="about-content">
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              Welcome to our application! We are dedicated to providing the best service to help you manage your pharmaceutical needs. 
              Our goal is to simplify your healthcare experience and ensure you have access to the information you need.
            </p>
            <p>
              Our team consists of experienced professionals committed to excellence and innovation in the field. We believe in transparency, quality, and customer satisfaction.
            </p>
          </div>
          <img src={aboutImage} alt="About Us" className="about-image" /> {/* Insert image */}
        </div>
      </section>
    </div>
  );
}

export default App;
