// project3/utils/viewUtils.js

function formatCurrency(amount) {
  return '$' + Number(amount).toLocaleString('en-US', { minimumFractionDigits: 2 });
}

function formatMileage(miles) {
  return Number(miles).toLocaleString('en-US');
}

function buildVehicleDetailHTML(vehicle) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vehicle Details</title>
    <style>
      body { font-family: Arial, sans-serif; margin: 20px; }
      .container { max-width: 900px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
      img { max-width: 100%; height: auto; border: 1px solid #ccc; }
      @media (max-width: 600px) { .container { grid-template-columns: 1fr; } }
      .details { padding: 10px; }
      .details h2 { margin-top: 0; }
      footer { text-align: center; margin-top: 40px; font-size: 0.9em; color: #555; }
    </style>
  </head>
  <body>
    <div class="container">
      <div>
        <img src="${vehicle.image || '/images/placeholder.jpg'}" alt="${vehicle.make} ${vehicle.model}">
      </div>
      <div class="details">
        <h2>${vehicle.year} ${vehicle.make} ${vehicle.model}</h2>
        <p><strong>Price:</strong> ${formatCurrency(vehicle.price)}</p>
        <p><strong>Mileage:</strong> ${formatMileage(vehicle.mileage)}</p>
        <p><strong>Color:</strong> ${vehicle.color}</p>
        <p><strong>Description:</strong> ${vehicle.description || 'No description available.'}</p>
      </div>
    </div>
    <footer>
      &copy; ${new Date().getFullYear()} Vehicle Inventory
    </footer>
  </body>
  </html>
  `;
}

module.exports = { buildVehicleDetailHTML, formatCurrency, formatMileage };
