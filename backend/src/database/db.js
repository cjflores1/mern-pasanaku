const mongoose = require('mongoose');
const {DB_HOST, DB_DATABASE} = require("../config.js");

mongoose.connect(`${DB_HOST}${DB_DATABASE}`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected successfully');
});