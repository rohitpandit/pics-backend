const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('All the users');
});

router.get('/:userId', (req, res) => {
  res.send(' all pictures of hi user with that id');
});

router.post('/:userId', (req, res) => {
  res.send('uploading a pic');
});

router.delete('/:userId', (req, res) => {
  res.send('deleted the post');
});

module.exports = router;
