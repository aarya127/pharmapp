// src/UploadDocument.js
import React, { useState } from 'react';
import axios from 'axios';

function UploadDocument() {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(''); // To show upload success or error messages

  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setUploadStatus('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      // Post file to backend
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setUploadStatus(response.data); // Show success message
      setFile(null); // Clear selected file
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadStatus('File upload failed. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload File</button>
      </form>
      {uploadStatus && <p>{uploadStatus}</p>} {/* Show status messages */}
    </div>
  );
}

export default UploadDocument;
