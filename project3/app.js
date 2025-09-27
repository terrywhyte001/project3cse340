const express = require('express');
const path = require('path');
const vehicleRoutes = require('./routes/vehicleRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Use the routes file
app.use('/vehicles', vehicleRoutes);

// 404
app.use((req, res) => {
  res.status(404).render('error', { message: 'Page not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', { message: 'Something went wrong. Please try again later.' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
