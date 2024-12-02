const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mock database (replace with an actual database like MongoDB, MySQL, etc.)
let users = [];
let orders = [
  { id: 1, name: 'Aspirin', description: 'Pain reliever', price: 10 },
  { id: 2, name: 'Ibuprofen', description: 'Anti-inflammatory', price: 15 },
  { id: 3, name: 'Paracetamol', description: 'Fever reducer', price: 12 },
  { id: 4, name: 'Amoxicillin', description: 'Antibiotic', price: 20 },
  { id: 5, name: 'Insulin', description: 'Diabetes management', price: 50 },
];

// JWT Secret Key (you should keep this in a secure place, like an environment variable)
const JWT_SECRET = 'your_secret_key';

// Set up multer storage configurations for prescription and policy files
const prescriptionStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save prescription files in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    const fileExtension = path.extname(file.originalname); // Get file extension
    cb(null, Date.now() + fileExtension); // Create a unique file name
  },
});

const policyStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads2/'); // Save policy files in the 'uploads2' folder
  },
  filename: (req, file, cb) => {
    const fileExtension = path.extname(file.originalname); // Get file extension
    cb(null, Date.now() + fileExtension); // Create a unique file name
  },
});

// Initialize multer with the storage configurations for prescription and policy files
const uploadPrescription = multer({ storage: prescriptionStorage });
const uploadPolicy = multer({ storage: policyStorage });

// Handle file uploads for both prescription and policy
app.post('/upload', (req, res, next) => {
  const upload = multer().fields([
    { name: 'prescriptionFile', maxCount: 1 },
    { name: 'policyFile', maxCount: 1 }
  ]);

  upload(req, res, (err) => {
    if (err) {
      return res.status(400).send(`Error uploading files: ${err.message}`);
    }

    // Log the uploaded files to the console
    console.log('Uploaded files:', req.files);

    // Handle the upload status
    if (req.files.prescriptionFile && req.files.policyFile) {
      res.send('Prescription and policy files uploaded successfully');
    } else if (req.files.prescriptionFile) {
      res.send('Prescription file uploaded successfully');
    } else if (req.files.policyFile) {
      res.send('Policy file uploaded successfully');
    } else {
      res.status(400).send('No files uploaded.');
    }
  });
});

// User Registration Route
app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  // Check if the user already exists
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create the user and store in the mock database (replace with real DB logic)
  const newUser = { email, password: hashedPassword };
  users.push(newUser);

  res.status(201).json({ message: 'Account created successfully' });
});

// User Login Route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Find the user in the mock database (replace with real DB logic)
  const user = users.find((user) => user.email === email);
  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  // Check if the password is correct
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: 'Incorrect password' });
  }

  // Generate JWT token
  const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });

  res.status(200).json({ message: 'Login successful', token });
});

// Search Route for /order-coverage
app.get('/search', (req, res) => {
  const query = req.query.query;  // Extract search term from query parameter

  if (!query) {
    return res.status(400).json({ message: 'Search query is required' });
  }

  // Perform search in the orders array (replace with database query logic)
  const results = orders.filter(order =>
    order.name.toLowerCase().includes(query.toLowerCase()) || 
    order.description.toLowerCase().includes(query.toLowerCase())
  );

  res.status(200).json(results); // Return the search results
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
