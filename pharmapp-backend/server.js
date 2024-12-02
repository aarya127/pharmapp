// server.js (Backend)
const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 5000;

// Setup CORS to allow cross-origin requests from frontend
app.use(cors());

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save files in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    const fileExtension = path.extname(file.originalname); // Get file extension
    cb(null, Date.now() + fileExtension); // Create unique file name
  },
});

const upload = multer({ storage });

// Handle file uploads with multiple fields (prescriptionFile and policyFile)
app.post('/upload', upload.fields([
  { name: 'prescriptionFile', maxCount: 1 },
  { name: 'policyFile', maxCount: 1 }
]), (req, res) => {
  if (!req.files) {
    return res.status(400).send('No files uploaded.');
  }

  console.log('Uploaded files:', req.files); // Log uploaded files

  // Send success response
  res.send('Files uploaded successfully');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
