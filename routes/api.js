var Promise = require('bluebird');
var express = require('express');
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;
var apiRouter = express.Router();

apiRouter.get('/hotels', function(req, res, next) {
  Hotel.findAll()
  .then(function(hotelsArr){
    hotels = hotelsArr;
    res.json(hotelsArr);
  });
});

apiRouter.get('/restaurants', function(req, res, next) {
  Restaurant.findAll()
  .then(function(restaurantsArr){
    //restaurants = restaurantsArr;
    res.json(restaurantsArr);
  })
});

apiRouter.get('/activities', function(req, res, next) {
  Activity.findAll()
  .then(function(activitiesArr){
    activities = activitiesArr;
    res.json(activitiesArr);
  });
});

module.exports = apiRouter;
