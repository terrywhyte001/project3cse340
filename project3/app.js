const express = require('express');
const inventoryModel = require('./model/inventorymode'); // updated to match your actual filename
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes

// Get a single vehicle by ID
app.get('/vehicles/:id', async (req, res) => {
  try {
    const vehicle = await inventoryModel.getVehicleById(req.params.id);
    if (!vehicle) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }
    res.json(vehicle);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching vehicle' });
  }
});

// You can add other CRUD routes later once the functions exist in your model
// Example placeholders:

/*
// Get all vehicles
app.get('/vehicles', async (req, res) => {
  try {
    const vehicles = await inventoryModel.getAllVehicles();
    res.json(vehicles);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch vehicles' });
  }
});

// Add a new vehicle
app.post('/vehicles', async (req, res) => { ... });

// Update a vehicle
app.put('/vehicles/:id', async (req, res) => { ... });

// Delete a vehicle
app.delete('/vehicles/:id', async (req, res) => { ... });
*/

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

