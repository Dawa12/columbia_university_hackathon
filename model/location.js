const db = require('../lib/dbconnect');

<<<<<<< HEAD
const config = {
  host:       process.env.DB_HOST,
  port:       process.env.DB_PORT,
  database:   process.env.DB_NAME,
  user:       process.env.DB_USER,
  password:   process.env.DB_PASS
};

const db = pg(config);

module.exports = {
  getAllLocations(req, res, next) {
  console.log('reaches get all locations');
    db.any('SELECT * FROM location')
        .then((data) => {
        res.rows = data;
        next();
      })
      .catch(error => next(error));
  },
=======
function getAllLocations(req, res, next) {

  db.any('SELECT * FROM locations;')
    .then((data) => {
      res.data = data;
      next();
    })
    .catch(error => next(error));
}
>>>>>>> 44e36941074a582d21a805d7c7ecdb7f337f5a7d

// function getFiltered(req, res, next) {
//   db.any('SELECT * FROM location WHERE appName=$1, host=$2;', [req.body.appName, req.body.host])
//       .then((data) => {
//       res.rows = data;
//       next();
//     })
//     .catch(error => next(error));
// }

//  function getFilteredDecs(req, res, next) {
//   db.any('SELECT * FROM location WHERE appName=$1, host=$2 ORDER BY locTime DECS;', [req.body.appName, req.body.host])
//       .then((data) => {
//       res.rows = data;
//       next();
//     })
//     .catch(error => next(error));
// }

module.exports = {
  getAllLocations
}
