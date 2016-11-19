const express = require('express');
const router = express.Router();
const { getAllLocations } = require('../model/location');

router.get('/', getAllLocations, (req, res) => {
  res.json(res.puppies);
});

module.exports = router;
