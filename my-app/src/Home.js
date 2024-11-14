// src/Home.js
import React from 'react';
import aboutImage from './about.jpeg';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Our Application!</h1>
      <p>Explore the various features and services we offer to manage your pharmaceutical needs.</p>

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
  );
}

export default Home;
