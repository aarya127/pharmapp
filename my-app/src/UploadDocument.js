// src/UploadDocument.js
import React, { useState } from 'react';

function UploadDocument() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadMessage('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      // Replace this URL with your backend upload endpoint
      const response = await fetch('YOUR_BACKEND_API_URL/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setUploadMessage('File uploaded successfully!');
      } else {
        setUploadMessage('File upload failed.');
      }
    } catch (error) {
      setUploadMessage('An error occurred while uploading the file.');
    }
  };

  return (
    <div className="upload-document">
      <h2>Upload Document</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {uploadMessage && <p>{uploadMessage}</p>}
    </div>
  );
}

export default UploadDocument;
