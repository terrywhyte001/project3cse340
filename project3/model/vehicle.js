const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  make: { type: String, required: true, trim: true },
  model: { type: String, required: true, trim: true },
  year: { type: Number, required: true },
  classification: { type: mongoose.Schema.Types.ObjectId, ref: 'Classification', required: true },
  price: { type: Number, required: true },
  miles: { type: Number, required: true },
  color: { type: String, required: true, trim: true },
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
