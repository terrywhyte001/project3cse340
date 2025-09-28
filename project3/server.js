const express = require('express');
const path = require('path');
const session = require('express-session');
const vehicleRoutes = require('./routes/vehicleRoutes');
const viewUtils = require('./utils/viewUtils');

const app = express();
const PORT = process.env.PORT || 3000;

// EJS setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session setup
app.use(session({
  secret: 'mySecretKey',
  resave: false,
  saveUninitialized: true
}));

// Make view utilities globally available
app.locals.formatCurrency = viewUtils.formatCurrency;
app.locals.formatMileage = viewUtils.formatMileage;
app.locals.capitalize = viewUtils.capitalize;
app.locals.truncateText = viewUtils.truncateText;

// Routes
app.use('/vehicles', vehicleRoutes);

// 404 handler
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
