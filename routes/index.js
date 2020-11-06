const express = require('express');
const User = require('../database/models/user');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (err) {
    res.send(err);
  }
});

router.get('/photo/:photoId', (req, res) => {
  res.send('getting the photo with the id');
});

module.exports = router;
