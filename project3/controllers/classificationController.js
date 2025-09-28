const Classification = require('../models/classificationModel');

async function showAddClassification(req, res) {
  res.render('addClassification', { message: req.session.message || '', name: '' });
  req.session.message = null;
}

async function postAddClassification(req, res) {
  const name = req.body.name?.trim();

  if (!name) {
    req.session.message = '❌ Classification name is required';
    return res.render('addClassification', { name, message: req.session.message });
  }

  try {
    await Classification.addClassification(name);
    req.session.message = '✅ Classification added successfully';
    res.redirect('/management');
  } catch (err) {
    req.session.message = `❌ Error: ${err.message}`;
    res.render('addClassification', { name, message: req.session.message });
  }
}

module.exports = { showAddClassification, postAddClassification };
