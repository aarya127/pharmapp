// server.js
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000; // Different port to avoid conflicts

// Middleware
app.use(cors());
app.use(express.json());

// Ensure the uploads directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// File upload setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Files are saved to the uploads directory
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Files are saved with their original name
  },
});

const upload = multer({ storage });

// Upload route
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }
  res.send('File uploaded successfully');
});

// Base route for testing
app.get('/', (req, res) => {
  res.send('Welcome to the Express server!');
});

// Drugs page route
app.get('/drugs', (req, res) => {
  res.send('Welcome to the Drugs page!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
