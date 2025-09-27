const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

// ✅ correct, this will resolve /vehicles/:id
router.get('/:id', vehicleController.vehicleDetail);

module.exports = router;
