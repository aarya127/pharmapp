// src/Drugs.js
import React from 'react';
import UploadDocument from './UploadDocument';
import './Drugs.css';

function Drugs() {
  return (
    <div className="drugs-container">
      <h1>Please upload your prescription</h1>
      <p>Welcome to the Drugs page. Upload relevant documents to further find if the drug is availible.</p>
      
      <div className="content-sections">
        <section className="upload-section">
          <h2>Upload Documents</h2>
          <p>Please upload your prescription!</p>
          <UploadDocument />
        </section>

        <section className="info-section">
          <h2>Drug Information</h2>
          <p>Here, you can browse detailed information about different drugs, usage instructions, side effects, and more.</p>
          {/* Replace this with actual drug data as needed */}
          <ul>
            <li>Drug 1: Information about dosage, side effects, etc.</li>
            <li>Drug 2: Information about dosage, side effects, etc.</li>
            <li>Drug 3: Information about dosage, side effects, etc.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Drugs;
