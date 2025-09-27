const inventoryModel = require('../model/inventoryModel');

async function vehicleDetail(req, res, next) {
  const id = req.params.id;

  try {
    const vehicle = await inventoryModel.getVehicleById(id);

    if (!vehicle) {
      return res.status(404).render('error', { message: 'Vehicle not found' });
    }

    // Format values safely before sending to the view
    const formattedVehicle = {
      ...vehicle,
      priceFormatted: vehicle.price
        ? Number(vehicle.price).toLocaleString()
        : 'N/A',
      mileageFormatted: vehicle.mileage
        ? Number(vehicle.mileage).toLocaleString()
        : 'N/A',
      image: vehicle.image && vehicle.image.trim() !== ''
        ? vehicle.image
        : '/images/placeholder.jpg',
      description: vehicle.description && vehicle.description.trim() !== ''
        ? vehicle.description
        : 'No description available.'
    };

    res.render('vehicleDetail', { vehicle: formattedVehicle });
  } catch (err) {
    next(err); // pass to global error handler
  }
}

module.exports = {
  vehicleDetail
};
