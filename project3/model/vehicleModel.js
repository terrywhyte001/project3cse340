const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  classification: { type: String, required: true },
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String }
}, { timestamps: true });

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
