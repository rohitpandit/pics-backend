const mongoose = require('mongoose');
const { pics, picsSchema } = require('./pics');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    name: {
      first: String,
      last: String,
    },
    photos: [picsSchema],
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
