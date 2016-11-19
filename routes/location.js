const express = require('express');
const router = express.Router();
const { getAllLocations } = require('../model/location');

router.get('/', getAllLocations, (req, res) => {
  res.json(res.data);
});

module.exports = router;
