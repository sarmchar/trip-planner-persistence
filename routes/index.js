var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;
var apiRouter = require ('./api');

// router.get('/', function(req, res, next) {
//   Promise.all([
//     Hotel.findAll(),
//     Restaurant.findAll(),
//     Activity.findAll()
//   ])
//   .spread(function(dbHotels, dbRestaurants, dbActivities) {
//     res.render('index', {
//       templateHotels: dbHotels,
//       templateRestaurants: dbRestaurants,
//       templateActivities: dbActivities
//     });
//   })
//   .catch(next);
// });
router.get('/', function(req, res, next){
  res.render('index');
});
router.use('/api', apiRouter);

module.exports = router;
