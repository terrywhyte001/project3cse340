const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

// Vehicle detail route
router.get('/details/:inv_id', inventoryController.buildVehicleDetail);

module.exports = router;
