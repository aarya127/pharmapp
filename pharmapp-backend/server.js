const express = require('express');
const multer = require('multer');
const cors = require('cors');

const app = express();
const PORT = 5000; // Use a different port to avoid conflicts

// Middleware
app.use(cors());
app.use(express.json());

// File upload setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Make sure this directory exists
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// Sample upload route
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully');
});

// GET route for the root path
app.get('/', (req, res) => {
  res.send('Welcome to the Express server!'); // You can customize this message
});

// GET route for /drugs
app.get('/drugs', (req, res) => {
  res.send('Welcome to the Drugs page!'); // Customize this as needed
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
