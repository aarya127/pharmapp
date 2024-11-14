// src/UploadDocument.js
import React, { useState } from 'react';
import axios from 'axios';
import './UploadDocument.css';

function UploadDocument() {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setUploadStatus('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setUploadStatus(response.data);
      setFile(null);
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadStatus('File upload failed. Please try again.');
    }
  };

  return (
    <div className="upload-bubble">
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload File</button>
      </form>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
}

export default UploadDocument;
