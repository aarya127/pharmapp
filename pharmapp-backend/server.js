const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000; // You can choose any available port

// Middleware
app.use(cors());
app.use(express.json());

// Sample data for drugs
const drugs = [
  { id: 1, name: "Aspirin", description: "Used to reduce pain and inflammation." },
  { id: 2, name: "Ibuprofen", description: "Nonsteroidal anti-inflammatory drug." },
  { id: 3, name: "Acetaminophen", description: "Pain reliever and fever reducer." },
  // Add more drugs as needed
];

// Endpoint to get drugs data
app.get('/api/drugs', (req, res) => {
  res.json(drugs);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
