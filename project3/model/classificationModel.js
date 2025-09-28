const mongoose = require('mongoose');

const classificationSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    unique: true, 
    trim: true 
  }
});

module.exports = mongoose.model('Classification', classificationSchema);
