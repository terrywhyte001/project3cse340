// project3/controllers/vehicleController.js
const inventoryModel = require('../model/inventoryModel');

async function vehicleDetail(req, res, next) {
  const id = req.params.id;

  try {
    const vehicle = await inventoryModel.getVehicleById(id);

    if (!vehicle) {
      return res.status(404).render('error', { message: 'Vehicle not found' });
    }

    res.render('vehicleDetail', { vehicle });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  vehicleDetail, // ✅ must be exported
};

