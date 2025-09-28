const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const vehicleController = require('../controllers/vehicleController');

// Management view
router.get('/management', vehicleController.getManagementView);

// Add Classification
router.get('/add-classification', vehicleController.getAddClassificationView);
router.post(
  '/add-classification',
  body('classification').trim().notEmpty().withMessage('Classification name is required'),
  vehicleController.postAddClassification
);

// Add Vehicle
router.get('/add-vehicle', vehicleController.getAddVehicleView);
router.post(
  '/add-vehicle',
  body('make').trim().notEmpty().withMessage('Make is required'),
  body('model').trim().notEmpty().withMessage('Model is required'),
  body('year').isInt({ min: 1900 }).withMessage('Year is required'),
  body('classification').notEmpty().withMessage('Classification is required'),
  body('price').isFloat({ min: 0 }).withMessage('Price must be a positive number'),
  body('miles').isInt({ min: 0 }).withMessage('Miles must be a positive number'),
  body('color').trim().notEmpty().withMessage('Color is required'),
  vehicleController.postAddVehicle
);

module.exports = router;
