const mongoose = require('mongoose');

const picsSchema = new mongoose.Schema({
  data: Buffer,
});

const Pics = mongoose.model('Pics', picsSchema);

module.exports = {
  pics: Pics,
  picsSchema: picsSchema,
};
