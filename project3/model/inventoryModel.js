// project3/model/inventoryModel.js
const pool = require('../db/connection');

async function getVehicleById(inv_id) {
  try {
    const sql = 'SELECT * FROM inventory WHERE inv_id = $1';
    const values = [inv_id];
    const result = await pool.query(sql, values);
    return result.rows[0];
  } catch (err) {
    console.error('Database error (getVehicleById):', err); // log actual error
    throw err; // let controller handle it
  }
}

module.exports = { getVehicleById };

