const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('getting all the photos');
});

router.get('/photo/:photoId', (req, res) => {
  res.send('getting the photo with the id');
});

module.exports = router;
