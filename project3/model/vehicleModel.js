const db = require('../db/connection');

async function addVehicle(vehicle) {
  const sql = `INSERT INTO vehicles 
      (classification_id, make, model, year, price)
      VALUES (?, ?, ?, ?, ?)`;
  const [result] = await db.execute(sql, [
    vehicle.classification_id,
    vehicle.make,
    vehicle.model,
    vehicle.year,
    vehicle.price
  ]);
  return result;
}

async function getVehicles() {
  const [rows] = await db.execute(`SELECT * FROM vehicles`);
  return rows;
}

module.exports = { addVehicle, getVehicles };
