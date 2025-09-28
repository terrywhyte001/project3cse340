const Classification = require('../model/classification'); // make sure path is correct

// Render Add Classification Form
async function showAddClassification(req, res) {
  res.render('add-classification', {
    message: req.session.message || '',
    sticky: {}
  });
  req.session.message = null;
}

// Handle Add Classification POST
async function postAddClassification(req, res) {
  const name = req.body.name?.trim();

  if (!name) {
    req.session.message = '❌ Classification name is required';
    return res.render('add-classification', { sticky: { name }, message: req.session.message });
  }

  try {
    // Use Mongoose to save a new classification
    const classification = new Classification({ name });
    await classification.save();

    req.session.message = '✅ Classification added successfully';
    res.redirect('/vehicles/management');
  } catch (err) {
    // Handle duplicate names or other errors
    req.session.message = `❌ Error: ${err.message}`;
    res.render('add-classification', { sticky: { name }, message: req.session.message });
  }
}

module.exports = { showAddClassification, postAddClassification };
