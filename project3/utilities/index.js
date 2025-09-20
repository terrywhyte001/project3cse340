function buildVehicleDetailHTML(vehicle) {
    return `
        <div class="vehicle-detail-container">
            <div class="vehicle-image-container">
                <img src="${vehicle.inv_image}" alt="Image of ${vehicle.inv_make} ${vehicle.inv_model}" class="vehicle-image">
            </div>
            <div class="vehicle-info">
                <h1>${vehicle.inv_make} ${vehicle.inv_model} (${vehicle.inv_year})</h1>
                <p><strong>Price:</strong> $${Number(vehicle.inv_price).toLocaleString()}</p>
                <p><strong>Mileage:</strong> ${Number(vehicle.inv_miles).toLocaleString()} miles</p>
                <p><strong>Description:</strong> ${vehicle.inv_description}</p>
            </div>
        </div>
    `;
}

module.exports = {
    buildVehicleDetailHTML,
};
