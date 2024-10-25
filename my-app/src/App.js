import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <button onClick={() => document.getElementById('home').scrollIntoView()}>Home</button>
        <button onClick={() => document.getElementById('about').scrollIntoView()}>About</button>
        <button onClick={() => document.getElementById('features').scrollIntoView()}>Features</button>
      </nav>

      <section id="home" className="section">
        <h2>Home</h2>
        <p>This is the home section.</p>
      </section>

      <section id="about" className="section">
        <h2>About</h2>
        <p>This is the about section.</p>
      </section>

      <section id="features" className="section">
        <h2>Features</h2>
        <p>This is the features section.</p>
      </section>
    </div>
  );
}

export default App;
