const Vehicle = require('../models/Vehicle');
const Classification = require('../models/Classification');
const { validationResult } = require('express-validator');

// ===========================
// Render Management View
// ===========================
exports.getManagementView = async (req, res) => {
  try {
    const vehicles = await Vehicle.find().populate('classification').lean();
    res.render('management', { vehicles, message: req.session.message || null });
    req.session.message = null;
  } catch (err) {
    res.status(500).render('error', { message: err.message });
  }
};

// ===========================
// Render Add Classification Form
// ===========================
exports.getAddClassificationView = (req, res) => {
  res.render('add-classification', { errors: null, sticky: {} });
};

// ===========================
// Handle Add Classification POST
// ===========================
exports.postAddClassification = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render('add-classification', { errors: errors.array(), sticky: req.body });
  }

  try {
    const classification = new Classification({ name: req.body.classification });
    await classification.save();
    req.session.message = '✅ Classification added successfully';
    res.redirect('/vehicles/management');
  } catch (err) {
    res.render('add-classification', { errors: [{ msg: err.message }], sticky: req.body });
  }
};

// ===========================
// Render Add Vehicle Form
// ===========================
exports.getAddVehicleView = async (req, res) => {
  try {
    const classifications = await Classification.find().lean();
    res.render('add-vehicle', { errors: null, sticky: {}, classifications });
  } catch (err) {
    res.status(500).render('error', { message: err.message });
  }
};

// ===========================
// Handle Add Vehicle POST
// ===========================
exports.postAddVehicle = async (req, res) => {
  const errors = validationResult(req);
  const classifications = await Classification.find().lean();

  if (!errors.isEmpty()) {
    return res.render('add-vehicle', { errors: errors.array(), sticky: req.body, classifications });
  }

  try {
    const vehicle = new Vehicle({
      make: req.body.make,
      model: req.body.model,
      year: req.body.year,
      classification: req.body.classification,
      price: req.body.price,
      miles: req.body.miles,
      color: req.body.color
    });
    await vehicle.save();
    req.session.message = '✅ Vehicle added successfully';
    res.redirect('/vehicles/management');
  } catch (err) {
    res.render('add-vehicle', { errors: [{ msg: err.message }], sticky: req.body, classifications });
  }
};

// ===========================
// List Vehicles (Optional JSON API)
// ===========================
exports.listVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find().populate('classification').lean();
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


