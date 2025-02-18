const mongoose = require('mongoose');

const pasanakuSchema = new mongoose.Schema({
  year: Number,
  totalPlayers: Number,
  playersWithNumber: Number,
  status: Boolean
});

const Pasanaku = mongoose.model('Pasanaku', pasanakuSchema);

module.exports = Pasanaku;
