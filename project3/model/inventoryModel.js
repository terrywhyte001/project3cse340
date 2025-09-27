// project3/model/inventoryModel.js
const pool = require('../db/connection');

// Get all vehicles
async function getAllVehicles() {
  try {
    const sql = 'SELECT * FROM inventory ORDER BY inv_id ASC';
    const result = await pool.query(sql);
    return result.rows;
  } catch (err) {
    console.error('Database error (getAllVehicles):', err.message);
    throw new Error('Error fetching all vehicles from database');
  }
}

// Get a vehicle by ID
async function getVehicleById(inv_id) {
  try {
    const sql = 'SELECT * FROM inventory WHERE inv_id = $1';
    const values = [inv_id];
    const result = await pool.query(sql, values);
    return result.rows[0];
  } catch (err) {
    console.error('Database error (getVehicleById):', err.message);
    throw new Error('Error fetching vehicle from database');
  }
}

module.exports = { 
  getAllVehicles, 
  getVehicleById 
};
