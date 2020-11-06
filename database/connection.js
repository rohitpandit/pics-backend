const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/pics', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.log('error');
});

db.once('open', () => {
  console.log('database connected!');
});

module.exports = db;
