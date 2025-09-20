const express = require('express');
const inventoryModel = require('./model/inventorymodel'); // adjust path if needed
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes

// Get all vehicles (optional: you can add this function to your model)
app.get('/vehicles', async (req, res) => {
  try {
    const vehicles = await inventoryModel.getAllVehicles(); // you can create this function
    res.json(vehicles);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch vehicles' });
  }
});

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

// Add a new vehicle
app.post('/vehicles', async (req, res) => {
  try {
    const newVehicle = await inventoryModel.addVehicle(req.body); // add this function to your model
    res.status(201).json(newVehicle);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error adding vehicle' });
  }
});

// Update a vehicle
app.put('/vehicles/:id', async (req, res) => {
  try {
    const updatedVehicle = await inventoryModel.updateVehicle(req.params.id, req.body); // add this function
    if (!updatedVehicle) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }
    res.json(updatedVehicle);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error updating vehicle' });
  }
});

// Delete a vehicle
app.delete('/vehicles/:id', async (req, res) => {
  try {
    const deleted = await inventoryModel.deleteVehicle(req.params.id); // add this function
    if (!deleted) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }
    res.json({ message: 'Vehicle deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error deleting vehicle' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

