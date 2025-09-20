const inventoryModel = require('../models/inventory-model');
const utilities = require('../utilities');

async function buildVehicleDetail(req, res, next) {
    const inv_id = req.params.inv_id;

    try {
        const vehicleData = await inventoryModel.getVehicleById(inv_id);
        if (!vehicleData) {
            return res.status(404).render('error', {
                title: 'Vehicle Not Found',
                message: 'The vehicle you requested does not exist.',
            });
        }

        const detailHTML = utilities.buildVehicleDetailHTML(vehicleData);

        res.render('inventory/detail', {
            title: `${vehicleData.inv_make} ${vehicleData.inv_model}`,
            content: detailHTML,
        });
    } catch (err) {
        next(err); // Pass error to error handling middleware
    }
}

module.exports = {
    buildVehicleDetail,
};
