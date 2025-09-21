// project3/routes/vehicleRoutes.js
const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

router.get('/vehicles/:id', vehicleController.vehicleDetail);

module.exports = router;
