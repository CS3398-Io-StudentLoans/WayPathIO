const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  busy: {
    type: Number,
    trim: true,
  },
  time: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model('Registration', registrationSchema);
