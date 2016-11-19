const recon = require('express').Router();
const { reconSearch } = require('../services/recon-data.js')


recon.get('/', reconSearch, (req, res) => {
  res.render('filter', {
    results: res.recon || [],
  });
});

module.exports = recon;
