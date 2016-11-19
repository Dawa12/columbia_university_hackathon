const fetch = require('node-fetch');

function reconSearch(req, res, next) {
  fetch(`https://recon.meddle.mobi/json/data.json`)
  .then(r => r.json)
  .then((data) => {
    res.recon = data;
    next();
  })
  .catch((err) => {
    console.log(err);
    res.err = err;
    next();
  });
}

module.exports = {
  reconSearch
}
