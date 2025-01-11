const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId , ref : "User"},
  message: {
    type: String,
    required: true,
  },
  
  region: { type: String, required: true },
  condition: { type: String, required: true },
  threshold: { type: Number, required: true },
});

module.exports = mongoose.model('Alert', alertSchema);
