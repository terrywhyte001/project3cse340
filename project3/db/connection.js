const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,     // e.g. "dpg-xxxxxxx.render.com"
  user: process.env.DB_USER,     // from Render
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 5432,
  ssl: { rejectUnauthorized: false } // <-- important for Render
});

module.exports = pool;
