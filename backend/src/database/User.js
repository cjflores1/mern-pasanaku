const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  position: Number,
  year: Number,
  status: Boolean
});

const User = mongoose.model('User', userSchema);

module.exports = User;