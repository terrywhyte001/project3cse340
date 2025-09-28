const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  classification: { type: String, required: true },
  price: { type: Number, required: true },
  color: { type: String, default: 'Unknown' },
  mileage: { type: Number, default: 0 }
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
