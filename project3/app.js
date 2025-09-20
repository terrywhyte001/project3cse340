const express = require('express');
const app = express();

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error', { 
        title: 'Server Error', 
        message: 'Something went wrong on our server.' 
    });
});

// 500 error trigger route
app.get('/error500', (req, res, next) => {
    next(new Error('Intentional 500 Error'));
});

// Root route
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Inventory details route
app.get('/inventory/details/:id', (req, res) => {
    const vehicleId = req.params.id;
    // For now, just send a placeholder response
    res.send(`Details for vehicle ID: ${vehicleId}`);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});