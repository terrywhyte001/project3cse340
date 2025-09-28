const Vehicle = require('./vehicle'); // your Mongoose Vehicle model

// Get a vehicle by its ID
async function getVehicleById(id) {
  try {
    // Mongoose auto-casts string to ObjectId
    const vehicle = await Vehicle.findById(id).populate('classification').lean();
    return vehicle;
  } catch (err) {
    console.error('Database error (getVehicleById):', err);
    throw err; // Controller can handle
  }
}

module.exports = { getVehicleById };


