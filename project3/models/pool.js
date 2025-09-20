// model/pool.js
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // Render Postgres connection string
    ssl: { rejectUnauthorized: false }          // required for Render
});

module.exports = pool;

