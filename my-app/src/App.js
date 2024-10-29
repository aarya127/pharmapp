import React from 'react';
import './App.css';
import { FaUser, FaRobot } from 'react-icons/fa'; // Ensure you have this package installed
import logo from '/Users/aaryas127/Documents/GitHub/pharmapp/my-app/src/logo.jpeg'; // Replace with the actual path to your logo image

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

      <section id="home" className="section">
        <h2>Home</h2>
        <p>This is the home section.</p>
      </section>

      <section id="drugs" className="section">
        <h2>Drugs</h2>
        <p>This is the drugs section.</p>
      </section>

      <section id="order-coverage" className="section">
        <h2>Order/Coverage</h2>
        <p>This is the order/coverage section.</p>
      </section>

      <section id="contact-help" className="section">
        <h2>Contact/Help</h2>
        <p>This is the contact/help section.</p>
      </section>
    </div>
  );
}

export default App;
