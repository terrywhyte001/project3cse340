// project3/routes/vehicleRoutes.js
const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

// Correct: only use '/:id' here
router.get('/:id', vehicleController.vehicleDetail);

module.exports = router;
