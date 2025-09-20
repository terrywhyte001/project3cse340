
// app.js
require('dotenv').config();          // Load environment variables
const express = require('express');
const path = require('path');
const pool = require('./model/pool');

const app = express();

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Root route
app.get('/', (req, res) => {
    res.render('index', { title: 'Vehicle Inventory Home' });
});

// Inventory list
app.get('/inventory', async (req, res, next) => {
    try {
        const result = await pool.query('SELECT * FROM inventory ORDER BY inv_make, inv_model');
        res.render('inventory-list', { vehicles: result.rows, title: 'Inventory List' });
    } catch (err) {
        next(err);
    }
});

// Inventory details
app.get('/inventory/details/:id', async (req, res, next) => {
    const vehicleId = req.params.id;
    try {
        const result = await pool.query('SELECT * FROM inventory WHERE inv_id = $1', [vehicleId]);
        if (result.rows.length > 0) {
            res.render('inventory-detail', { 
                vehicle: result.rows[0], 
                title: `${result.rows[0].inv_make} ${result.rows[0].inv_model}` 
            });
        } else {
            res.status(404).render('error', { title: 'Not Found', message: 'Vehicle not found.' });
        }
    } catch (err) {
        next(err);
    }
});

// 500 error middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error', { 
        title: 'Server Error', 
        message: 'Something went wrong on our server.' 
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
