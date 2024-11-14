const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Ensure the uploads and uploads2 directories exist
const uploadDir = path.join(__dirname, 'uploads');
const uploadDir2 = path.join(__dirname, 'uploads2');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}
if (!fs.existsSync(uploadDir2)) {
  fs.mkdirSync(uploadDir2);
}

// File upload setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Check if the file is related to the "policy" upload
    if (req.body.uploadType === 'policy') {
      cb(null, uploadDir2); // Save to uploads2 if it's a policy document
    } else {
      cb(null, uploadDir); // Default to uploads folder
    }
  },
  filename: (req, file, cb) => {
    const sanitizedFileName = file.originalname.replace(/[^a-zA-Z0-9.]/g, '_'); // Sanitize filename
    cb(null, sanitizedFileName);
  },
});

const upload = multer({ storage });

// Upload route
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }

  const uploadType = req.body.uploadType || 'default'; // If not specified, default uploadType
  const folder = uploadType === 'policy' ? 'uploads2' : 'uploads';

  res.send(`File uploaded successfully to ${folder}`);
});

// Base route for testing
app.get('/', (req, res) => {
  res.send('Welcome to the Express server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
